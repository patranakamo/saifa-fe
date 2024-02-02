<template>
  <div class="all-table scroll-bar h-415">
    <table class="table align-middle mb-0">
      <thead>
        <tr>
          <th class="text-dark fw-medium fs-14 border-0 ps-0" scope="col">
            Country
          </th>
          <th class="text-dark fw-medium fs-14 border-0" scope="col">Usere</th>
          <th class="text-dark fw-medium fs-14 border-0 pe-0" scope="col">
            Bounce Rate
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="mb-3" v-for="countrie in countries" :key="countrie.id">
          <td class="ps-0">
            <div class="d-flex align-items-center">
              <img
                class="wh-20"
                :src="require(`../../../../../assets/images/${countrie.flag}`)"
                alt="Flag"
              />
              <div class="ms-3">
                <h3 class="fs-14 text-dark mb-0">{{ countrie.name }}</h3>
              </div>
            </div>
          </td>
          <td>
            <span class="text-body fs-14">{{ countrie.users }}</span>
          </td>
          <td class="text-end pe-0">
            <span class="text-body fs-14">{{ countrie.bounceRate }}%</span>
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