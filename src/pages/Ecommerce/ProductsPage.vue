<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Products</h3>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">All Products</h3>

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
            <div class="col-lg-8">
              <div class="d-md-flex d-lg-flex align-items-center mb-2 m-lg-0">
                <div class="card-title mb-0">
                  <form class="src-form position-relative w-25 w-sm-100">
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

                <ul
                  class="list-unstyled ps-0 my-lg-0 d-flex justify-content-center justify-content-md-start my-3"
                >
                  <li class="text-body ms-sm-3 ms-2">
                    All (<span class="text-primary">50595</span>)
                  </li>
                  <li class="text-body ms-sm-3 ms-2">
                    Published (<span class="text-primary">35980</span>)
                  </li>
                  <li class="text-body ms-sm-3 ms-2">
                    Drafts (<span class="text-primary">99</span>)
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="d-flex">
                <select
                  class="form-select form-control h-40 py-1"
                  aria-label="Default select example"
                >
                  <option selected>Category</option>
                  <option value="1">Headphone</option>
                  <option value="2">Sunglass</option>
                  <option value="3">Phone</option>
                </select>
                <select
                  class="form-select form-control h-40 py-1 ms-3"
                  aria-label="Default select example"
                >
                  <option selected>Vendor</option>
                  <option value="1">Patrick Griffith</option>
                  <option value="2">Paul Cupp</option>
                  <option value="3">David Martinez</option>
                </select>
              </div>
            </div>
          </div>

          <AllProducts />
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New Product
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
                    Create Product
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AllProducts from "../../components/Ecommerce/Products/AllProducts.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProductsPage",
  components: {
    AllProducts,
    MainFooter,
  },
});
</script>