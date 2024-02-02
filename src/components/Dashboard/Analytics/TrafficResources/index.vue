<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Traffic Resources</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">This Year</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <div class="all-table link-table scroll-bar h-411">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Link
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Percentage
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Value
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Visits
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="resource in resources" :key="resource.id">
              <td class="ps-0">
                <span class="text-dark fs-14">
                  {{ resource.link }}
                </span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ backgroundColor: resource.bgRgbColor }"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    :style="{
                      width: resource.percent + '%',
                      backgroundColor: resource.color,
                    }"
                  ></div>
                </div>
              </td>
              <td>
                <span :style="{ color: resource.color }" class="fs-14"
                  >{{ resource.percent }}%</span
                >
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">{{ resource.visits }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import trafficResources from "./trafficResources.json";

export default defineComponent({
  name: "TrafficResources",
  data() {
    return {
      resources: trafficResources,
    };
  },
});
</script>