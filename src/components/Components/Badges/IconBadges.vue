<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Icon Badges</h4>
      <span
        class="badge btn-outline-primary bg border-0 rounded-pill me-1 fs-14 fw-medium rounded-0 px-3"
      >
        <vue-feather type="dollar-sign" style="width: 14px; stroke: #5c61f2">
        </vue-feather>
        Paid
      </span>
      <span
        class="badge btn-outline-danger bg border-0 rounded-pill me-1 fs-14 fw-medium rounded-0"
      >
        <vue-feather type="alert-octagon" style="width: 14px; stroke: #ee368c">
        </vue-feather>
        Payment Failed
      </span>
      <span
        class="badge btn-outline-warning bg border-0 rounded-pill me-1 fs-14 fw-medium rounded-0"
      >
        <vue-feather type="clock" style="width: 14px; stroke: #ffba5c">
        </vue-feather>
        Awaiting Authorization
      </span>
      <span
        class="badge btn-outline-info bg border-0 rounded-pill me-1 fs-14 fw-medium rounded-0"
      >
        <vue-feather type="credit-card" style="width: 14px; stroke: #2db6f5">
        </vue-feather>
        Unpaid
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconBadges",
};
</script>