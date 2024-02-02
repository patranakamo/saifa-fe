<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Form Components</h3>
      </div>

      <FormComponents />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponents from "../../components/Form/FormComponents/FormComponents.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FormComponentsPage",
  components: {
    FormComponents,
    MainFooter,
  },
});
</script>