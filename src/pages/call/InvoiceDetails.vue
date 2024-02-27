<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Invoice Page</h3>
      </div>

      <div class="row">

        <div class="col-lg-12">

          <div class="card border-0 box-shadow border-radius-10 mb-4">

            <div v-if="!newMode" class="card-body p-4">
              <h3 class="fw-medium fs-18 mb-4">Invoice Details</h3>
              <div class="d-flex justify-content-between border-bottom mb-4">
                <h4 class="text-dark fs-14 fw-medium">Description</h4>
                <h4 class="text-dark fs-14 fw-medium">Info</h4>
              </div>
              <ul class="ps-0 mb-0 list-unstyled">
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Invoice ID:</span>
                  <span class="text-dark fs-14 fw-medium"> {{ localInvoiceStore.invoice.invoice_id }}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">channel :</span>
                  <span class="text-dark fs-14 fw-medium">{{ localInvoiceStore.invoice.address_name }}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">amount :</span>
                  <span class="text-dark fs-14 fw-medium">{{ localInvoiceStore.invoice.amount }} THB</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">status :</span>
                  <span class="text-dark fs-14 fw-medium">wait</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">wallet address of lnd format :</span>
                  <span class="text-dark fs-14 fw-medium">{{ localInvoiceStore.invoice.r_hash }}</span>
                </li>
              </ul>
            </div>
            <div v-else class="card-body p-4">
              <h3 class="fw-medium fs-18 mb-4">Add New Invoice</h3>
              <div class="d-flex justify-content-between border-bottom mb-4">
                <h4 class="text-dark fs-14 fw-medium"></h4>
                <h4 class="text-dark fs-14 fw-medium"></h4>
              </div>

              <ul class="ps-0 mb-0 list-unstyled">

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="left-details text-body fs-14">Shop name :</span>
                  <span class="right-details text-dark fs-14 fw-medium">
                    <select v-model="shopName" class="form-select form-control">
                       <option
                           v-for="(option, index) in localuseConfigStore.inputValues"
                           :key="index"
                           :value="option"
                       > {{ option }} </option>
                    </select>
                  </span>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="left-details text-body fs-14">Currency :</span>
                  <span class="right-details text-dark fs-14 fw-medium">
                    <select v-model="currency" class="form-select form-control">
                        <option value="BTC-SAT">BTC-SAT</option>
                        <option disabled value="USD">USD (not active on this version)</option>
                        <option disabled value="THB">THB (not active on this version)</option>
                    </select>
                  </span>
                </li>
                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="left-details text-body fs-14">Amount :</span>
<!--                  <span class="right-details text-dark fs-14 fw-medium">-->
<!--                    <input class="form-control" type="number"> {{ currency }}-->
<!--                  </span>-->
                  <div class="right-details input-container">
                    <input v-model="amount" type="number" id="numberInput" placeholder="Enter Amount">
                    <span class="currency-label">{{ currency }}</span>
                  </div>
                </li>
              </ul>

              <div class="col-sm-10">
                <div class="form-group mb-0 d-flex">

                  <button @click="addNewInvoice()" class="default-btn">Save</button>

                  <router-link :to="{name:'InvoiceList' }">
                    <button class="default-btn border-btn ms-3"> Cancel</button>
                  </router-link>
                </div>
              </div>

            </div>

          </div>

          <!--          <CallStatusDetails :callStatus=localInvoiceStore.invoice.status />-->
        </div>
      </div>
      <div class="row justify-content-center">


        <div class="col-xxl-4 col-md-6" v-if="qrCodeData.length>0 ">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">QR CODE</h3>
              </div>

              <div>
                <img :src="qrCodeData" alt="QR Code"/>
              </div>

              <!--              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">-->
              <!--                <li class="text-body mb-2 fs-14">-->
              <!--                  <span class="text-dark fw-medium">Context:</span>-->
              <!--                  {{ localInvoiceStore.end_call_event.context ? localInvoiceStore.end_call_event.context : '-'}}-->
              <!--                </li>-->
              <!--                <li class="text-body mb-2 fs-14">-->
              <!--                  <span class="text-dark fw-medium">cause-txt:</span>-->
              <!--                  {{ localInvoiceStore.end_call_event.cause-txt ? localInvoiceStore.end_call_event.cause-txt : '-'}}-->
              <!--                </li>-->
              <!--                <li class="text-body fs-14">-->
              <!--                  <span class="text-dark fw-medium">Time:</span>-->
              <!--                  {{ localInvoiceStore.start_call_event.time ? localInvoiceStore.start_call_event.time : '-'}}-->
              <!--                </li>-->
              <!--              </ul>-->
            </div>
          </div>
        </div>
      </div>

      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
//import RecentWebHook from "../../components/Ecommerce/OrdersDetails/RecentWebHook.vue";
// import CallStatusDetails from "../../components/Ecommerce/OrdersDetails/CallStatusDetails.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

import {usedInvoiceStore} from '@/stores/invoice'
import {useShopStore} from "@/stores/shop";

const localInvoiceStore = usedInvoiceStore()
const localuseConfigStore = useShopStore();

import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import QRCode from 'qrcode'
import toastr from "toastr";
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter();
const qrCodeData = ref('')
const currency = ref('BTC-SAT')
const amount = ref(0)
const route = useRoute()
const newMode = ref(false)
const shopName = ref('')

onMounted(async () => {
  if (route.params.id && route.params.id === 'new') {
    await localuseConfigStore.loadConfig(router)
    newMode.value = true

    if (localuseConfigStore.inputValues && localuseConfigStore.inputValues.length > 0) {
      shopName.value = localuseConfigStore.inputValues[0]
    }

  } else if (route.params.id && route.params.id !== 'new') {
    await localInvoiceStore.loadInvoice(route.params.id)
    // rows.value = localInvoiceStore.total_count
    const stringData = localInvoiceStore.invoice.qr_code
    await generateQRCode(stringData)
  }
})

const addNewInvoice = async () => {
  let newInvoiceId = await localInvoiceStore.addNewInvoice(shopName.value,currency.value,amount.value)
  if (newInvoiceId && newInvoiceId.length > 0) {
    toastr.success('add new invoice success!')

    await localInvoiceStore.loadInvoice(newInvoiceId)
    const stringData = localInvoiceStore.invoice.qr_code
    await generateQRCode(stringData)

    // setTimeout(() => {
    //   router.push({name: 'TokenList'});
    // }, 2000);

  }
}

const generateQRCode = async (data) => {
  qrCodeData.value = await QRCode.toDataURL(data)
}

</script>
<style scoped>
.left-details {
  min-width: 300px;
}

.right-details {
  min-width: 300px;
  max-width: 400px;
  float: left;
  position: absolute;
  margin-left: 300px;
  padding: 6px;
}

.input-container {
  display: flex;
  /*align-items: center;*/
  /*border: 1px solid #ccc;*/
  /*border-radius: 4px;*/
  /*padding: 5px;*/

  /*background-color: #F4F6FA;*/
  border: 1px solid #F4F6FA;
  height: 50px;
  color: var(--bodyColor);
  font-size: 15px;
  padding: 10px 15px;
  transition: var(--transition);
  border-radius: 5px;
}

input[type="number"] {
  border: none;
  outline: none;
  /*padding: 5px;*/
  flex-grow: 1;
}

.currency-label {
  margin-left: 4px;
}

</style>