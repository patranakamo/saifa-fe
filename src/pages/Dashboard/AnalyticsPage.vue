<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-xxl-6">
          <VisitorOverviewChart />
        </div>

        <div class="col-xxl-6">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <TotalUserChart />
            </div>
            <div class="col-lg-6 col-md-6">
              <DailyUserChart />
            </div>
            <div class="col-lg-6 col-md-6">
              <PageViewsChart />
            </div>
            <div class="col-lg-6 col-md-6">
              <BounceRateChart />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <VisitorAgeStatusChart />
        </div>

        <div class="col-lg-8">
          <TopCountriesLocations />
        </div>

        <div class="col-lg-8">
          <TrafficResources />
        </div>

        <div class="col-lg-4">
          <BrowserStats />
        </div>

        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-5">
              <UserDeviceChart />
            </div>
            <div class="col-lg-7">
              <VisitsSource />
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <VisitorByGenderChart />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VisitorOverviewChart from "../../components/Dashboard/Analytics/VisitorOverviewChart.vue";
import TotalUserChart from "../../components/Dashboard/Analytics/TotalUserChart.vue";
import DailyUserChart from "../../components/Dashboard/Analytics/DailyUserChart.vue";
import PageViewsChart from "../../components/Dashboard/Analytics/PageViewsChart.vue";
import BounceRateChart from "../../components/Dashboard/Analytics/BounceRateChart.vue";
import VisitorAgeStatusChart from "../../components/Dashboard/Analytics/VisitorAgeStatusChart.vue";
import TopCountriesLocations from "../../components/Dashboard/Analytics/TopCountriesLocations/index.vue";
import TrafficResources from "../../components/Dashboard/Analytics/TrafficResources/index.vue";
import BrowserStats from "../../components/Dashboard/Analytics/BrowserStats/index.vue";
import UserDeviceChart from "../../components/Dashboard/Analytics/UserDeviceChart.vue";
import VisitsSource from "../../components/Dashboard/Analytics/VisitsSource/index.vue";
import VisitorByGenderChart from "../../components/Dashboard/Analytics/VisitorByGenderChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AnalyticsPage",
  components: {
    VisitorOverviewChart,
    TotalUserChart,
    DailyUserChart,
    PageViewsChart,
    BounceRateChart,
    VisitorAgeStatusChart,
    TopCountriesLocations,
    TrafficResources,
    BrowserStats,
    UserDeviceChart,
    VisitsSource,
    VisitorByGenderChart,
    MainFooter,
  },
});
</script>