<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <CustomerStatus />
      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <TasksStatsChart />
        </div>
        <div class="col-xxl-6">
          <MostLeadsChart />
        </div>
        <div class="col-lg-12 col-xxl-4">
          <TopCustomer />
        </div>
        <div class="col-lg-12 col-xxl-8">
          <CountryStats />
        </div>

        <div class="col-lg-12 col-xxl-4">
          <WeeklyEarningChart />
        </div>
        <div class="col-lg-6 col-xxl-4">
          <ChatProjectUser />
        </div>
        <div class="col-lg-6 col-xxl-4">
          <CalendarContent />
        </div>
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

        <!-- Start To Do List Active User Area -->
        <div class="col-lg-7">
          <ToDoList />
        </div>
        <div class="col-lg-5">
          <ActiveUser />
        </div>
        <!-- End To Do List Active User Area -->
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerStatus from "../../components/Dashboard/CRM/CustomerStatus.vue";
import TasksStatsChart from "../../components/Dashboard/CRM/TasksStatsChart.vue";
import MostLeadsChart from "../../components/Dashboard/CRM/MostLeadsChart.vue";
import TopCustomer from "../../components/Dashboard/CRM/TopCustomer/index.vue";
import CountryStats from "../../components/Dashboard/CRM/CountryStats/index.vue";
import WeeklyEarningChart from "../../components/Dashboard/CRM/WeeklyEarningChart.vue";
import ChatProjectUser from "../../components/Dashboard/CRM/ChatProjectUser.vue";
import CalendarContent from "../../components/Dashboard/CRM/CalendarContent.vue";
import CustomerVisitOnlineChart from "../../components/Dashboard/CRM/CustomerVisitOnlineChart.vue";
import TotalVendorsChart from "../../components/Dashboard/CRM/TotalVendorsChart.vue";
import TotalLeadsChart from "../../components/Dashboard/CRM/TotalLeadsChart.vue";
import InboxTotalChart from "../../components/Dashboard/CRM/InboxTotalChart.vue";
import ToDoList from "../../components/Dashboard/CRM/ToDoList/index.vue";
import ActiveUser from "../../components/Dashboard/CRM/ActiveUser/index.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CRMPage",
  components: {
    CustomerStatus,
    TasksStatsChart,
    MostLeadsChart,
    TopCustomer,
    CountryStats,
    WeeklyEarningChart,
    ChatProjectUser,
    CalendarContent,
    CustomerVisitOnlineChart,
    TotalVendorsChart,
    TotalLeadsChart,
    InboxTotalChart,
    ToDoList,
    ActiveUser,
    MainFooter,
  },
});
</script>