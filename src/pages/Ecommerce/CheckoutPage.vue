<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Checkout</h3>
      </div>

      <CheckoutContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckoutContent from "../../components/Ecommerce/Checkout/CheckoutContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CheckoutPage",
  components: {
    CheckoutContent,
    MainFooter,
  },
});
</script>