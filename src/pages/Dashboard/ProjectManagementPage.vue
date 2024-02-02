<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProjectProgress />

      <div class="revenue-progress-roadmap-area">
        <div class="row">
          <div class="col-lg-12 col-xxl-5">
            <RevenueChart />
          </div>

          <div class="col-lg-6 col-xxl-3">
            <ProjectProgressChart />
          </div>

          <div class="col-lg-6 col-xxl-4">
            <ProjectRoadmapChart />
          </div>
        </div>
      </div>

      <ProjectTable />

      <div class="to-do-list-recent-area">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <ToDoList />
          </div>
          <div class="col-lg-5">
            <RecentActivity />
          </div>
        </div>
      </div>

      <div class="project-user-calendar">
        <div class="row">
          <div class="col-lg-12 col-xxl-4">
            <ProjectDistributionChart />
          </div>

          <div class="col-lg-6 col-xxl-4">
            <ChatProjectUser />
          </div>

          <div class="col-lg-6 col-xxl-4">
            <CalendarContent />
          </div>
        </div>
      </div>

      <div class="active-budget-area">
        <div class="row">
          <div class="col-lg-7 col-xxl-8">
            <ActiveProject />
          </div>

          <div class="col-lg-5 col-xxl-4">
            <ProjectBudgetChart />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectProgress from "../../components/Dashboard/ProjectManagement/ProjectProgress.vue";
import RevenueChart from "../../components/Dashboard/ProjectManagement/RevenueChart/index.vue";
import ProjectProgressChart from "../../components/Dashboard/ProjectManagement/ProjectProgressChart.vue";
import ProjectRoadmapChart from "../../components/Dashboard/ProjectManagement/ProjectRoadmapChart/index.vue";
import ProjectTable from "../../components/Dashboard/ProjectManagement/ProjectTable/index.vue";
import ToDoList from "../../components/Dashboard/ProjectManagement/ToDoList/index.vue";
import RecentActivity from "../../components/Dashboard/ProjectManagement/RecentActivity/index.vue";
import ProjectDistributionChart from "../../components/Dashboard/ProjectManagement/ProjectDistributionChart.vue";
import ChatProjectUser from "../../components/Dashboard/ProjectManagement/ChatProjectUser.vue";
import CalendarContent from "../../components/Dashboard/ProjectManagement/CalendarContent.vue";
import ActiveProject from "../../components/Dashboard/ProjectManagement/ActiveProject.vue";
import ProjectBudgetChart from "../../components/Dashboard/ProjectManagement/ProjectBudgetChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProjectManagementPage",
  components: {
    ProjectProgress,
    RevenueChart,
    ProjectProgressChart,
    ProjectRoadmapChart,
    ProjectTable,
    ToDoList,
    RecentActivity,
    ProjectDistributionChart,
    ChatProjectUser,
    CalendarContent,
    ActiveProject,
    ProjectBudgetChart,
    MainFooter,
  },
});
</script>