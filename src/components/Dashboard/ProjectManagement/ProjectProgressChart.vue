<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title d-flex justify-content-between mb-3">
        <h3 class="fw-medium fs-18 mb-0">Invoice Status</h3>

        <ul class="ps-0 mb-0 list-unstyled legend-list">
          <li class="text-body mb-1">Complete (get payment)</li>
          <li class="text-body mb-1">Active Invoice (waiting)</li>
          <li class="text-body">Cancel/Fail</li>
        </ul>
      </div>

      <div id="project_progress"></div>
      <apexchart
          type="donut"
          height="252"
          :options="projectProgress"
          :series="project"
      ></apexchart>

      <ul
          class="d-flex justify-content-between ps-0 mb-0 list-unstyled progress-list mt-3"
      >
        <li>
          <span class="d-block text-body mb-2">Complete (get payment)</span>
          <span class="d-block text-success">{{  this.invoiceData.percentInvoiceDoneSuccess }}%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Active Invoice (waiting)</span>
          <span class="d-block text-warning">{{  this.invoiceData.percentInvoiceNoDone }}%</span>
        </li>
        <li>
          <span class="d-block text-body mb-2">Cancel/Fail</span>
          <span class="d-block text-danger">{{  this.invoiceData.percentInvoiceDoneFail }}%</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProjectProgressChart",
  props: {
    invoiceData: {
      type: Object
    }
  },
  data: function () {
    return {
      project: [0, 0, 0],
      projectProgress: {
        labels: ["Payed Success", "Waiting", "Canceled Invoice"],
        chart: {
          height: 252,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          fontSize: "12px",
          fontFamily: "Inter",
          position: "right",
          labels: {
            colors: ["#919AA3"],
          },
          markers: {
            radius: 0,
            width: 7,
            height: 7,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 5,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: "#fff",
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "70%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: 8,
                  fontWeight: 500,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Invoice Status",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "#171825",
                },
              },
            },
          },
        },
        colors: ["#2ED47E", "#FFBA5C", "#ED4C5C"],
      },
    };
  },
  mounted() {
    this.updateProjectData();
  },
  methods: {
    updateProjectData() {
      this.project = [
        this.invoiceData.percentInvoiceDoneSuccess || 0,
        this.invoiceData.percentInvoiceNoDone || 0,
        this.invoiceData.percentInvoiceDoneFail || 0,
      ];
    }
  },
  watch: {
    invoiceData: {
      deep: true,
      immediate: true,
      handler() {
        this.updateProjectData();
      },
    },
  },
});
</script>