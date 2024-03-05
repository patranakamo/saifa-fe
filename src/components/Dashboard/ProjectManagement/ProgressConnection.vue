<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Total waiting Invoice: {{invoiceData.totalActiveInvoice}}</h3>
              <span class="text-body">Complete Invoice</span>
              <h1 class="fw-medium fs-30 mb-3">{{invoiceData.totalInvoice}}</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                :aria-valuenow=invoiceData.totalInvoiceDone
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-primary rounded-0"
                  :style="`width: ${invoiceData.percentInvoiceDone}%; height: 10px`"
                ></div>
              </div>

              <p class="fs-12 text-dark lh-1 mt-2">
                <span class="text-success">{{invoiceData.percentInvoiceDone}}%</span> of the total invoice is
                complete
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                class="img-top"
                src="../../../assets/images/icons/project-icon-1.svg"
                alt="project-icon-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">WebHookEvent: {{webHookData.totalSend}}</h3>
              <span class="text-body">Fail Event</span>
              <h1 class="fw-medium fs-30 mb-3">{{webHookData.totalSendFail}}</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-success rounded-0"
                  :style="`width: ${webHookData.percentDone}%; height: 10px`"
                ></div>
              </div>
              <p class="fs-12 text-dark lh-1 mt-2">
                <span class="text-danger">{{100-webHookData.percentDone}}%</span> of webhook is failed to update.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                style="opacity:0.6"
                class="img-top"
                src="../../../assets/images/icons/settings.svg"
                alt="project-icon-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6" style="height: 178px">
      <div class="card border-0 box-shadow border-radius-10 mb-4 block-top">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Connect to LINE</h3>
              <span class="text-body"> </span>
              <h1 class="fw-medium fs-30 mb-3">Not Connect</h1>
<!--              <div-->
<!--                class="progress rounded-0 mb-0 progress-width"-->
<!--                role="progressbar"-->
<!--                aria-label="Basic example"-->
<!--                aria-valuenow="90"-->
<!--                aria-valuemin="0"-->
<!--                aria-valuemax="100"-->
<!--                style="height: 10px; background-color: #f4f6fa; width: 210px"-->
<!--              >-->
<!--                <div-->
<!--                  class="progress-bar bg-warning rounded-0"-->
<!--                  style="width: 90%; height: 10px"-->
<!--                ></div>-->
<!--              </div>-->
              <p class="fs-12 text-dark lh-1 mt-2">
                this status will base on app on line that send request to this
                project.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                class="img-top"
                src="../../../assets/images/icons/project-icon-3.svg"
                alt="project-icon-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6" >
      <div class="card border-0 box-shadow border-radius-10 mb-4 block-top">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Connect WOO Commerce</h3>
              <span class="text-body"> </span>
              <h1 class="fw-medium fs-30 mb-3">Not Connect</h1>
              <!--              <div-->
              <!--                class="progress rounded-0 mb-0 progress-width"-->
              <!--                role="progressbar"-->
              <!--                aria-label="Basic example"-->
              <!--                aria-valuenow="90"-->
              <!--                aria-valuemin="0"-->
              <!--                aria-valuemax="100"-->
              <!--                style="height: 10px; background-color: #f4f6fa; width: 210px"-->
              <!--              >-->
              <!--                <div-->
              <!--                  class="progress-bar bg-warning rounded-0"-->
              <!--                  style="width: 90%; height: 10px"-->
              <!--                ></div>-->
              <!--              </div>-->
              <p class="fs-12 text-dark lh-1 mt-2">
                this status will base on app on woocommerce that send request to this
                project.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                  class="img-top"
                  src="../../../assets/images/icons/e-commerce-1.svg"
                  alt="project-icon-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img-top{
  width: 51px;
  height: 51px;
}
.block-top{
  height: 178px;
}
</style>

<script setup>
// Import the defineProps function from Vue
import { defineProps } from 'vue';

// Define your props
const props = defineProps({
  invoiceData:Object,
  webHookData:Object
});
</script>

<!--<script setup>-->
<!--import {usedInvoiceStore} from '@/stores/invoice'-->
<!--import {onMounted, ref} from "vue";-->
<!--const localInvoiceStore = usedInvoiceStore()-->

<!--const totalInvoice = ref(0)-->
<!--const totalActiveInvoice = ref(0)-->
<!--const totalInvoiceDone = ref(100)-->

<!--const loadData = async () => {-->
<!--  await localInvoiceStore.loadInvoices(10, 1)-->
<!--  totalInvoice.value = localInvoiceStore.total_count-->
<!--  totalActiveInvoice.value = localInvoiceStore.total_count_active-->
<!--  totalInvoiceDone.value = Math.round((totalActiveInvoice.value / totalInvoice.value) * 100);-->
<!--}-->

<!--onMounted(async () => {-->
<!--  loadData()-->
<!--})-->

<!--</script>-->
<!--<script>-->
<!--export default {-->
<!--  name: "ProjectProgress",-->
<!--};-->
<!--</script>-->
