<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Active User</h3>

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

      <div class="all-table scroll-bar h-384">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium fs-14 ps-0" scope="col"># ID</th>
              <th class="text-dark fw-medium fs-14" scope="col">Name</th>
              <th class="text-dark fw-medium fs-14" scope="col">City</th>
              <th class="text-dark fw-medium fs-14" scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="ps-0">
                <span class="text-body">#{{ user.userId }}</span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="wh-50 rounded-2"
                    :src="require(`../../../../assets/images/${user.image}`)"
                    alt="user-22"
                  />
                  <h3 class="fs-14 text-dark ms-3 mb-0">
                    {{ user.name }}
                  </h3>
                </div>
              </td>
              <td>
                <span class="text-body fs-14">{{ user.city }}</span>
              </td>
              <td>
                <span class="fs-14" :class="computeClass(user.status)">{{
                  user.status
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import activeUser from "./activeUser.json";

export default defineComponent({
  name: "ActiveUser",
  data() {
    return {
      users: activeUser,
    };
  },
  setup() {
    const wordComplete = ref("Complete");
    const wordInProgress = ref("In Progress");
    const wordPending = ref("Pending");

    const computeClass = (classValue: string) => {
      return {
        "text-success": wordComplete.value === classValue,
        "text-danger": wordInProgress.value === classValue,
        "text-warning": wordPending.value === classValue,
      };
    };

    return {
      wordComplete,
      wordInProgress,
      wordPending,
      computeClass,
    };
  },
});
</script>