<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-xxl-5">
          <RevenueChart />
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-xxl-5">
              <ProjectProgressChart />
            </div>
            <div class="col-xxl-7">
              <ProjectRoadmapChart />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-6">
          <GrowthRevenueChart />
        </div>
        <div class="col-xxl-6">
          <TotalSalesChart />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-4">
          <ProjectDistributionChart />
        </div>

        <div class="col-xxl-4">
          <ProjectBudgetChart />
        </div>

        <div class="col-xxl-4">
          <TotalEarningChart />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-8">
          <VisitorOverviewChart />
        </div>

        <div class="col-xxl-4">
          <OrdersSummaryChart />

          <VisitorsChart />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-3">
          <UserDeviceChart />
        </div>

        <div class="col-xxl-4">
          <VisitorAgeStatusChart />
        </div>

        <div class="col-xxl-5">
          <VisitorByGenderChart />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-6">
          <TasksStatsChart />
        </div>

        <div class="col-xxl-6">
          <MostLeadsChart />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RevenueChart from "../../components/Charts/Apexcharts/RevenueChart/index.vue";
import ProjectProgressChart from "../../components/Charts/Apexcharts/ProjectProgressChart.vue";
import ProjectRoadmapChart from "../../components/Charts/Apexcharts/ProjectRoadmapChart/index.vue";
import GrowthRevenueChart from "../../components/Charts/Apexcharts/GrowthRevenueChart.vue";
import TotalSalesChart from "../../components/Charts/Apexcharts/TotalSalesChart.vue";
import ProjectDistributionChart from "../../components/Charts/Apexcharts/ProjectDistributionChart.vue";
import ProjectBudgetChart from "../../components/Charts/Apexcharts/ProjectBudgetChart.vue";
import TotalEarningChart from "../../components/Charts/Apexcharts/TotalEarningChart.vue";
import VisitorOverviewChart from "../../components/Charts/Apexcharts/VisitorOverviewChart.vue";
import OrdersSummaryChart from "../../components/Charts/Apexcharts/OrdersSummaryChart.vue";
import VisitorsChart from "../../components/Charts/Apexcharts/VisitorsChart.vue";
import UserDeviceChart from "../../components/Charts/Apexcharts/UserDeviceChart.vue";
import VisitorAgeStatusChart from "../../components/Charts/Apexcharts/VisitorAgeStatusChart.vue";
import VisitorByGenderChart from "../../components/Charts/Apexcharts/VisitorByGenderChart.vue";
import TasksStatsChart from "../../components/Charts/Apexcharts/TasksStatsChart.vue";
import MostLeadsChart from "../../components/Charts/Apexcharts/MostLeadsChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ApexchartsPage",
  components: {
    RevenueChart,
    ProjectProgressChart,
    ProjectRoadmapChart,
    GrowthRevenueChart,
    TotalSalesChart,
    ProjectDistributionChart,
    ProjectBudgetChart,
    TotalEarningChart,
    VisitorOverviewChart,
    OrdersSummaryChart,
    VisitorsChart,
    UserDeviceChart,
    VisitorAgeStatusChart,
    VisitorByGenderChart,
    TasksStatsChart,
    MostLeadsChart,
    MainFooter,
  },
});
</script>