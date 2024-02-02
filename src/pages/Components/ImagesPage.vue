<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">
                Avatar Size Rounded Circle Example
              </h4>

              <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                <li>
                  <img src="../../assets/images/avatar-1.png" alt="avatar-1" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-2.png" alt="avatar-2" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-3.png" alt="avatar-3" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-4.png" alt="avatar-4" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-5.png" alt="avatar-5" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">
                Avatar Size Rounded Square Example
              </h4>

              <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                <li>
                  <img src="../../assets/images/avatar-6.png" alt="avatar-6" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-7.png" alt="avatar-7" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-8.png" alt="avatar-8" />
                </li>
                <li class="ms-3">
                  <img src="../../assets/images/avatar-9.png" alt="avatar-9" />
                </li>
                <li class="ms-3">
                  <img
                    src="../../assets/images/avatar-10.png"
                    alt="avatar-10"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">
                Avatar Size Example
              </h4>

              <ul
                class="ps-0 mb-0 list-unstyled d-flex align-items-center justify-content-between"
              >
                <li>
                  <img
                    src="../../assets/images/avatar-11.png"
                    alt="avatar-11"
                  />
                </li>
                <li class="ms-3">
                  <img
                    src="../../assets/images/avatar-12.png"
                    alt="avatar-12"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">
                Responsive Image Example
              </h4>

              <ul
                class="ps-0 mb-0 list-unstyled d-flex align-items-center justify-content-between"
              >
                <li>
                  <img
                    src="../../assets/images/avatar-13.png"
                    alt="avatar-13"
                  />
                </li>
                <li class="ms-3">
                  <img
                    src="../../assets/images/avatar-14.png"
                    alt="avatar-14"
                  />
                </li>
                <li class="ms-3">
                  <img
                    src="../../assets/images/avatar-15.png"
                    alt="avatar-15"
                  />
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
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ImagesPage",
  components: {
    MainFooter,
  },
});
</script>