import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/v1/';
export const useConfigStore = defineStore('config',
    {
        state: () => ({
            webHookUrl: "",
            header_key: "",
            api_key: "",
            internal_note: "",
            selectedOptionOpen: "open",
            authOption: "close",
            selectedOption: 4,
            inputValues: [10, 20, 30, 40, 50, 60],
        }),
        getters: {
            numberOfInputs: state => {
                return Array.from({length: parseInt(state.selectedOption)}, (_, i) => i);
            }
        },
        actions: {
            async loadConfig() {
                try {
                    const returnData = await axios.get(`/config/webhook`)
                    if (!returnData.data.data.config_data) {
                        toastr.info('no data return after load');
                    }
                    const configData = returnData.data.data.config_data

                    this.selectedOptionOpen = configData.status
                    if (configData.auth_option) {
                        this.authOption = configData.auth_option
                        this.bearer = configData.bearer
                        this.header_key = configData.header_key
                        this.api_key = configData.customized_api_key
                    }
                    this.selectedOption = configData.numRetry
                    this.webHookUrl = configData.web_hook_url_update_invoice
                    this.internal_note = configData.internal_note

                    if (configData.arrayRetry) {
                        this.inputValues = JSON.parse(configData.arrayRetry);
                    }
                } catch (error) {
                    console.log("error case get data ", error)
                }
            },
            async updateConfig() {
                try {
                    let updateData = {
                        web_hook_url_update_invoice: this.webHookUrl,
                        auth_option: this.authOption,
                        internal_note: this.internal_note
                    }
                    if (this.authOption === 'bearer') {
                        updateData.bearer = this.bearer
                    }
                    if (this.authOption === 'customized') {
                        updateData.header_key = this.header_key
                        updateData.customized_api_key = this.api_key
                    }
                    const returnData = await axios.post(`/config/webhook/save`, updateData)
                    console.log(returnData.data)
                    toastr.success('update webhook url success');
                } catch (error) {
                    if (error.response.data.data.message) {
                        const messageError = error.response.data.data.message
                        toastr.warning('update webhook url fail ' + messageError);
                    } else {
                        toastr.error('update webhook url fail ');
                    }
                }
            },
            async updateConfigRetryTime() {
                try {
                    const updateData = {
                        numRetry: this.selectedOption,
                        arrayRetry: this.inputValues,
                        status: this.selectedOptionOpen
                    }
                    const returnData = await axios.post(`/config/retry/save`, updateData)
                    console.log(returnData.data)
                    toastr.success('update retry fail config success');
                } catch (error) {
                    toastr.error('update retry config fail');
                    console.log(error)
                }
            }
        }
    }
)
