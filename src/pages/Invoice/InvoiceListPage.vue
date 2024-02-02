<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <InvoiceList />

      <!-- Start Default Offcanvas From Area -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New A Invoice List
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
                  <label class="label">Issued Date</label>
                  <input
                    type="dte"
                    class="form-control"
                    placeholder="Write your issued date"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Total</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write total amount"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Quantity</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write quantity"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Balance</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your balance"
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
                    Create Invoice
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
import InvoiceList from "../../components/Invoice/InvoiceList/InvoiceList.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "InvoiceListPage",
  components: {
    InvoiceList,
    MainFooter,
  },
});
</script>