<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Total Projects: 852</h3>
              <span class="text-body">Complete project</span>
              <h1 class="fw-medium fs-30 mb-3">596</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-primary rounded-0"
                  style="width: 70%; height: 10px"
                ></div>
              </div>
              <p class="fs-12 text-dark lh-1 mt-2">
                <span class="text-success">70%</span> of the total project is
                complete
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="../../../assets/images/icons/project-icon-1.svg"
                alt="project-icon-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Total Task: 600</h3>
              <span class="text-body">Awaiting processing</span>
              <h1 class="fw-medium fs-30 mb-3">75</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-success rounded-0"
                  style="width: 08%; height: 10px"
                ></div>
              </div>
              <p class="fs-12 text-dark lh-1 mt-2">
                <span class="text-danger">08%</span> is waiting for processing
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="../../../assets/images/icons/project-icon-2.svg"
                alt="project-icon-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Total Members: 85</h3>
              <span class="text-body">Working hard</span>
              <h1 class="fw-medium fs-30 mb-3">80</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-warning rounded-0"
                  style="width: 90%; height: 10px"
                ></div>
              </div>
              <p class="fs-12 text-dark lh-1 mt-2">
                Project engagement <span class="text-success">90%</span>
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="../../../assets/images/icons/project-icon-3.svg"
                alt="project-icon-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-md-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <h3 class="fw-medium fs-18">Productivity: 90</h3>
              <span class="text-body">Revenue</span>
              <h1 class="fw-medium fs-30 mb-3">$1520</h1>
              <div
                class="progress rounded-0 mb-0 progress-width"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 10px; background-color: #f4f6fa; width: 210px"
              >
                <div
                  class="progress-bar bg-danger rounded-0"
                  style="width: 50%; height: 10px"
                ></div>
              </div>
              <p class="fs-12 text-dark lh-1 mt-2">
                Revenue earned this month
                <span class="text-success">50%</span>
              </p>
            </div>
            <div class="flex-shrink-0">
              <img
                src="../../../assets/images/icons/project-icon-4.svg"
                alt="project-icon-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectProgress",
};
</script>