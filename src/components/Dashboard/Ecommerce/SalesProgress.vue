<template>
  <div class="row justify-content-center">
    <div class="col-xl-6 col-md-6">
      <div
        class="card border-0 box-shadow border-radius-10 mb-4 e-commerce-card"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <h3 class="fw-medium fs-18">Total Orders</h3>
            <div class="d-flex justify-content-between align-items-center">
              <span class="border bg btn-outline-success commerce-status">
                <vue-feather type="arrow-up"></vue-feather>
                5.75%
              </span>
            </div>
          </div>
          <h1 class="fw-medium fs-30 mb-4">15,717</h1>
          <div class="d-flex align-items-end justify-content-between">
            <img
              src="../../../assets/images/icons/e-commerce-1.svg"
              alt="e-commerce-1"
            />
            <p class="text-body">5.75% of the total project is complete</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-md-6">
      <div
        class="card border-0 box-shadow border-radius-10 mb-4 e-commerce-card"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <h3 class="fw-medium fs-18">Total Customers</h3>
            <div class="d-flex justify-content-between align-items-center">
              <span class="border bg btn-outline-danger commerce-status">
                <vue-feather type="arrow-down"></vue-feather>
                1.20%
              </span>
            </div>
          </div>
          <h1 class="fw-medium fs-30 mb-4">17.57K</h1>
          <div class="d-flex align-items-end justify-content-between">
            <img
              src="../../../assets/images/icons/e-commerce-2.svg"
              alt="e-commerce-2"
            />
            <p class="text-body">Total visitors decreased by 1.20%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-md-6">
      <div
        class="card border-0 box-shadow border-radius-10 mb-4 e-commerce-card"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <h3 class="fw-medium fs-18">Total Revenue</h3>
            <div class="d-flex justify-content-between align-items-center">
              <span class="border bg btn-outline-success commerce-status">
                <vue-feather type="arrow-up"></vue-feather>
                4.25%
              </span>
            </div>
          </div>
          <h1 class="fw-medium fs-30 mb-4">$94.50K</h1>
          <div class="d-flex align-items-end justify-content-between">
            <img
              src="../../../assets/images/icons/e-commerce-3.svg"
              alt="e-commerce-3"
            />
            <p class="text-body">Revenue increases this month</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-md-6">
      <div
        class="card border-0 box-shadow border-radius-10 mb-4 e-commerce-card"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-between">
            <h3 class="fw-medium fs-18">New Vs Returning</h3>
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
          <h1 class="fw-medium fs-30 mb-4">1,000</h1>
          <div
            class="d-lg-flex d-md-flex d-sm-flex align-items-end justify-content-between"
          >
            <img
              class="mt-m-10"
              src="../../../assets/images/icons/e-commerce-4.svg"
              alt="e-commerce-4"
            />
            <div>
              <p class="text-body mb-0">
                New Customers 300/
                <span class="text-primary">30%</span>
              </p>
              <p class="text-body lh-1">
                Returning Customer 700 /
                <span class="text-success">70%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesProgress",
};
</script>