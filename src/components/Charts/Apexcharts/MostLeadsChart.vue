<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Most Leads</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Week</option>
          <option value="2">This Month</option>
          <option value="3">Last Month</option>
        </select>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6">
          <div id="most_leads"></div>
          <apexchart
            type="donut"
            :options="mostLeads"
            :series="leads"
          ></apexchart>
        </div>

        <div class="col-lg-6">
          <div class="all-table source-table scroll-bar h-276">
            <table class="table align-middle mb-0">
              <tbody>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <div class="icon">
                        <vue-feather type="share-2"></vue-feather>
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0 fw-medium">Social</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">10,647</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">30%</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <div class="icon">
                        <vue-feather type="mail"></vue-feather>
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0 fw-medium">Email</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">12,777</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">50%</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <div class="icon">
                        <vue-feather type="phone"></vue-feather>
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0 fw-medium">Call</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">14,196</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">15%</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <div class="icon">
                        <vue-feather type="life-buoy"></vue-feather>
                      </div>
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0 fw-medium">Other</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">8,518</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14 fw-medium">5%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MostLeadsChart",
  data: function () {
    return {
      leads: [30, 50, 15, 5],
      mostLeads: {
        chart: {
          type: "donut",
        },
        labels: ["Social", "Email", "Call", "Other"],
        legend: {
          show: false,
        },
        dataLabels: {
          style: {
            fontSize: "12px",
            fontFamily: "Inter",
            fontWeight: "400",
            colors: ["#fff"],
          },
          dropShadow: {
            enabled: false,
          },
        },
        colors: ["#5C61F2", "#FFBA5C", "#2ED47E", "#ED4C5C"],
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              size: "60%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "14px",
                  fontFamily: "Inter",
                  color: "#171825",
                  offsetY: 0,
                  fontWeight: 500,
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  fontFamily: "Inter",
                  color: "#2ED47E",
                  offsetY: 8,
                  fontWeight: 500,
                  formatter: function (val: string) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total Leads",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "Inter",
                  color: "#171825",
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250,
              },
              legend: {
                show: false,
              },
              dataLabels: {
                style: {
                  fontSize: "8px",
                },
              },
            },
          },
        ],
      },
    };
  },
});
</script>