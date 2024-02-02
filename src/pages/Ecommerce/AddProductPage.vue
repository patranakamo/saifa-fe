<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title mb-3">
                <h3 class="fw-medium fs-18 mb-0">Add a product</h3>
              </div>

              <AddProduct />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title mb-3">
                <h3 class="fw-medium fs-18 mb-0">Product Category and Tags</h3>
              </div>

              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Select category</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select category</option>
                        <option value="1">Ring</option>
                        <option value="2">Headphone</option>
                        <option value="3">Watch</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Vendor</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select vendor</option>
                        <option value="1">Juhon Dew</option>
                        <option value="2">Anne Mari</option>
                        <option value="3">Streven</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Collection</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select Collection</option>
                        <option value="1">Ring</option>
                        <option value="2">Headphone</option>
                        <option value="3">Watch</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="label">Tags</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select Tags</option>
                        <option value="1">Ring</option>
                        <option value="2">Headphone</option>
                        <option value="3">Watch</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title mb-3">
                <h3 class="fw-medium fs-18 mb-0">Another Option</h3>
              </div>

              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Title</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select title</option>
                        <option value="1">Ring</option>
                        <option value="2">Headphone</option>
                        <option value="3">Watch</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Description</label>
                      <textarea
                        class="form-control"
                        placeholder="Write here..."
                        cols="30"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
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
import AddProduct from "../../components/Ecommerce/AddProduct/AddProduct.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AddProductPage",
  components: {
    AddProduct,
    MainFooter,
  },
});
</script>