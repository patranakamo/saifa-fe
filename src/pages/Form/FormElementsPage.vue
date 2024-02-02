<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Form Elements</h3>
      </div>

      <FormElements />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormElements from "../../components/Form/FormElements/FormElements.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FormElementsPage",
  components: {
    FormElements,
    MainFooter,
  },
});
</script>