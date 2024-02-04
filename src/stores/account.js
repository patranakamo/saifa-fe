import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/v1/';

export const useAccountStore = defineStore('account', {
    state: () => ({
        alreadyLogin: false,
        userId: "",
        role: '',
        userName: '',
        lastLoginTime: 0,
    }),
    actions: {
        async logout() {
            try {
                const logoutData = {
                    user_id: this.userId
                }
                const returnData = await axios.post(`/logout`, logoutData)
                if(!returnData.data.error_code || returnData.data.error_code === 'user_already_logout'){
                    this.userId = ""
                    this.alreadyLogin = false
                    this.role = 'not_login'
                    toastr.success('logout success')
                    return true
                }
            } catch (error) {
                console.log("error case ", error)
                toastr.error('login error ', error.message)
                return false
            }
            toastr.error('logout fail')
            return false
        },
        async login(username, password) {
            try {
                const loginData = {
                    username,
                    password
                }
                const loginReturnData = await axios.post(`/login`, loginData)
                if (!loginReturnData.data) {
                    throw new Error("can't connect to login server to process");
                }
                const loginD = loginReturnData.data

                if (loginD.message && !loginD.error_code) {
                    await this.checkAuth()
                    toastr.success('login success');
                    this.userName = username
                    return true;
                    //push to index page
                } else {
                    toastr.error('login fail');
                }
            } catch (error) {
                console.log("error case ", error)
                toastr.error('login error ', error.message);
                return false;
            }
            return false;
        },
        async checkAuth() {
            try {
                // if (this.userId !== "") {
                //     return true
                // }
                const returnData = await axios.get(`/check/auth`)
                // console.log(returnData.data.auth)
                if (returnData.data.auth && returnData.data.auth.userUid !== -1) {
                    this.userId = returnData.data.auth.userUid
                    if(this.userName != 'admin')
                        this.role = 'Normal User'
                    else
                        this.role = 'Admin'

                    this.lastLoginTime = returnData.data.auth.lastLoginTime
                    return true
                } else {
                    toastr.info('you are not login yet');
                    this.userId = ""
                    return false
                }
            } catch (error) {
                console.log(error)
                return false
            }
        },
    }
})

