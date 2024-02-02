<template>
  <div class="all-table scroll-bar h-240">
    <table class="table align-middle mb-0">
      <tbody>
        <tr class="mb-3" v-for="countrie in countries" :key="countrie.id">
          <td class="ps-0">
            <div class="d-flex align-items-center">
              <img
                class="wh-20"
                :src="require(`../../../../../assets/images/${countrie.flag}`)"
                alt="united-states-of-america"
              />
              <div class="ms-3">
                <h3 class="fs-14 text-dark mb-0">{{ countrie.name }}</h3>
              </div>
            </div>
          </td>
          <td class="w-95">
            <span class="text-body d-block mb-1">{{ countrie.progress }}%</span>
            <div
              class="progress rounde rounded-0 overflow-visible"
              role="progressbar"
              aria-label="Example with label"
              :aria-valuenow="countrie.progress"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 5px; background: #efeffe"
            >
              <div
                :class="[
                  'progress-bar rounde rounded-0 overflow-visible',
                  countrie.bgColor,
                ]"
                :style="[
                  {
                    width: countrie.progress + '%',
                  },
                  'height: 5px;',
                ]"
              ></div>
            </div>
          </td>
          <td class="text-end pe-0">
            <span class="text-body fs-14">
              <span class="text-dark">Revenue:</span>
              ${{ countrie.revenue }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topCountries from "./topCountries.json";

export default defineComponent({
  name: "TopCountries",
  data() {
    return {
      countries: topCountries,
    };
  },
});
</script>