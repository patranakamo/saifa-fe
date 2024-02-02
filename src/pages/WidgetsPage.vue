<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <!-- Start Project Progress Area -->
      <ProjectProgress />
      <!-- Start Project Progress Area -->

      <div class="row">
        <div class="col-xxl-4">
          <ProjectDistributionChart />
        </div>

        <div class="col-xxl-8">
          <div class="row">
            <div class="col-xxl-7">
              <VisitorByGenderChart />
            </div>
            <div class="col-xxl-5">
              <UserDeviceChart />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-4">
          <TotalEarningChart />
        </div>

        <div class="col-xxl-8">
          <div class="row">
            <div class="col-xxl-6">
              <ProjectRoadmapChart />
            </div>
            <div class="col-xxl-6">
              <ProjectBudgetChart />
            </div>
          </div>
        </div>
      </div>

      <!-- Start Work Progress Area -->
      <div class="row">
        <div class="col-xxl-3 col-md-6">
          <CustomerVisitOnlineChart />
        </div>
        <div class="col-xxl-3 col-md-6">
          <TotalVendorsChart />
        </div>
        <div class="col-xxl-3 col-md-6">
          <TotalLeadsChart />
        </div>
        <div class="col-xxl-3 col-md-6">
          <InboxTotalChart />
        </div>
      </div>
      <!-- End Work Progress Area -->

      <div class="row">
        <div class="col-xxl-4">
          <ChatProjectUser />
        </div>
        <div class="col-xxl-4">
          <VisitorAgeStatusChart />
        </div>

        <div class="col-xxl-4">
          <CalendarContent />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-4">
          <VisitorsChart />

          <OrdersSummaryChart />
        </div>
        <div class="col-xxl-4">
          <WeeklyEarningChart />
        </div>
        <div class="col-xxl-4">
          <ProjectProgressChart />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectProgress from "../components/Widgets/ProjectProgress.vue";
import ProjectDistributionChart from "../components/Widgets/ProjectDistributionChart.vue";
import VisitorByGenderChart from "../components/Widgets/VisitorByGenderChart.vue";
import UserDeviceChart from "../components/Widgets/UserDeviceChart.vue";
import TotalEarningChart from "../components/Widgets/TotalEarningChart.vue";
import ProjectRoadmapChart from "../components/Widgets/ProjectRoadmapChart/index.vue";
import ProjectBudgetChart from "../components/Widgets/ProjectBudgetChart.vue";
import CustomerVisitOnlineChart from "../components/Widgets/CustomerVisitOnlineChart.vue";
import TotalVendorsChart from "../components/Widgets/TotalVendorsChart.vue";
import TotalLeadsChart from "../components/Widgets/TotalLeadsChart.vue";
import InboxTotalChart from "../components/Widgets/InboxTotalChart.vue";
import ChatProjectUser from "../components/Widgets/ChatProjectUser.vue";
import VisitorAgeStatusChart from "../components/Widgets/VisitorAgeStatusChart.vue";
import CalendarContent from "../components/Widgets/CalendarContent.vue";
import VisitorsChart from "../components/Widgets/VisitorsChart.vue";
import OrdersSummaryChart from "../components/Widgets/OrdersSummaryChart.vue";
import WeeklyEarningChart from "../components/Widgets/WeeklyEarningChart.vue";
import ProjectProgressChart from "../components/Widgets/ProjectProgressChart.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "WidgetsPage",
  components: {
    ProjectProgress,
    ProjectDistributionChart,
    VisitorByGenderChart,
    UserDeviceChart,
    TotalEarningChart,
    ProjectRoadmapChart,
    ProjectBudgetChart,
    CustomerVisitOnlineChart,
    TotalVendorsChart,
    TotalLeadsChart,
    InboxTotalChart,
    ChatProjectUser,
    VisitorAgeStatusChart,
    CalendarContent,
    VisitorsChart,
    OrdersSummaryChart,
    WeeklyEarningChart,
    ProjectProgressChart,
    MainFooter,
  },
});
</script>