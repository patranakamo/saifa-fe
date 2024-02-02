<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Customer</h3>

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

      <ul class="ps-0 mb-0 list-unstyled scroll-bar h-353">
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-15.jpg"
                  alt="user-15"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Chester Burress</h3>
                <span class="text-body">Customer ID #75368</span>
              </div>
            </div>
            <span class="text-body">Gold Member</span>
          </div>
        </li>
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-16.jpg"
                  alt="user-16"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Sharon Andrews</h3>
                <span class="text-body">Customer ID #15975</span>
              </div>
            </div>
            <span class="text-body">Silver Member</span>
          </div>
        </li>
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-17.jpg"
                  alt="user-17"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Steven Grant</h3>
                <span class="text-body">Customer ID #25846</span>
              </div>
            </div>
            <span class="text-body">Star Member</span>
          </div>
        </li>
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-18.jpg"
                  alt="user-18"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Morgan Covington</h3>
                <span class="text-body">Customer ID #35715</span>
              </div>
            </div>
            <span class="text-body">Star Member</span>
          </div>
        </li>
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-19.jpg"
                  alt="user-19"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Rusty Thompson</h3>
                <span class="text-body">Customer ID #95175</span>
              </div>
            </div>
            <span class="text-body">Silver Member</span>
          </div>
        </li>
        <li class="mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-20.jpg"
                  alt="user-20"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Cynthia Hawkins</h3>
                <span class="text-body">Customer ID #95175</span>
              </div>
            </div>
            <span class="text-body">Gold Member</span>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="wh-40 rounded-circle"
                  src="../../../assets/images/user/user-21.jpg"
                  alt="user-21"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-14 mb-1">Juhon Dew</h3>
                <span class="text-body">Customer ID #95145</span>
              </div>
            </div>
            <span class="text-body">Silver Member</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCustomer",
};
</script>