import {defineStore} from 'pinia'
import axios from '../utils/axiosConfig';
import toastr from 'toastr';
export const usedDashboardStore = defineStore('dashboard', {
    state: () => ({
        invoice_count: {},
        webhook_count: {},
    }),
    actions: {
        async loadDashboard() {
            try {
                const url = `/dashboard`
                const result = await axios.get(url)
                if (result.data.data.webhook_count && result.data.data.invoice_count) {
                    this.invoice_count = result.data.data.invoice_count
                    this.webhook_count = result.data.data.webhook_count
                    return true;
                }

            } catch (error) {
                console.log("error case ", error)
                toastr.error('error call api ', error.message)
                return false
            }
            toastr.error('unable to get data')
            return false
        }
    }
})

