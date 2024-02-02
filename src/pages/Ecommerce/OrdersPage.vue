<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Orders</h3>
      </div>

      <!-- Start Order Table Area -->
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Recent Orders</h3>

            <button
              class="btn btn-primary default-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              + Add New
            </button>
          </div>

          <div class="row justify-content-between align-items-center">
            <div class="col-lg-4 col-sm-6">
              <div class="card-title mb-3 mb-sm-0">
                <form class="src-form position-relative w-100">
                  <input
                    type="text"
                    class="form-control h-40"
                    placeholder="Search here..."
                  />
                  <vue-feather
                    type="search"
                    class="position-absolute top-50 start-0 translate-middle-y"
                  ></vue-feather>
                </form>
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <select
                class="form-select form-control h-40 py-1"
                aria-label="Default select example"
              >
                <option selected>Category</option>
                <option value="1">Headphone</option>
                <option value="2">Sunglass</option>
                <option value="3">Phone</option>
              </select>
            </div>
          </div>

          <RecentOrders />
        </div>
      </div>
      <!-- End Order Table Area -->

      <!-- Start Default Offcanvas From Area -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New Order
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your product name"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Category</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Ring</option>
                    <option value="1">Headphone</option>
                    <option value="2">Watch</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your product price"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Date Added</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Stock</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your product stock"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Vendor</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Patrick Griffith</option>
                    <option value="1">Paul Cupp</option>
                    <option value="2">David Martinez</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Stock</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Upload your product image"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Create Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- End Default Offcanvas From Area -->

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecentOrders from "../../components/Ecommerce/Orders/RecentOrders.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "OrdersPage",
  components: {
    RecentOrders,
    MainFooter,
  },
});
</script>