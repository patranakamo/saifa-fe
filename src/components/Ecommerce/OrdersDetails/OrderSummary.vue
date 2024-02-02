<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h3 class="fw-medium fs-18 mb-4">Order Summary</h3>
      <div class="d-flex justify-content-between border-bottom mb-4">
        <h4 class="text-dark fs-14 fw-medium">Description</h4>
        <h4 class="text-dark fs-14 fw-medium">Price</h4>
      </div>
      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Grand Total:</span>
          <span class="text-dark fs-14 fw-medium">$5,570</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Discount :</span>
          <span class="text-dark fs-14 fw-medium">$-70</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Tax :</span>
          <span class="text-dark fs-14 fw-medium">$275</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Subtotal :</span>
          <span class="text-dark fs-14 fw-medium">$5,225</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Shipping Charge :</span>
          <span class="text-dark fs-14 fw-medium">$50</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="text-body fs-14">Cupon Charge :</span>
          <span class="text-dark fs-14 fw-medium">$10</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="text-dark fs-14 fw-medium">Total :</span>
          <span class="text-dark fs-14 fw-medium">$5,175</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
};
</script>