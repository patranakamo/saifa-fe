<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Recent Orders</h3>
        <h3 class="fw-medium fs-18 mb-0">Customer ID : 357951</h3>
      </div>

      <div class="all-table scroll-bar h-608">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pb-2 pt-0 ps-0 fs-14" scope="col">
                Product
              </th>
              <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
                Price
              </th>
              <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
                Quantity
              </th>
              <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
                Total
              </th>
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
                  <h3 class="fs-14 text-dark ms-3 mb-0">Gold ring in a box</h3>
                </div>
              </td>
              <td>
                <span class="text-body">$300</span>
              </td>
              <td>
                <span class="text-body">1</span>
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
                  <h3 class="fs-14 text-dark ms-3 mb-0">Headphone</h3>
                </div>
              </td>
              <td>
                <span class="text-body">$25</span>
              </td>
              <td>
                <span class="text-body">1</span>
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
                  <h3 class="fs-14 text-dark ms-3 mb-0">Hand watch</h3>
                </div>
              </td>
              <td>
                <span class="text-body">$180</span>
              </td>
              <td>
                <span class="text-body">1</span>
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
                  <h3 class="fs-14 text-dark ms-3 mb-0">Tiny sneakers</h3>
                </div>
              </td>
              <td>
                <span class="text-body">$65</span>
              </td>
              <td>
                <span class="text-body">1</span>
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
                  <h3 class="fs-14 text-dark ms-3 mb-0">Black dslr camera</h3>
                </div>
              </td>
              <td>
                <span class="text-body">$5000</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$5000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentOrders",
};
</script>