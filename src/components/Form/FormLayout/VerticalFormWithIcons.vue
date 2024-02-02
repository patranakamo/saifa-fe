<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Vertical Form With Icons</h4>
      <form>
        <div class="form-group mb-4">
          <label class="label">First Name</label>
          <div class="position-relative">
            <input
              type="text"
              class="form-control"
              style="padding-left: 35px !important"
              placeholder="Enter name"
            />
            <vue-feather
              type="user"
              style="width: 16px; stroke: #919aa3; left: 15px !important"
              class="position-absolute top-50 start-0 translate-middle-y"
            ></vue-feather>
          </div>
        </div>
        <div class="form-group mb-4">
          <label class="label">Email Address</label>
          <div class="position-relative">
            <input
              type="email"
              class="form-control"
              style="padding-left: 35px !important"
              placeholder="Enter email address"
            />
            <vue-feather
              type="mail"
              style="width: 16px; stroke: #919aa3; left: 15px !important"
              class="position-absolute top-50 start-0 translate-middle-y"
            ></vue-feather>
          </div>
        </div>
        <div class="form-group mb-4">
          <label class="label">Password</label>
          <div class="password-wrapper position-relative">
            <input
              type="password"
              id="password"
              class="form-control"
              style="padding-left: 35px !important"
              value="password"
            />
            <vue-feather
              type="lock"
              style="width: 16px; stroke: #919aa3; left: 15px !important"
              class="position-absolute top-50 start-0 translate-middle-y"
            ></vue-feather>
            <i
              style="color: #919aa3; font-size: 16px; right: 15px !important"
              class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 end-0 position-absolute"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="form-group mb-0 d-flex">
          <button type="submit" class="default-btn">Save</button>
          <button type="submit" class="default-btn border-btn ms-3">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalFormWithIcons",
};
</script>