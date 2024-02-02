<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Visits Source</h3>

        <span class="text-body fw-medium">Total visits 70984</span>
      </div>

      <div class="all-table source-table scroll-bar h-405">
        <table class="table align-middle mb-0">
          <tbody>
            <tr class="mb-3" v-for="source in sources" :key="source.id">
              <td class="ps-0">
                <div class="d-flex align-items-center">
                  <div class="icon">
                    <vue-feather :type="source.icon"></vue-feather>
                  </div>
                  <div class="ms-3">
                    <h3 class="fs-14 text-dark mb-0 fw-medium">
                      {{ source.title }}
                    </h3>
                  </div>
                </div>
              </td>
              <td class="text-end pe-0">
                <span class="text-body fs-14 fw-medium">
                  {{ source.visits }}
                </span>
              </td>
              <td class="text-end pe-0">
                <span class="text-body fs-14 fw-medium">
                  {{ source.percent }}%
                </span>
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
import visitsSource from "./visitsSource.json";

export default defineComponent({
  name: "VisitsSource",
  data() {
    return {
      sources: visitsSource,
    };
  },
});
</script>