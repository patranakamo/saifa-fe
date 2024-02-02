import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVueNext from "bootstrap-vue-next";
import VueApexCharts from "vue3-apexcharts";
import VueFeather from 'vue-feather';
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 5000,
    extendedTimeOut: 1000,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
};

import "./assets/custom.scss";
const pinia = createPinia()
const app = createApp(App).use(router);

app.use(VueApexCharts);
app.use(BootstrapVueNext);
app.use(pinia)
app.component(VueFeather.name, VueFeather);
app.mount("#app");
