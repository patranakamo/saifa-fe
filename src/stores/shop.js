import {defineStore} from 'pinia'
import axios from 'axios';
import toastr from 'toastr';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/v1/';
export const useShopStore = defineStore('config',
    {
        state: () => ({
            selectedOptionOpen: "open",
            selectedOption: 1,
            inputValues: ['default shop'],
        }),
        getters: {
            numberOfInputs: state => {
                return Array.from({length: parseInt(state.selectedOption)}, (_, i) => i);
            }
        },
        actions: {
            async loadConfig(router) {
                try {
                    const returnData = await axios.get(`/config/shops`)

                    console.log("load config front end ")
                    console.log(returnData.data.data.config_data)

                    if (!returnData.data.data.config_data) {
                        toastr.info('no data return after load');
                    }
                    const configData = returnData.data.data.config_data
                    this.selectedOption = configData.numShop
                    this.inputValues = JSON.parse(configData.arrayStop);
                } catch (error) {
                    if (error.response.statusText === 'Unauthorized') {
                        router.push({name: 'SignInPage'})
                    }
                    console.log("error case get data ",)
                }
            },
            async updateShopConfig() {
                try {
                    const updateData = {
                        numShop: this.selectedOption,
                        arrayStop: this.inputValues,
                    }
                    const returnData = await axios.post(`/config/shop/save`, updateData)
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
