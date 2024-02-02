<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Status</h4>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="position-relative d-inline-block">
          <img
            class="wh-50 rounded-circle"
            src="../../../assets/images/user/user-27.jpg"
            alt="user-27"
          />
          <span
            class="status online position-absolute bottom-0 end-0 rounded-circle"
          ></span>
        </li>
        <li class="position-relative d-inline-block ms-3">
          <img
            class="wh-50 rounded-circle"
            src="../../../assets/images/user/user-28.jpg"
            alt="user-28"
          />
          <span
            class="status after-online position-absolute bottom-0 end-0 rounded-circle"
          ></span>
        </li>
        <li class="position-relative d-inline-block ms-3">
          <img
            class="wh-50 rounded-circle"
            src="../../../assets/images/user/user-29.jpg"
            alt="user-29"
          />
          <span
            class="status offline position-absolute bottom-0 end-0 rounded-circle"
          ></span>
        </li>
        <li class="position-relative d-inline-block ms-3">
          <img
            class="wh-50 rounded-circle"
            src="../../../assets/images/user/user-30.jpg"
            alt="user-30"
          />
          <span
            class="status after-offline position-absolute bottom-0 end-0 rounded-circle"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusAvatar",
};
</script>