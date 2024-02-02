import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.baseURL = '/v1/';

export const usedTokenStore = defineStore('token', {
    state: () => ({
        list: [],
        tokenLog: null,
        inputValues: [],
        setFormattedDate: "",
        lastToken: '',
        tokenSelect: {
            'status': 'open',
            'expire': -1,
            'expireMode': 'no',
            'allowSource': [],
            'allowSourceNum': 0,
        },
    }),
    getters: {
        numberOfInputs: state => {
            return Array.from({length: parseInt(state.tokenSelect.allowSourceNum)}, (_, i) => i);
        }
    },
    actions: {
        formatUnixTimestamp(unixTimestamp) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const date = new Date(unixTimestamp * 1000); // Convert to milliseconds

            const day = date.getDate();
            const month = months[date.getMonth()];
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');

            return `${day} ${month} ${hours}:${minutes}:${seconds}`;
        },
        convertToUnixTime(dateString) {
            if (!dateString) return -1;
            const date = new Date(dateString);
            return Math.floor(date.getTime() / 1000);
        },
        async updateToken(token) {
            try {
                let jsonStr = "all"
                if (this.tokenSelect.allowSourceNum > 0) {
                    let allowSourceSet = this.tokenSelect.allowSource.slice(0, this.tokenSelect.allowSourceNum);
                    jsonStr = JSON.stringify(allowSourceSet)
                }
                let expire = this.convertToUnixTime(this.tokenSelect.expire)
                if (this.tokenSelect.expireMode === 'no') {
                    expire = '-1'
                }
                let url = `config/token/update`
                const updateData =
                    {
                        "expire": expire,
                        "allow": jsonStr,
                        "status": this.tokenSelect.status,
                        "token": token
                    }
                const result = await axios.post(url, updateData)
                console.log("updateToken", result.data.data)
                if (result.data.status === 'ok') {
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
        async loadToken(token) {
            try {
                let url = `/config/token/` + token
                const result = await axios.get(url)

                if (result.data.data.config_data) {
                    const token = result.data.data.config_data
                    this.tokenSelect.status = token.status
                    if (token.expire && token.expire > 1) {
                        this.tokenSelect.expire = token.expire
                        this.tokenSelect.expireMode = 'yes'
                    }
                    if (token.allow && token.allow !== 'all') {
                        this.tokenSelect.allowSource = JSON.parse(token.allow);
                        this.tokenSelect.allowSourceNum = this.tokenSelect.allowSource.length
                    }
                    this.tokenSelect.status = token.status
                    this.tokenLog = result.data.data.token_used_log

                    if(this.tokenLog.length > 0 ){
                        // this.tokenLog.forEach(function(element) {
                        //     element.time_format = this.formatUnixTimestamp(element.create_at)
                        //     return element
                        // });
                        this.tokenLog.forEach((element) => {
                            element.time_format = this.formatUnixTimestamp(element.create_at);
                            return element;
                        });

                    }
                    console.log('token log is ');
                    console.log( this.tokenLog);
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
        async loadTokens() {
            try {
                let queryParams = new URLSearchParams();

                let url = `/config/tokens${queryParams.toString()}`
                const result = await axios.get(url)

                if (result.data.data.config_data) {
                    this.list = result.data.data.config_data
                    this.list.forEach(item => {
                        if (item.allow !== 'all') {
                            item.allow = JSON.parse(item.allow);
                            let newShow = ''
                            if (item.allow[1]) {
                                newShow = item.allow[0] + ',' + item.allow[1]
                            } else {
                                if (item.allow[0]) {
                                    newShow = item.allow[0]
                                }
                            }
                            item.allow = newShow
                        }
                    });
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
        async addNewToken() {
            try {
                const addNewData = {
                    "expire": -1,
                    "allow": "all",
                    "status": "open"
                }
                let url = `/config/token/new`
                const result = await axios.post(url, addNewData)

                if (result.data.status && result.data.status === 'ok') {
                    this.lastToken = result.data.data.config_data.token
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
        async removeToken(token) {
            try {
                let url = `config/token/remove`
                const postData = {'token': token}
                const result = await axios.post(url, postData)

                if (result.data.status) {
                    if (result.data.status == 'ok') {
                        return true
                    }
                }

            } catch (error) {
                toastr.error('error call api ', error.message)
                return false
            }
            toastr.error('error')
            return false
        }
    }
})

