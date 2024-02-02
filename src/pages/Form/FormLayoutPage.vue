<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Form Layouts</h3>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <FormLayout />
        </div>
        <div class="col-xxl-6">
          <VerticalFormWithIcons />
        </div>
        <div class="col-xxl-12">
          <GridRows />
        </div>
        <div class="col-xxl-12">
          <SingleLineTextFields />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLayout from "../../components/Form/FormLayout/VerticalForm.vue";
import VerticalFormWithIcons from "../../components/Form/FormLayout/VerticalFormWithIcons.vue";
import GridRows from "../../components/Form/FormLayout/GridRows.vue";
import SingleLineTextFields from "../../components/Form/FormLayout/SingleLineTextFields.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FormLayoutPage",
  components: {
    FormLayout,
    VerticalFormWithIcons,
    GridRows,
    SingleLineTextFields,
    MainFooter,
  },
});
</script>