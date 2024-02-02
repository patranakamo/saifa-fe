<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <!-- Start Recent Order Area -->
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Default Scroll</h3>

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
                  <th class="text-dark fw-medium fs-14 ps-0" scope="col">
                    Order # ID
                  </th>
                  <th class="text-dark fw-medium fs-14" scope="col">Product</th>
                  <th class="text-dark fw-medium fs-14" scope="col">
                    Customer
                  </th>
                  <th class="text-dark fw-medium fs-14" scope="col">
                    Quantity
                  </th>
                  <th class="text-dark fw-medium fs-14" scope="col">Price</th>
                  <th class="text-dark fw-medium fs-14" scope="col">Date</th>
                  <th class="text-dark fw-medium fs-14" scope="col">Vendor</th>
                  <th class="text-dark fw-medium fs-14" scope="col">Status</th>
                  <th class="text-dark fw-medium fs-14" scope="col"></th>
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
                        src="../../assets/images/products/product-9.jpg"
                        alt="product-9"
                      />
                      <h3 class="fs-14 text-dark ms-3">Gold ring in a box</h3>
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
                        src="../../assets/images/products/product-2.jpg"
                        alt="product-2"
                      />
                      <h3 class="fs-14 text-dark ms-3">Headphone</h3>
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
                        src="../../assets/images/products/product-3.jpg"
                        alt="product-3"
                      />
                      <h3 class="fs-14 text-dark ms-3">Hand watch</h3>
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
                        src="../../assets/images/products/product-10.jpg"
                        alt="product-10"
                      />
                      <h3 class="fs-14 text-dark ms-3">Tiny sneakers</h3>
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
                        src="../../assets/images/products/product-7.jpg"
                        alt="product-7"
                      />
                      <h3 class="fs-14 text-dark ms-3">Black dslr camera</h3>
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
                        src="../../assets/images/products/product-5.jpg"
                        alt="product-5"
                      />
                      <h3 class="fs-14 text-dark ms-3">Smart phone</h3>
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
                        src="../../assets/images/products/product-9.jpg"
                        alt="product-9"
                      />
                      <h3 class="fs-14 text-dark ms-3">Gold ring in a box</h3>
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
                        src="../../assets/images/products/product-2.jpg"
                        alt="product-2"
                      />
                      <h3 class="fs-14 text-dark ms-3">Headphone</h3>
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
                        src="../../assets/images/products/product-3.jpg"
                        alt="product-3"
                      />
                      <h3 class="fs-14 text-dark ms-3">Hand watch</h3>
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
                        src="../../assets/images/products/product-10.jpg"
                        alt="product-10"
                      />
                      <h3 class="fs-14 text-dark ms-3">Tiny sneakers</h3>
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
                        src="../../assets/images/products/product-7.jpg"
                        alt="product-7"
                      />
                      <h3 class="fs-14 text-dark ms-3">Black dslr camera</h3>
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
                        src="../../assets/images/products/product-5.jpg"
                        alt="product-5"
                      />
                      <h3 class="fs-14 text-dark ms-3">Smart phone</h3>
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
      <!-- End Recent Order Area -->

      <div class="row">
        <div class="col-xxl-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="card-title d-flex justify-content-between align-items-center mb-3"
              >
                <h3 class="fw-medium fs-18 mb-0">Size Scroll</h3>

                <select
                  class="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected>This Week</option>
                  <option value="1">Last Week</option>
                  <option value="2">This Month</option>
                  <option value="3">Last Month</option>
                </select>
              </div>

              <ul class="ps-0 mb-0 list-unstyled scroll-bar size h-353">
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-15.jpg"
                          alt="user-15"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Chester Burress</h3>
                        <span class="text-body">Customer ID #75368</span>
                      </div>
                    </div>
                    <span class="text-body">Gold Member</span>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-16.jpg"
                          alt="user-16"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Sharon Andrews</h3>
                        <span class="text-body">Customer ID #15975</span>
                      </div>
                    </div>
                    <span class="text-body">Silver Member</span>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-17.jpg"
                          alt="user-17"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Steven Grant</h3>
                        <span class="text-body">Customer ID #25846</span>
                      </div>
                    </div>
                    <span class="text-body">Star Member</span>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-18.jpg"
                          alt="user-18"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Morgan Covington</h3>
                        <span class="text-body">Customer ID #35715</span>
                      </div>
                    </div>
                    <span class="text-body">Star Member</span>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-19.jpg"
                          alt="user-19"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Rusty Thompson</h3>
                        <span class="text-body">Customer ID #95175</span>
                      </div>
                    </div>
                    <span class="text-body">Silver Member</span>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-20.jpg"
                          alt="user-20"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Cynthia Hawkins</h3>
                        <span class="text-body">Customer ID #95175</span>
                      </div>
                    </div>
                    <span class="text-body">Gold Member</span>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../assets/images/user/user-21.jpg"
                          alt="user-21"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Juhon Dew</h3>
                        <span class="text-body">Customer ID #95145</span>
                      </div>
                    </div>
                    <span class="text-body">Silver Member</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xxl-8">
          <div class="card border-0 box-shadow border-radius-10 mb-4 locations">
            <div class="card-body p-4">
              <div
                class="card-title d-flex justify-content-between align-items-center mb-3"
              >
                <h3 class="fw-medium fs-18 mb-0">Top Countries</h3>

                <span class="text-body fs-14 fw-medium">
                  Total visits 70984
                </span>
              </div>

              <div class="row align-items-center">
                <div class="col-lg-7">
                  <div class="me-4 py-1">
                    <img
                      src="../../assets/images/top-countries-map.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-lg-5">
                  <div class="all-table scroll-bar active h-336">
                    <table class="table align-middle mb-0">
                      <tbody>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/united-states-of-america.png"
                                alt="united-states-of-america"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">
                                  United States
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">15005</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/china.png"
                                alt="china"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">China</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">12580</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/australia.png"
                                alt="australia"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Australia</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">8465</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/brazil.png"
                                alt="brazil"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Brazil</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">7895</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/netherlands.png"
                                alt="netherlands"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">
                                  Netherlands
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">7534</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/canada.png"
                                alt="canada"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Canada</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">6895</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/germany1.png"
                                alt="germany1"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Germany</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">9536</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/united-states-of-america.png"
                                alt="united-states-of-america"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">
                                  United States
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">15005</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/china.png"
                                alt="china"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">China</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">12580</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/australia.png"
                                alt="australia"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Australia</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">8465</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/brazil.png"
                                alt="brazil"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Brazil</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">7895</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/netherlands.png"
                                alt="netherlands"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">
                                  Netherlands
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">7534</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/canada.png"
                                alt="canada"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Canada</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">6895</span>
                          </td>
                        </tr>
                        <tr class="mb-3">
                          <td class="ps-0">
                            <div class="d-flex align-items-center">
                              <img
                                class="wh-30"
                                src="../../assets/images/flag/germany1.png"
                                alt="germany1"
                              />
                              <div class="ms-3">
                                <h3 class="fs-14 text-dark mb-0">Germany</h3>
                              </div>
                            </div>
                          </td>
                          <td class="text-end pe-0">
                            <span class="text-body fs-14">9536</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
  name: "ScrollbarPage",
  components: {
    MainFooter,
  },
});
</script>