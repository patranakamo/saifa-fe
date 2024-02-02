<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xxl-7">
          <ProjectOverview />
        </div>

        <div class="col-xxl-5">
          <RunningProject />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <TasksStatsChart />
        </div>
        <div class="col-xxl-6">
          <MyTasks />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 col-xxl-4">
          <CalendarContent />
        </div>
        <div class="col-lg-6 col-xxl-4">
          <TeamMember />
        </div>
        <div class="col-xxl-4">
          <ProjectDistributionChart />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-7 col-xxl-8">
          <ActiveProject />
        </div>
        <div class="col-lg-5 col-xxl-4">
          <RevenueChart />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectOverview from "../../components/ProjectManagement/Overview/ProjectOverview.vue";
import RunningProject from "../../components/ProjectManagement/Overview/RunningProject.vue";
import TasksStatsChart from "../../components/ProjectManagement/Overview/TasksStatsChart.vue";
import MyTasks from "../../components/ProjectManagement/Overview/MyTasks.vue";
import CalendarContent from "../../components/ProjectManagement/Overview/CalendarContent.vue";
import TeamMember from "../../components/ProjectManagement/Overview/TeamMember.vue";
import ProjectDistributionChart from "../../components/ProjectManagement/Overview/ProjectDistributionChart.vue";
import ActiveProject from "../../components/ProjectManagement/Overview/ActiveProject.vue";
import RevenueChart from "../../components/ProjectManagement/Overview/RevenueChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "OverviewPage",
  components: {
    ProjectOverview,
    RunningProject,
    TasksStatsChart,
    MyTasks,
    CalendarContent,
    TeamMember,
    ProjectDistributionChart,
    ActiveProject,
    RevenueChart,
    MainFooter,
  },
});
</script>