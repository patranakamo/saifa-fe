<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Team Member</h3>

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

      <ul class="ps-0 mb-0 list-unstyled scroll-bar h-355">
        <li class="mb-3 pb-3 border-bottom border-color">
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
                <h3 class="fs-14 mb-1">William Sanchez</h3>
              </div>
            </div>
            <span class="text-body">Manager</span>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom border-color">
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
                <h3 class="fs-14 mb-1">Trena Callis</h3>
              </div>
            </div>
            <span class="text-body">Managing Director</span>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom border-color">
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
                <h3 class="fs-14 mb-1">Edwin Harpal</h3>
              </div>
            </div>
            <span class="text-body">Financial Advisor</span>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom border-color">
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
                <h3 class="fs-14 mb-1">Tracy Mickelsen</h3>
              </div>
            </div>
            <span class="text-body">Founder</span>
          </div>
        </li>
        <li class="mb-3 pb-3 border-bottom border-color">
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
                <h3 class="fs-14 mb-1">Kenneth Harris</h3>
              </div>
            </div>
            <span class="text-body">CEO</span>
          </div>
        </li>
        <li class="mb-0">
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
              </div>
            </div>
            <span class="text-body">Gold Member</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
};
</script>