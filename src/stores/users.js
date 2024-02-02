import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.baseURL = '/v1/';

export const usedUsersStore = defineStore('users', {
    state: () => ({
        list: [],
        LoginLog: null,
        inputValues: [],
        setFormattedDate: "",
        lastToken: '',
        newUserId: '',
        userSelect: {
            "user_id": "",
            "username": "",
            "status": "active",
            "create_at": -1,
            "update_at": -1,
            "last_login_time": -1,
            "new_password": "",
            "is_admin": false
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
        async updateUser(userId) {
            try {
                let url = `user/update`
                let updateData =
                    {
                        "user_id": userId,
                        "status": this.userSelect.status
                    }

                if (this.userSelect.new_password) {
                    let newPassword = this.userSelect.new_password
                    if (newPassword.length > 1) {
                        updateData.new_password = newPassword
                    }
                }

                const result = await axios.post(url, updateData)
                console.log("update user ", result.data.data)
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
        async loadUser(userId) {
            try {
                let url = `/user/` + userId
                const result = await axios.get(url)

                if (result.data.data.user) {
                    const user = result.data.data.user
                    this.userSelect = user
                    this.LoginLog = result.data.data.used_log

                    if (this.LoginLog.length > 0) {
                        this.LoginLog.forEach((element) => {
                            element.time_format = this.formatUnixTimestamp(element.create_at);
                            return element;
                        });
                    }
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
        async loadUsers() {
            try {
                let url = '/users'
                const result = await axios.get(url)

                if (result.data.data.users) {
                    this.list = result.data.data.users
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
        async addNewUser(username, password) {
            try {
                const addNewData = {
                    "username": username,
                    "password": password,
                    "status": this.userSelect.status
                }
                let url = `/user/new`
                const result = await axios.post(url, addNewData)

                if (result.data.status && result.data.status === 'ok') {
                    this.newUserId = result.data.data.config_data.user
                    return true
                }

            } catch (error) {
                console.log("error case ja ", error.response.data.data.message)
                toastr.error(error.response.data.data.message)
                return false
            }
            toastr.error('unable to get data')
            return false
        },
        async removeUser(UserId) {
            try {
                let url = `user/remove`
                const postData = {'user_id': UserId}
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

