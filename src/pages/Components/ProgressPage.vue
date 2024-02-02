<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Basic</h4>

          <div
            class="progress mb-4 rounded-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div class="progress-bar" style="width: 0%; height: 10px"></div>
          </div>
          <div
            class="progress mb-4 rounded-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div class="progress-bar" style="width: 25%; height: 10px"></div>
          </div>
          <div
            class="progress mb-4 rounded-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div class="progress-bar" style="width: 50%; height: 10px"></div>
          </div>
          <div
            class="progress mb-4 rounded-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div class="progress-bar" style="width: 75%; height: 10px"></div>
          </div>
          <div
            class="progress rounded-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div class="progress-bar" style="width: 100%; height: 10px"></div>
          </div>
        </div>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Background</h4>

          <div
            class="progress mb-4"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div
              class="progress-bar bg-success"
              style="width: 25%; height: 10px"
            ></div>
          </div>
          <div
            class="progress mb-4"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div
              class="progress-bar bg-info"
              style="width: 50%; height: 10px"
            ></div>
          </div>
          <div
            class="progress mb-4"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div
              class="progress-bar bg-warning"
              style="width: 75%; height: 10px"
            ></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 10px"
          >
            <div
              class="progress-bar bg-danger"
              style="width: 100%; height: 10px"
            ></div>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Progress Example</h4>

          <div class="step-wrapper progress-example">
            <ul class="step-content ps-0 mb-0 list-unstyled d-flex">
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">01</span>
                <p class="fw-medium text-dark fs-14">Planning</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">02</span>
                <p class="fw-medium text-dark fs-14">Design</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-white fs-14 active">3</span>
                <p class="fw-medium text-dark fs-14">Development</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">04</span>
                <p class="fw-medium text-dark fs-14">Testing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Label</h4>

          <div
            class="progress rounded-0"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 20px"
          >
            <div class="progress-bar" style="width: 50%; height: 20px">50%</div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProgressPage",
  components: {
    MainFooter,
  },
});
</script>