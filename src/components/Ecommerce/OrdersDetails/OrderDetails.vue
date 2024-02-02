<template>
  <div class="card border-0 bg-d6d7fc border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="fs-18 fw-medium text-dark mb-0">Order Details</h3>
        <span>Tracking ID:000147852365</span>
      </div>

      <div class="position-relative m-4">
        <div
          class="progress"
          role="progressbar"
          aria-label="Progress"
          aria-valuenow="66"
          aria-valuemin="0"
          aria-valuemax="100"
          style="height: 1px"
        >
          <div
            class="progress-bar"
            style="width: 66%; background-color: #5c61f2"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 c-start-0 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          style="width: 10px; height: 10px; background-color: #5c61f2"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-33 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          style="width: 10px; height: 10px; background-color: #5c61f2"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-66 translate-middle btn btn-sm btn-success rounded-pill border-0 p-0"
          style="width: 10px; height: 10px; background-color: #2ed47e"
        ></button>
        <button
          type="button"
          class="position-absolute top-0 c-start-100 translate-middle btn btn-sm btn-primary rounded-pill border-0 p-0"
          style="width: 10px; height: 10px; background-color: #5c61f2"
        ></button>
      </div>

      <ul
        class="d-flex justify-content-between align-items-center ps-0 mb-0 list-unstyled order-status"
      >
        <li>Order Placed</li>
        <li>Packed</li>
        <li>Shipped</li>
        <li>Delivered</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetails",
};
</script>