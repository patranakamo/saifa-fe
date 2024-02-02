<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Rounded Buttons</h4>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-inline-block mb-2 mb-lg-0">
          <button class="default-btn rounded-pill">Primary</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-secondary">
            Secondary
          </button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-success">Success</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-info">Info</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-warning">Warning</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-danger">Danger</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-dark">Dark</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-light">Light</button>
        </li>
        <li class="d-inline-block ms-2 mb-2 mb-lg-0">
          <button class="default-btn rounded-pill bg-white text-dark">
            Link
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundedButtons",
};
</script>