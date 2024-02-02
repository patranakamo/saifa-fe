<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Orders Details</h3>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <RecentOrders />
        </div>

        <div class="col-lg-4">
          <OrderSummary />

          <OrderDetails />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">Billing Details</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Name:</span>
                  Carole Mathis
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Email:</span>
                  carole@gmail.com
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Phone:</span>
                  +1 444 222 4433
                </li>
                <li class="text-body fs-14">
                  <span class="text-dark fw-medium">Address:</span>
                  84 S. Arrowhead Court Branford, WL 480680
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">Shipping Details</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Shipping Date:</span>
                  01/03/2023
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Email:</span>
                  carole@gmail.com
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Phone:</span>
                  +1 444 222 4433
                </li>
                <li class="text-body fs-14">
                  <span class="text-dark fw-medium">Address:</span>
                  84 S. Arrowhead Court Branford, WL 480680
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="mb-3">
                <h3 class="fs-18 fw-medium text-dark mb-0">Delivery Info</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled ps-0 mb-0">
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">ABC Delivery</span>
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Order ID:</span>
                  XXXXXX159
                </li>
                <li class="text-body mb-2 fs-14">
                  <span class="text-dark fw-medium">Payment Method:</span>
                  Master Card
                </li>
                <li class="text-body fs-14">
                  <span class="text-dark fw-medium">Email:</span>
                  carole@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecentOrders from "../../components/Ecommerce/OrdersDetails/RecentOrders.vue";
import OrderSummary from "../../components/Ecommerce/OrdersDetails/OrderSummary.vue";
import OrderDetails from "../../components/Ecommerce/OrdersDetails/OrderDetails.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "OrdersDetailsPage",
  components: {
    RecentOrders,
    OrderSummary,
    OrderDetails,
    MainFooter,
  },
});
</script>