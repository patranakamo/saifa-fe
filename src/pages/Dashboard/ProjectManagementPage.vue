<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProjectProgress />

      <div class="revenue-progress-roadmap-area">
        <div class="row">


          <div class="col-lg-6 col-xxl-7">
            <ProjectProgressChart />
          </div>

          <div class="col-lg-12 col-xxl-5">
            <RevenueChart />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProjectProgress.vue";
import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProgressConnection.vue";
import RevenueChart from "../../components/Dashboard/ProjectManagement/RevenueChart/index.vue";
import ProjectProgressChart from "../../components/Dashboard/ProjectManagement/ProjectProgressChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProjectManagementPage",
  components: {
    ProjectProgress,
    RevenueChart,
    ProjectProgressChart,
    MainFooter,
  },
});
</script>