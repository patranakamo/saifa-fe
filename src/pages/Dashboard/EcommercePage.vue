<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="e-commerce-card-area">
        <div class="row justify-content-center">
          <div class="col-xxl-6">
            <SalesProgress />
          </div>
          <div class="col-xxl-6">
            <TotalSalesChart />
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-8">
          <GrowthRevenueChart />

          <div class="row justify-content-center">
            <div class="col-lg-6">
              <TotalEarningChart />
            </div>
            <div class="col-lg-6">
              <TopSellers />
            </div>
          </div>
        </div>

        <div class="col-xxl-4">
          <TopSellingProduct />
        </div>
      </div>

      <RecentOrder />

      <div class="locations-visitors-transaction">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-xxl-4">
            <TopSalesLocations />
          </div>

          <div class="col-lg-6 col-xxl-4">
            <VisitorsChart />

            <OrdersSummaryChart />
          </div>

          <div class="col-lg-6 col-xxl-4">
            <TransactionHistory />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SalesProgress from "../../components/Dashboard/Ecommerce/SalesProgress.vue";
import TotalSalesChart from "../../components/Dashboard/Ecommerce/TotalSalesChart.vue";
import GrowthRevenueChart from "../../components/Dashboard/Ecommerce/GrowthRevenueChart.vue";
import TotalEarningChart from "../../components/Dashboard/Ecommerce/TotalEarningChart.vue";
import TopSellers from "../../components/Dashboard/Ecommerce/TopSellers/index.vue";
import TopSellingProduct from "../../components/Dashboard/Ecommerce/TopSellingProduct/index.vue";
import RecentOrder from "../../components/Dashboard/Ecommerce/RecentOrder/index.vue";
import TopSalesLocations from "../../components/Dashboard/Ecommerce/TopSalesLocations/index.vue";
import VisitorsChart from "../../components/Dashboard/Ecommerce/VisitorsChart.vue";
import OrdersSummaryChart from "../../components/Dashboard/Ecommerce/OrdersSummaryChart.vue";
import TransactionHistory from "../../components/Dashboard/Ecommerce/TransactionHistory/index.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "EcommercePage",
  components: {
    SalesProgress,
    TotalSalesChart,
    GrowthRevenueChart,
    TotalEarningChart,
    TopSellers,
    TopSellingProduct,
    RecentOrder,
    TopSalesLocations,
    VisitorsChart,
    OrdersSummaryChart,
    TransactionHistory,
    MainFooter,
  },
});
</script>