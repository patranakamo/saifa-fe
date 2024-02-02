<template>
  <div class="container-fluid">
    <div class="inner-main-content range-slider-content">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title">
                <h4 class="text-dark fs-18 fw-medium mb-3">Default Example</h4>
              </div>

              <div
                class="price-content d-flex align-items-center justify-content-between"
              >
                <input
                  type="range"
                  class="single-slider"
                  name="age"
                  value=""
                  data-from="40"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <MinExample />
        </div>
        <div class="col-lg-6 col-sm-6">
          <MinMaxExample />
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MinExample from "../../components/ExtendedUI/RangeSlider/MinExample.vue";
import MinMaxExample from "../../components/ExtendedUI/RangeSlider/MinMaxExample.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "BasicTablePage",
  components: {
    MinExample,
    MinMaxExample,
    MainFooter,
  },
});
</script>

<style lang="scss">
.range-slider-content {
  input {
    width: 100%;
  }
  .range-slider {
    position: relative;
    height: 5px;

    input {
      &[type="range"] {
        -webkit-appearance: none;
        background: transparent;
        border-radius: 5px;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;

        &::-webkit-slider-thumb {
          background: #5c61f2;
          -webkit-appearance: none;
          position: relative;
          border-radius: 50%;
          margin-top: -5px;
          cursor: pointer;
          height: 15px;
          width: 15px;
          z-index: 1;
        }
        &::-webkit-slider-runnable-track {
          width: 100%;
          height: 7px;
          border: none;
          border-radius: 5px;
          background: #f4f4f4;
        }
      }
    }
  }
}
</style>