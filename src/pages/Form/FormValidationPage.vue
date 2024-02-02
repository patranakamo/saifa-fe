<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Form Components</h3>
      </div>

      <CustomStyles />

      <ServerSide />

      <SupportedElements />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomStyles from "../../components/Form/FormValidation/CustomStyles.vue";
import ServerSide from "../../components/Form/FormValidation/ServerSide.vue";
import SupportedElements from "../../components/Form/FormValidation/SupportedElements.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FormValidationPage",
  components: {
    CustomStyles,
    ServerSide,
    SupportedElements,
    MainFooter,
  },
});
</script>