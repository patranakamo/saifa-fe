<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Single User Example</h4>

      <div class="d-sm-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img
              class="wh-50 rounded-circle"
              src="../../../assets/images/user/user-31.jpg"
              alt="user-31"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <h4 class="fs-14 fw-medium">Patrick Griffith</h4>
            <span class="text-body fs-14">Managing Director</span>
          </div>
        </div>

        <ul class="ps-0 mb-0 list-unstyled d-flex mt-3 mt-sm-0">
          <li>
            <a
              href="https://www.facebook.com/"
              class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
              target="_blank"
            >
              <vue-feather type="facebook" style="width: 16"></vue-feather>
            </a>
          </li>
          <li class="ms-2">
            <a
              href="https://www.twitter.com/"
              class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
              target="_blank"
            >
              <vue-feather type="twitter" style="width: 16"></vue-feather>
            </a>
          </li>
          <li class="ms-2">
            <a
              href="https://www.linkedin.com/"
              class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
              target="_blank"
            >
              <vue-feather type="linkedin" style="width: 16"></vue-feather>
            </a>
          </li>
          <li class="ms-2">
            <a
              href="https://www.mail.com/"
              class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
              target="_blank"
            >
              <vue-feather type="mail" style="width: 16"></vue-feather>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleUserAvatar",
};
</script>