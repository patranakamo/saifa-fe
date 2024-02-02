<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Shipping Cart</h3>
      </div>

      <ShippingCart />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShippingCart from "../../components/Ecommerce/ShippingCart/ShippingCart.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ShippingCartPage",
  components: {
    ShippingCart,
    MainFooter,
  },
});
</script>