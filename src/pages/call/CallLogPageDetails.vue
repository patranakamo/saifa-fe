<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Call Details</h3>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <RecentWebHook :webHookData=callAccountStore.web_hook />
        </div>

        <div class="col-lg-4">
<!--          <OrderSummary />-->
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h3 class="fw-medium fs-18 mb-4">Call Details</h3>
              <div class="d-flex justify-content-between border-bottom mb-4">
                <h4 class="text-dark fs-14 fw-medium">Description</h4>
                <h4 class="text-dark fs-14 fw-medium">Info</h4>
              </div>
              <ul class="ps-0 mb-0 list-unstyled">
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">askID:</span>
                  <span class="text-dark fs-14 fw-medium"> {{callAccountStore.call.ask_id}}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">channel :</span>
                  <span class="text-dark fs-14 fw-medium">{{callAccountStore.call.channel}}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Call Duration :</span>
                  <span class="text-dark fs-14 fw-medium">{{callAccountStore.call.duration}}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Call Status :</span>
                  <span class="text-dark fs-14 fw-medium">{{callAccountStore.call.call_status}}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Start Call Time :</span>
                  <span class="text-dark fs-14 fw-medium">{{callAccountStore.formatDateTime(callAccountStore.call.start_time)}}</span>
                </li>
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">End Call Time :</span>
                  <span class="text-dark fs-14 fw-medium">{{callAccountStore.formatDateTime(callAccountStore.call.end_time)}}</span>
                </li>
<!--                <li class="d-flex justify-content-between align-items-center">-->
<!--                  <span class="text-dark fs-14 fw-medium">Total :</span>-->
<!--                  <span class="text-dark fs-14 fw-medium">$5,175</span>-->
<!--                </li>-->
              </ul>
            </div>
          </div>

          <CallStatusDetails :callStatus=callAccountStore.call.call_status />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">Varset Event</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Context:</span>
                   {{callAccountStore.varset_event.context}}
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Channel:</span>
                  {{callAccountStore.varset_event.channel}}
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Variable:</span>
                  {{callAccountStore.varset_event.variable}}
                </li>
                <li class="text-body fs-14">
                  <span class="text-dark fw-medium">Value:</span>
                  {{callAccountStore.varset_event.value}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">StatCall Event</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Context:</span>
                  {{ callAccountStore.start_call_event.context ? callAccountStore.start_call_event.context : '-'}}
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Channelstatedesc:</span>
                  {{ callAccountStore.start_call_event.channelstatedesc ? callAccountStore.start_call_event.channelstatedesc : '-'}}
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Time:</span>
                  {{ callAccountStore.start_call_event.time ? callAccountStore.start_call_event.time : '-'}}
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">EndCall Event</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Context:</span>
                  {{ callAccountStore.end_call_event.context ? callAccountStore.end_call_event.context : '-'}}
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">cause-txt:</span>
                  {{ callAccountStore.end_call_event.cause-txt ? callAccountStore.end_call_event.cause-txt : '-'}}
                </li>
                <li class="text-body fs-14">
                  <span class="text-dark fw-medium">Time:</span>
                  {{ callAccountStore.start_call_event.time ? callAccountStore.start_call_event.time : '-'}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script setup>
import RecentWebHook from "../../components/Ecommerce/OrdersDetails/RecentWebHook.vue";
import CallStatusDetails from "../../components/Ecommerce/OrdersDetails/CallStatusDetails.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

import {usedCallAccountStore} from '@/stores/event/call'

const callAccountStore = usedCallAccountStore()
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

// const asdf = ref('')
// const search = ref('')
// const pageNumber = ref(1)
// const rows = ref(1)
// const perPage = ref(10)

//
// const loadLogs = async () => {
//   await callAccountStore.loadCallLogs(perPage.value, pageNumber.value, mode.value, search.value)
//   rows.value = callAccountStore.total_count
// }
//
onMounted(async () => {
  if (route.params.id) {
    const askId = route.params.id
    await callAccountStore.loadCallLog(route.params.id)
    // rows.value = callAccountStore.total_count
  }
})
</script>