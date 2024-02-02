<template>
  <div
    class="card active-projects-content border-0 box-shadow border-radius-10 mb-4"
  >
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-4"
      >
        <h3 class="fw-medium fs-18 mb-0">Running Project</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">Last Week</option>
          <option value="2">This Month</option>
          <option value="3">Last Month</option>
        </select>
      </div>

      <ul class="ps-0 mb-0 list-unstyled">
        <li
          class="d-flex justify-content-between border-bottom border-color mb-3 pb-3"
        >
          <div class="w-50">
            <span class="text-dark fs-14 d-block mb-2">
              Product Development
            </span>
            <span class="text-dark fs-14 d-block">
              <vue-feather
                type="calendar"
                style="
                  width: 16px;
                  stroke: #919aa3;
                  position: relative;
                  top: -1.5px;
                  margin-right: 6px;
                "
              ></vue-feather>
              Deadline:
              <span class="text-body">April 30,2023</span>
            </span>
          </div>

          <div class="w-50 ms-3">
            <div
              class="progress rounded-0 mb-3"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 10px"
            >
              <div class="progress-bar" style="width: 70%"></div>
            </div>
            <span class="text-dark d-block text-end">
              <span class="text-success">70%</span>
              of the total project is complete
            </span>
          </div>
        </li>
        <li
          class="d-flex justify-content-between border-bottom border-color mb-3 pb-3"
        >
          <div class="w-50">
            <span class="text-dark fs-14 d-block mb-2">
              Hotel Management System
            </span>
            <span class="text-dark fs-14 d-block">
              <vue-feather
                type="calendar"
                style="
                  width: 16px;
                  stroke: #919aa3;
                  position: relative;
                  top: -1.5px;
                  margin-right: 6px;
                "
              ></vue-feather>
              Deadline:
              <span class="text-body">May 15,2023</span>
            </span>
          </div>

          <div class="w-50 ms-3">
            <div
              class="progress rounded-0 mb-3"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 10px"
            >
              <div class="progress-bar" style="width: 50%"></div>
            </div>
            <span class="text-dark d-block text-end">
              <span class="text-success">50%</span>
              of the total project is complete
            </span>
          </div>
        </li>
        <li class="d-flex justify-content-between">
          <div class="w-50">
            <span class="text-dark fs-14 d-block mb-2">Python Upgrade</span>
            <span class="text-dark fs-14 d-block">
              <vue-feather
                type="calendar"
                style="
                  width: 16px;
                  stroke: #919aa3;
                  position: relative;
                  top: -1.5px;
                  margin-right: 6px;
                "
              ></vue-feather>
              Deadline:
              <span class="text-body">July 31,2023</span>
            </span>
          </div>

          <div class="w-50 ms-3">
            <div
              class="progress rounded-0 mb-3"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 10px"
            >
              <div class="progress-bar" style="width: 30%"></div>
            </div>
            <span class="text-dark d-block text-end">
              <span class="text-success">30%</span>
              of the total project is complete
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RunningProject",
};
</script>