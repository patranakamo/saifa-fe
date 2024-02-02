<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Shipping Cart</h3>
          </div>

          <div class="all-table scroll-bar h-608">
            <table class="table align-middle mb-0">
              <thead>
                <tr>
                  <th class="text-dark fw-medium fs-14 ps-0" scope="col">
                    Product
                  </th>
                  <th class="text-dark fw-medium fs-14" scope="col">Price</th>
                  <th class="text-dark fw-medium fs-14 text-center" scope="col">
                    Quantity
                  </th>
                  <th class="text-dark fw-medium fs-14" scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-50 rounded-2"
                        src="../../../assets/images/products/product-9.jpg"
                        alt="product-9"
                      />
                      <h3 class="fs-14 text-dark ms-3">Gold ring in a box</h3>
                    </div>
                  </td>
                  <td>
                    <span class="text-body">$300</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control w-25 m-auto count-number"
                      value="1"
                    />
                  </td>
                  <td>
                    <span class="text-body">$300</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-50 rounded-2"
                        src="../../../assets/images/products/product-2.jpg"
                        alt="product-2"
                      />
                      <h3 class="fs-14 text-dark ms-3">Headphone</h3>
                    </div>
                  </td>
                  <td>
                    <span class="text-body">$25</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control w-25 m-auto"
                      value="1"
                    />
                  </td>
                  <td>
                    <span class="text-body">$25</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-50 rounded-2"
                        src="../../../assets/images/products/product-3.jpg"
                        alt="product-3"
                      />
                      <h3 class="fs-14 text-dark ms-3">Hand watch</h3>
                    </div>
                  </td>
                  <td>
                    <span class="text-body">$180</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control w-25 m-auto"
                      value="1"
                    />
                  </td>
                  <td>
                    <span class="text-body">$180</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-50 rounded-2"
                        src="../../../assets/images/products/product-10.jpg"
                        alt="product-10"
                      />
                      <h3 class="fs-14 text-dark ms-3">Tiny sneakers</h3>
                    </div>
                  </td>
                  <td>
                    <span class="text-body">$65</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control w-25 m-auto"
                      value="1"
                    />
                  </td>
                  <td>
                    <span class="text-body">$65</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-50 rounded-2"
                        src="../../../assets/images/products/product-7.jpg"
                        alt="product-7"
                      />
                      <h3 class="fs-14 text-dark ms-3">Black dslr camera</h3>
                    </div>
                  </td>
                  <td>
                    <span class="text-body">$5000</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control w-25 m-auto"
                      value="1"
                    />
                  </td>
                  <td>
                    <span class="text-body">$5000</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <form class="row g-3 align-items-center mt-2">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Coupon code..."
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="default-btn">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h3 class="fw-medium fs-18 mb-4">Order Summary</h3>
          <div class="d-flex justify-content-between border-bottom mb-4">
            <h4 class="text-dark fs-14 fw-medium">Description</h4>
            <h4 class="text-dark fs-14 fw-medium">Price</h4>
          </div>
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Grand Total:</span>
              <span class="text-dark fs-14 fw-medium">$5,570</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Discount :</span>
              <span class="text-dark fs-14 fw-medium">$-70</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Tax :</span>
              <span class="text-dark fs-14 fw-medium">$275</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Subtotal :</span>
              <span class="text-dark fs-14 fw-medium">$5,225</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Shipping Charge :</span>
              <span class="text-dark fs-14 fw-medium">$50</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <span class="text-dark fs-14 fw-medium">Total :</span>
              <span class="text-dark fs-14 fw-medium">$5,175</span>
            </li>
          </ul>
        </div>
      </div>

      <form class="add-note">
        <h4 class="fw-normal text-dark fs-14 mb-3">Add A Note</h4>
        <textarea
          cols="30"
          rows="6"
          class="form-control box-shadow bg-white"
          placeholder="Write some note..."
        ></textarea>
        <button type="submit" class="default-btn w-100 d-block mt-3">
          Proceed To Check Out
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingCart",
};
</script>