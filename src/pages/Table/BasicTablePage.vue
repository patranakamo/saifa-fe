<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-xxl-8">
          <TrafficResourcesTable />
        </div>

        <div class="col-xxl-4">
          <TransactionHistory />
        </div>
      </div>

      <AllProjects />

      <div class="row">
        <div class="col-xxl-8">
          <TopCountries />
        </div>

        <div class="col-xxl-4">
          <TopCustomer />
        </div>
      </div>

      <RecentOrder />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrafficResourcesTable from "../../components/Table/BasicTable/TrafficResourcesTable.vue";
import TransactionHistory from "../../components/Table/BasicTable/TransactionHistory.vue";
import AllProjects from "../../components/Table/BasicTable/AllProjects.vue";
import TopCountries from "../../components/Table/BasicTable/TopCountries.vue";
import TopCustomer from "../../components/Table/BasicTable/TopCustomer.vue";
import RecentOrder from "../../components/Table/BasicTable/RecentOrder.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "BasicTablePage",
  components: {
    TrafficResourcesTable,
    TransactionHistory,
    AllProjects,
    TopCountries,
    TopCustomer,
    RecentOrder,
    MainFooter,
  },
});
</script>