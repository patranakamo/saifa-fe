<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">All Projects</h3>

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

      <div class="all-table scroll-bar h-524">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Project Name
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Members
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Start date
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Deadline
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Progress
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Status
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Budget
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">{{ project.title }}</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li
                    class="d-inline-block"
                    v-for="member in project.members"
                    :key="member.id"
                  >
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        :src="
                          require(`../../../../assets/images/${member.image}`)
                        "
                        alt="user-2"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">{{ project.startDate }}</span>
              </td>
              <td>
                <span class="text-body">{{ project.deadline }}</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">
                  {{ project.progress }}%
                </span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    :style="{ width: project.progress + '%', height: '5px' }"
                  ></div>
                </div>
              </td>
              <td>
                <span :class="computeClass(project.status)">
                  {{ project.status }}
                </span>
              </td>
              <td>
                <span class="d-block text-body">${{ project.budget }}</span>
                <span class="d-block text-body">Estimation</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
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
import projectTable from "./projectTable.json";

export default defineComponent({
  name: "ProjectTable",
  data() {
    return {
      projects: projectTable,
    };
  },
  setup() {
    const wordActive = ref("Active");
    const wordPending = ref("Pending");
    const wordCompleted = ref("Completed");

    const computeClass = (classValue: string) => {
      return {
        "text-primary": wordActive.value === classValue,
        "text-danger": wordPending.value === classValue,
        "text-success": wordCompleted.value === classValue,
      };
    };

    return {
      wordActive,
      wordPending,
      wordCompleted,
      computeClass,
    };
  },
});
</script>

<style>
.normal-class {
  color: red;
}

.special-class {
  color: #00ff2a;
}

.high-class {
  color: red;
}
.highlight-class {
  color: green;
}
</style>