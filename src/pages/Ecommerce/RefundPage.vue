<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <RefundContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RefundContent from "../../components/Ecommerce/Refund/RefundContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "RefundPage",
  components: {
    RefundContent,
    MainFooter,
  },
});
</script>