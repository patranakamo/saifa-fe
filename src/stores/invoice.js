import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.baseURL = '/v1/';

export const usedInvoiceStore = defineStore('invoice', {
    state: () => ({
        invoice: {},
        web_hook: [],
        list: [],
        total_count: 0,
        total_count_active: 0,
        total_count_success: 0,
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
        async addNewInvoice(shopName, currency, amount) {
            try {
                const url = `/invoice/new`
                const requestData =
                    {
                        "address_name": shopName,
                        "amount": amount,
                        "currency": currency,
                        "description_note": "-",
                        "meta_data": {'manual_from_saifa_system': true}
                    }

                const result = await axios.post(url, requestData)
                if (result.data.status == 'ok') {
                    return result.data.data.Invoice.invoice_id
                }

            } catch (error) {
                console.log("error case addNewInvoice ", error)
                toastr.error('error call api ', error.message)
                return ''
            }
            toastr.error('unable to get data')
            return ''
        },
        async loadInvoice(id = '') {
            try {
                const url = `/invoice/` + id
                const result = await axios.get(url)
                if (result.data.data.invoice) {
                    this.invoice = result.data.data.invoice
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
        async cancelInvoice(id = '') {
            try {
                const url = `/invoice/cancel`
                const requestData =
                    {
                        "invoice_id": id
                    }
                const result = await axios.post(url, requestData)
                if (result.data.status == 'ok') {
                    return true;
                }
                return false
            } catch (error) {
                console.log("error case ", error)
                toastr.error('error call api ', error.message)
                return false
            }
        },
        async loadInvoices(perPage = 0, pageNumber = 0, mode = '', search = '') {
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
                const url = `/invoices?${queryParams.toString()}`
                const list = await axios.get(url)

                if (list.data.data.invoices) {
                    this.list = list.data.data.invoices
                    this.list.forEach(item => {
                        if (!item.status) {
                            item.status = 'wait';
                        }
                    });
                    console.log(this.list)
                }
                if (list.data.data.count || list.data.data.count === 0) {
                    if (list.data.count === 0) {
                        toastr.info('no invoice found.')
                    }
                    this.total_count = list.data.data.count
                    this.total_count_active = list.data.data.active_count
                    this.total_count_success = list.data.data.success_count

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

