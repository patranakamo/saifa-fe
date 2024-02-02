<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Website Traffic</h3>
      </div>

      <div class="row">
        <div class="col-xxl-6">
          <UsersChart />
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

        <div class="col-xxl-4">
          <MobileTrafficChart />
        </div>

        <div class="col-xxl-8">
          <TrafficResources />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsersChart from "../components/WebsiteTraffic/UsersChart.vue";
import TotalUserChart from "../components/WebsiteTraffic/TotalUserChart.vue";
import DailyUserChart from "../components/WebsiteTraffic/DailyUserChart.vue";
import PageViewsChart from "../components/WebsiteTraffic/PageViewsChart.vue";
import BounceRateChart from "../components/WebsiteTraffic/BounceRateChart.vue";
import MobileTrafficChart from "../components/WebsiteTraffic/MobileTrafficChart.vue";
import TrafficResources from "../components/WebsiteTraffic/TrafficResources.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "WebsiteTrafficPage",
  components: {
    UsersChart,
    TotalUserChart,
    DailyUserChart,
    PageViewsChart,
    BounceRateChart,
    MobileTrafficChart,
    TrafficResources,
    MainFooter,
  },
});
</script>