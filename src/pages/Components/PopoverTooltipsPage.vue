<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Placement</h4>

          <div class="bd-example-tooltips">
            <button
              type="button"
              class="default-btn mb-3 me-1 mb-lg-0 mb-md-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Tooltip on top"
            >
              Tooltip on top
            </button>

            <button
              type="button"
              class="default-btn mb-3 me-1 mb-lg-0 mb-md-0"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Tooltip on right"
            >
              Tooltip on right
            </button>

            <button
              type="button"
              class="default-btn mb-3 me-1 mb-lg-0 mb-md-0"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              Tooltip on bottom
            </button>

            <button
              type="button"
              class="default-btn me-1 mb-3 mb-lg-0 mb-md-0"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-title="Tooltip on left"
            >
              Tooltip on left
            </button>

            <button
              type="button"
              class="default-btn"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
            >
              Tooltip with HTML
            </button>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Disimissible Popover</h4>

          <div class="bd-example-tooltips">
            <button
              type="button"
              class="default-btn bg-danger mb-20 mb-lg-0 mb-md-0"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Dismissible Popover"
            >
              Dismissible Popover
            </button>
          </div>
        </div>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Custom Tooltip</h4>

          <button
            type="button"
            class="default-btn"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="This top tooltip is themed via CSS variables."
          >
            Custom tooltip
          </button>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "PopoverTooltipsPage",
  components: {
    MainFooter,
  },
});
</script>