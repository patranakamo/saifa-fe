<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProjectProgress :invoiceData="invoiceData"/>

      <div class="revenue-progress-roadmap-area">
        <div class="row">

          <div class="col-lg-6 col-xxl-12" v-if="invoiceData && invoiceData.percentInvoiceDoneSuccess !== undefined">
            <ProjectProgressChart :invoiceData="invoiceData"/>
          </div>

          <!--                <div class="col-lg-12 col-xxl-5">-->
          <!--                  <RevenueChart />-->
          <!--                </div>-->
        </div>
      </div>

      <!--      <div class="revenue-progress-roadmap-area">-->
      <!--        <div class="row">-->
      <!--          <div class="col-lg-6 col-xxl-12">-->
      <!--            <div class="card border-0 box-shadow border-radius-10 mb-4">-->
      <!--              <div class="card-body p-4">-->
      <!--                <div class="card-title d-flex justify-content-between mb-3">-->
      <!--                  <h3 class="fw-medium fs-18 mb-0">Project Progress</h3>-->

      <!--                  <ul class="ps-0 mb-0 list-unstyled legend-list">-->
      <!--                    <li class="text-body mb-1">In Progress</li>-->
      <!--                    <li class="text-body mb-1">Complete</li>-->
      <!--                    <li class="text-body">Not Started</li>-->
      <!--                  </ul>-->
      <!--                </div>-->

      <!--                <div id="project_progress"></div>-->
      <!--                <ul-->
      <!--                    class="d-flex justify-content-between ps-0 mb-0 list-unstyled progress-list mt-3"-->
      <!--                >-->
      <!--                  <li>-->
      <!--                    <span class="d-block text-body mb-2">In Progress</span>-->
      <!--                    <span class="d-block text-success">60%</span>-->
      <!--                  </li>-->
      <!--                  <li>-->
      <!--                    <span class="d-block text-body mb-2">Not Started</span>-->
      <!--                    <span class="d-block text-warning">25%</span>-->
      <!--                  </li>-->
      <!--                  <li>-->
      <!--                    <span class="d-block text-body mb-2">Complete</span>-->
      <!--                    <span class="d-block text-danger">15%</span>-->
      <!--                  </li>-->
      <!--                </ul>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
import {usedInvoiceStore} from '@/stores/invoice'
import {onMounted, ref} from "vue";
import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProgressConnection.vue";
import ProjectProgressChart from "../../components/Dashboard/ProjectManagement/ProjectProgressChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

const localInvoiceStore = usedInvoiceStore()

// const totalInvoice = ref(0)
// const totalActiveInvoice = ref(0)
// const percentInvoiceDone = ref(100)
// const successCount = ref(0)
// const percentInvoiceSuccess = ref(0)
// const percentInvoiceFail = ref(0)
const invoiceData = ref({})

const loadData = async () => {
  await localInvoiceStore.loadInvoices(10, 1)
  const totalInvoice = localInvoiceStore.total_count;
  const totalInvoiceActive = localInvoiceStore.total_count_active;
  const totalInvoiceDone = totalInvoice - totalInvoiceActive;

  const totalInvoiceDoneSuccess = localInvoiceStore.total_count_success;
  const totalInvoiceDoneFail = totalInvoiceDone - totalInvoiceDoneSuccess;

  let percentInvoiceDone = 100
  let percentInvoiceDoneSuccess = 0
  let percentInvoiceDoneFail = 0
  let percentInvoiceNoDone = 100

  if (totalInvoiceActive > 0) {
    percentInvoiceDone = Math.round(100 - (totalInvoiceActive / totalInvoice) * 100);
  }
  if (totalInvoiceDoneSuccess > 0) {
    percentInvoiceDoneSuccess = Math.round(  (totalInvoiceDoneSuccess / totalInvoice) * 100);
  }
  if (totalInvoiceDoneFail > 0) {
    percentInvoiceDoneFail = Math.round( (totalInvoiceDoneFail / totalInvoice) * 100);
  }
  percentInvoiceNoDone = percentInvoiceNoDone - (percentInvoiceDoneSuccess + percentInvoiceDoneFail)

  invoiceData.value = {
    "totalInvoice": totalInvoice,
    "totalActiveInvoice": totalInvoiceActive,
    "totalInvoiceDone": totalInvoiceDone,
    "percentInvoiceDoneSuccess":percentInvoiceDoneSuccess,
    "percentInvoiceDoneFail":percentInvoiceDoneFail,
    "percentInvoiceNoDone":percentInvoiceNoDone,
    "percentInvoiceDone":percentInvoiceDone
  }
}

onMounted(async () => {
  loadData()
})

</script>

<!--<script lang="ts">-->
<!--import {defineComponent} from "vue";-->
<!--// import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProjectProgress.vue";-->
<!--import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProgressConnection.vue";-->
<!--import RevenueChart from "../../components/Dashboard/ProjectManagement/RevenueChart/index.vue";-->
<!--import ProjectProgressChart from "../../components/Dashboard/ProjectManagement/ProjectProgressChart.vue";-->
<!--import MainFooter from "../../components/Layouts/MainFooter.vue";-->

<!--export default defineComponent({-->
<!--  name: "ProjectManagementPage",-->
<!--  components: {-->
<!--    ProjectProgress,-->
<!--    // RevenueChart,-->
<!--    ProjectProgressChart,-->
<!--    MainFooter,-->
<!--  },-->
<!--});-->
<!--</script>-->