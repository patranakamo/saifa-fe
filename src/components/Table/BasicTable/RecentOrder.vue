<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Recent Order</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">This Year</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <div class="all-table scroll-bar h-608">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Order # ID
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Product
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Customer
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Quantity
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Price
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Date
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Vendor
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Status
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ps-0">
                <span class="text-body">#35715</span>
              </td>
              <td>
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
                <span class="text-body">Bobby Thornhill</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$300</span>
              </td>
              <td>
                <span class="text-body">25 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Harold Hughes</span>
              </td>
              <td>
                <span class="text-success">Delivered</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#95175</span>
              </td>
              <td>
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
                <span class="text-body">Amy Osborne</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$25</span>
              </td>
              <td>
                <span class="text-body">24 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Carol Carte</span>
              </td>
              <td>
                <span class="text-primary">Pending</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#25846</span>
              </td>
              <td>
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
                <span class="text-body">Ray Griffith</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$180</span>
              </td>
              <td>
                <span class="text-body">23 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Lincoln Wing</span>
              </td>
              <td>
                <span class="text-danger">Out of stock</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#15975</span>
              </td>
              <td>
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
                <span class="text-body">Maria Blade</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$65</span>
              </td>
              <td>
                <span class="text-body">22 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Patricia Smalls</span>
              </td>
              <td>
                <span class="text-success">Delivered</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#75368</span>
              </td>
              <td>
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
                <span class="text-body">Alonso Perez</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$5000</span>
              </td>
              <td>
                <span class="text-body">21 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Alexis McNair</span>
              </td>
              <td>
                <span class="text-primary">Pending</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#85247</span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="wh-50 rounded-2"
                    src="../../../assets/images/products/product-5.jpg"
                    alt="product-5"
                  />
                  <h3 class="fs-14 text-dark ms-3 mb-0">Smart phone</h3>
                </div>
              </td>
              <td>
                <span class="text-body">Dorothy Johnson</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$999</span>
              </td>
              <td>
                <span class="text-body">20 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Andrew Vinson</span>
              </td>
              <td>
                <span class="text-danger">Out of stock</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#35715</span>
              </td>
              <td>
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
                <span class="text-body">Bobby Thornhill</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$300</span>
              </td>
              <td>
                <span class="text-body">25 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Harold Hughes</span>
              </td>
              <td>
                <span class="text-success">Delivered</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#95175</span>
              </td>
              <td>
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
                <span class="text-body">Amy Osborne</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$25</span>
              </td>
              <td>
                <span class="text-body">24 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Carol Carte</span>
              </td>
              <td>
                <span class="text-primary">Pending</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#25846</span>
              </td>
              <td>
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
                <span class="text-body">Ray Griffith</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$180</span>
              </td>
              <td>
                <span class="text-body">23 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Lincoln Wing</span>
              </td>
              <td>
                <span class="text-danger">Out of stock</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#15975</span>
              </td>
              <td>
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
                <span class="text-body">Maria Blade</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$65</span>
              </td>
              <td>
                <span class="text-body">22 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Patricia Smalls</span>
              </td>
              <td>
                <span class="text-success">Delivered</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#75368</span>
              </td>
              <td>
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
                <span class="text-body">Alonso Perez</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$5000</span>
              </td>
              <td>
                <span class="text-body">21 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Alexis McNair</span>
              </td>
              <td>
                <span class="text-primary">Pending</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-body">#85247</span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="wh-50 rounded-2"
                    src="../../../assets/images/products/product-5.jpg"
                    alt="product-5"
                  />
                  <h3 class="fs-14 text-dark ms-3 mb-0">Smart phone</h3>
                </div>
              </td>
              <td>
                <span class="text-body">Dorothy Johnson</span>
              </td>
              <td>
                <span class="text-body">1</span>
              </td>
              <td>
                <span class="text-body">$999</span>
              </td>
              <td>
                <span class="text-body">20 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">Andrew Vinson</span>
              </td>
              <td>
                <span class="text-danger">Out of stock</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="eye"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="trash"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
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
  name: "RecentOrder",
};
</script>