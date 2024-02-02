<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Customers Lists</h3>

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

      <div class="all-table scroll-bar h-660">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Name
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Email
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Phone
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Balance
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Joining Date
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Order
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Status
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-1.jpg"
                    alt="user-1"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Patrick Griffith
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">patrick@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 3696</span>
              </td>
              <td>
                <span class="text-body">$5599</span>
              </td>
              <td>
                <span class="text-body">05 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">125</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-2.jpg"
                    alt="user-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">Paul Cupp</h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">paul@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 9966</span>
              </td>
              <td>
                <span class="text-body">$5510</span>
              </td>
              <td>
                <span class="text-body">07 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">214</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-3.jpg"
                    alt="user-3"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    David Martinez
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">martinez@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 2255</span>
              </td>
              <td>
                <span class="text-body">$4521</span>
              </td>
              <td>
                <span class="text-body">09 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">95</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-4.jpg"
                    alt="user-4"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    William Frost
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">william@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 7788</span>
              </td>
              <td>
                <span class="text-body">$1258</span>
              </td>
              <td>
                <span class="text-body">10 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">25</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-5.jpg"
                    alt="user-5"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Tony Wright
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">wright@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 4452</span>
              </td>
              <td>
                <span class="text-body">$4520</span>
              </td>
              <td>
                <span class="text-body">12 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">145</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-6.jpg"
                    alt="user-6"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Lani Brown
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">brown@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 5580</span>
              </td>
              <td>
                <span class="text-body">$4574</span>
              </td>
              <td>
                <span class="text-body">15 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">159</span>
              </td>
              <td>
                <span class="rounded-0 text-danger">Deactive</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-7.jpg"
                    alt="user-7"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Edward Cuellar
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">edward@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 0088</span>
              </td>
              <td>
                <span class="text-body">$1232</span>
              </td>
              <td>
                <span class="text-body">17 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">357</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-8.jpg"
                    alt="user-8"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Janice Brown
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">janice@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 2211</span>
              </td>
              <td>
                <span class="text-body">$2200</span>
              </td>
              <td>
                <span class="text-body">19 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">258</span>
              </td>
              <td>
                <span class="rounded-0 text-danger">Deactive</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-9.jpg"
                    alt="user-9"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Robert Higgins
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">robert@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 6684</span>
              </td>
              <td>
                <span class="text-body">$3320</span>
              </td>
              <td>
                <span class="text-body">22 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">425</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-10.jpg"
                    alt="user-10"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Carole Mathis
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">carole@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 3366</span>
              </td>
              <td>
                <span class="text-body">$4422</span>
              </td>
              <td>
                <span class="text-body">25 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">15</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ps-0 d-flex align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>

                <router-link
                  to="/profile"
                  class="text-decoration-none d-flex align-items-center"
                >
                  <img
                    class="wh-30 rounded-circle"
                    src="../../../assets/images/user/user-11.jpg"
                    alt="user-11"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Sutherland Lee
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">sutherland@gmail.com</span>
              </td>
              <td>
                <span class="text-body">+1 444 222 8810</span>
              </td>
              <td>
                <span class="text-body">$7452</span>
              </td>
              <td>
                <span class="text-body">28 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">241</span>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
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
  name: "CustomersLists",
};
</script>