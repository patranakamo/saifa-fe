import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.baseURL = '/v1/';

export const usedCallAccountStore = defineStore('call', {
    state: () => ({
        call: {},
        varset_event: {},
        start_call_event: {},
        end_call_event: {},
        web_hook: [],
        list: [],
        total_count: 0,
    }),
    actions: {
        formatDateTime(dateTimeStr) {
            // Create a new Date object
            let date = new Date(dateTimeStr);

            // Array of month names
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Format the date parts
            let day = date.getDate();
            let month = months[date.getMonth()];
            let hours = date.getHours().toString().padStart(2, '0');
            let minutes = date.getMinutes().toString().padStart(2, '0');
            let seconds = date.getSeconds().toString().padStart(2, '0');

            // Construct the formatted string
            return `${day}${month} ${hours}:${minutes}:${seconds}`;
        },
        async loadCallLog(id = '') {
            try {
                let url = `/event/call/` + id
                const result = await axios.get(url)
                if (result.data.data) {
                    this.call = result.data.data
                    this.varset_event = result.data.varset_event
                    this.start_call_event = result.data.start_call_event
                    this.end_call_event = result.data.end_call_event
                    this.web_hook = result.data.web_hook_logs
                    this.web_hook.forEach(item => {
                        item['time_format'] = this.formatDateTime(item['time'])
                        return item
                    });
                    return true;
                }

            } catch (error) {
                console.log("error case ", error)
                toastr.error('error call api ', error.message)
                return false
            }
            toastr.error('unable to get data')
            return false
        },
        async loadCallLogs(perPage = 0, pageNumber = 0, mode = '', search = '') {
            try {

                let queryParams = new URLSearchParams();
                if (mode) {
                    queryParams.set('mode', mode);
                }
                if (pageNumber) {
                    queryParams.set('page', pageNumber);
                }
                if (perPage) {
                    queryParams.set('perPage', perPage);
                }
                if (perPage) {
                    queryParams.set('search', search);
                }
                let url = `/event/calls?${queryParams.toString()}`
                const list = await axios.get(url)

                if (list.data.data) {
                    this.list = list.data.data
                }
                if (list.data.count || list.data.count === 0) {
                    if (list.data.count === 0) {
                        toastr.info('no call found.')
                    }
                    this.total_count = list.data.count
                    return true
                }
            } catch (error) {
                console.log("error case ", error)
                toastr.error('error call api ', error.message)
                return false
            }
            toastr.error('unable to get data')
            return false
        },
    }
})

