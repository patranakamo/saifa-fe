import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/v1/';
export const useConfigStore = defineStore('config',
    {
        state: () => ({
            listWebHook: {
                "web_hook_url_newaction": "",
                "web_hook_url_start": "",
                "web_hook_url_end": "",
                "web_hook_url_update_invoice": ""
            },
            selectedOptionOpen: "open",
            selectedOption: 4,
            inputValues: [10, 20, 30, 40, 50, 60],
        }),
        getters: {
            numberOfInputs: state => {
                return Array.from({length: parseInt(state.selectedOption)}, (_, i) => i);
            }
        },
        actions: {
            async loadConfig(router) {
                try {
                    const returnData = await axios.get(`/config/webhook`)
                    if (!returnData.data.data.config_data) {
                        toastr.info('no data return after load');
                    }
                    const configData = returnData.data.data.config_data
                    this.listWebHook = configData

                    this.selectedOptionOpen = configData.status
                    this.selectedOption = configData.numRetry
                    this.inputValues = JSON.parse(configData.arrayRetry);
                } catch (error) {
                    if (error.response.statusText === 'Unauthorized') {
                        router.push({name: 'SignInPage'})
                    }
                    console.log("error case get data ",)
                }
            },
            async updateConfig(editConfig) {
                try {
                    const updateData = {
                        // web_hook_url_newaction: editConfig.newaction,
                        // web_hook_url_start: editConfig.start,
                        // web_hook_url_end: editConfig.end
                        web_hook_url_update_invoice: editConfig.update_invoice
                    }
                    const returnData = await axios.post(`/config/webhook/save`, updateData)
                    console.log(returnData.data)
                    toastr.success('update webhook url success');
                } catch (error) {
                    toastr.error('update webhook url fail');
                    console.log(error)
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
