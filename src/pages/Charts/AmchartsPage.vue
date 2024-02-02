<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-xxl-6">
          <ColumnWithRotatedLabelsChart />
        </div>
        <div class="col-xxl-6">
          <ColumnsWithMovingBulletsChart />
        </div>
        <div class="col-xxl-6">
          <BarAndLineChartMixChart />
        </div>
        <div class="col-xxl-6">
          <DumbbellPlotChart />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnWithRotatedLabelsChart from "../../components/Charts/Amcharts/ColumnWithRotatedLabelsChart.vue";
import ColumnsWithMovingBulletsChart from "../../components/Charts/Amcharts/ColumnsWithMovingBulletsChart.vue";
import BarAndLineChartMixChart from "../../components/Charts/Amcharts/BarAndLineChartMixChart.vue";
import DumbbellPlotChart from "../../components/Charts/Amcharts/DumbbellPlotChart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AmchartsPage",
  components: {
    ColumnWithRotatedLabelsChart,
    ColumnsWithMovingBulletsChart,
    BarAndLineChartMixChart,
    DumbbellPlotChart,
    MainFooter,
  },
});
</script>