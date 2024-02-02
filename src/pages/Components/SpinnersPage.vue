<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Border Spinner</h4>

              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Growing Spinner</h4>

              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">
                Border Color Spinner
              </h4>

              <div class="spinner-border text-primary me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-secondary me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-success me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-danger me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-warning me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-info me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-light me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-dark me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Growing Spinner</h4>

              <div class="spinner-grow text-primary me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-success me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-danger me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-info me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-light me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-dark me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Size Spinner</h4>

              <div class="spinner-border spinner-border-sm me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow spinner-grow-sm me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>

              <div
                class="spinner-border me-1"
                style="width: 3rem; height: 3rem"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <div
                class="spinner-grow me-1"
                style="width: 3rem; height: 3rem"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Buttons Spinners</h4>

              <button class="default-btn me-1" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden" role="status">Loading...</span>
              </button>
              <button class="default-btn me-1" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
              <button class="default-btn me-1" type="button" disabled>
                <span
                  class="spinner-grow spinner-grow-sm"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden" role="status">Loading...</span>
              </button>
              <button class="default-btn me-1" type="button" disabled>
                <span
                  class="spinner-grow spinner-grow-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
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
  name: "SpinnersPage",
  components: {
    MainFooter,
  },
});
</script>