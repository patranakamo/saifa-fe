<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Customers Lists</h3>
      </div>

      <CustomersLists />

      <!-- Start Default Offcanvas From Area -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New A Customers List
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
                  <label class="label">Customers Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your Customers name"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Write your email"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write Phone location"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Joining Date</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Write your Joining Date"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Order</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your order"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Status</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Status</option>
                    <option value="1">Active</option>
                    <option value="2">Deactive</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Photo</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Write your photo"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Create Customers
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
import CustomersLists from "../../components/Ecommerce/Customers/CustomersLists.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CustomersPage",
  components: {
    CustomersLists,
    MainFooter,
  },
});
</script>