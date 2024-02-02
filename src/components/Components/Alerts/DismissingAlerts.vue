<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Dismissing Alerts</h4>

      <div
        class="alert alert-primary alert-dismissible fade show fs-14 text-primary bg-transparent"
        role="alert"
      >
        <strong>Well done!</strong> You successfully read this important alert
        message.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div
        class="alert alert-warning alert-dismissible fade show fs-14"
        role="alert"
      >
        <vue-feather
          type="check"
          style="width: 16px; margin-right: 5px"
        ></vue-feather>
        <strong>Well done!</strong> You successfully read this important alert
        message.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DismissingAlerts",
};
</script>