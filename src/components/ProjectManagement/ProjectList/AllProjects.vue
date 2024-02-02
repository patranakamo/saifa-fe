<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">All Projects</h3>

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

      <div
        class="card-title d-sm-flex d-md-flex d-lg-flex justify-content-between align-items-center mb-3"
      >
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

        <div class="input-group w-25 w-sm-100 mt-3 mt-sm-0 mt-lg-0 mt-md-0">
          <button
            class="btn btn-outline-secondary border-0 text-body fs-14 bg-transparent"
            type="button"
          >
            Sort By:
          </button>
          <select
            class="form-select form-control h-40 rounded-2"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected>Project Category</option>
            <option value="1">Python</option>
            <option value="2">Construction</option>
            <option value="3">Engineering</option>
          </select>
        </div>
      </div>

      <div class="all-table scroll-bar h-660">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14 ps-0" scope="col">
                Project Name
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Members
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Start date
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Deadline
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Progress
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Status
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                Budget
              </th>
              <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Product Development</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-2.jpg"
                        alt="user-2"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-3.jpg"
                        alt="user-3"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-4.jpg"
                        alt="user-4"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Apr 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">70%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td>
                <span class="d-block text-body">$15,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">
                    Nursery Management System
                  </h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-5.jpg"
                        alt="user-5"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-6.jpg"
                        alt="user-6"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 28, 2023</span>
              </td>
              <td>
                <span class="text-body">Nov 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">50%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 50%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-danger">Pending</span>
              </td>
              <td>
                <span class="d-block text-body">$10,555</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Hotel Management System</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-7.jpg"
                        alt="user-7"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-8.jpg"
                        alt="user-8"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-9.jpg"
                        alt="user-9"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 20, 2023</span>
              </td>
              <td>
                <span class="text-body">July 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">100%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-success">Completed</span>
              </td>
              <td>
                <span class="d-block text-body">$9,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Engineering Lite Touch</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-10.jpg"
                        alt="user-10"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-11.jpg"
                        alt="user-11"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-12.jpg"
                        alt="user-12"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Aug 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">100%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td>
                <span class="d-block text-body">$7,580</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Python Upgrade</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-13.jpg"
                        alt="user-13"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-14.jpg"
                        alt="user-14"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 10, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">30%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 30%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-danger">Pending</span>
              </td>
              <td>
                <span class="d-block text-body">$13,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">
                    Construction Project Monitoring
                  </h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-12.jpg"
                        alt="user-12"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-13.jpg"
                        alt="user-13"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-14.jpg"
                        alt="user-14"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Apr 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">70%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-success">Completed</span>
              </td>
              <td>
                <span class="d-block text-body">$15,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Product Development</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-2.jpg"
                        alt="user-2"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-3.jpg"
                        alt="user-3"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-4.jpg"
                        alt="user-4"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Apr 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">70%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td>
                <span class="d-block text-body">$15,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">
                    Nursery Management System
                  </h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-5.jpg"
                        alt="user-5"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-6.jpg"
                        alt="user-6"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 28, 2023</span>
              </td>
              <td>
                <span class="text-body">Nov 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">50%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 50%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-danger">Pending</span>
              </td>
              <td>
                <span class="d-block text-body">$10,555</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Hotel Management System</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-7.jpg"
                        alt="user-7"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-8.jpg"
                        alt="user-8"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-9.jpg"
                        alt="user-9"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 20, 2023</span>
              </td>
              <td>
                <span class="text-body">July 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">100%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-success">Completed</span>
              </td>
              <td>
                <span class="d-block text-body">$9,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Engineering Lite Touch</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-10.jpg"
                        alt="user-10"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-11.jpg"
                        alt="user-11"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-12.jpg"
                        alt="user-12"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Aug 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">100%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-primary">Active</span>
              </td>
              <td>
                <span class="d-block text-body">$7,580</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">Python Upgrade</h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-13.jpg"
                        alt="user-13"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-14.jpg"
                        alt="user-14"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Feb 10, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">30%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 30%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-danger">Pending</span>
              </td>
              <td>
                <span class="d-block text-body">$13,000</span>
                <span class="d-block text-body">Estimation</span>
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
              <td class="ps-0">
                <router-link to="/project-details" class="text-decoration-none">
                  <h5 class="fs-14 text-dark mb-0">
                    Construction Project Monitoring
                  </h5>
                </router-link>
              </td>
              <td>
                <ul class="members-list list-unstyled p-0 m-0">
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-12.jpg"
                        alt="user-12"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-13.jpg"
                        alt="user-13"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a href="javascript:;">
                      <img
                        class="border border-1 rounded-circle wh-30"
                        src="../../../assets/images/user/user-14.jpg"
                        alt="user-14"
                      />
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <span class="text-body">Apr 01, 2023</span>
              </td>
              <td>
                <span class="text-body">Sep 30, 2023</span>
              </td>
              <td>
                <span class="text-body d-block mb-1">70%</span>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px"
                  ></div>
                </div>
              </td>
              <td>
                <span class="rounded-0 text-success">Completed</span>
              </td>
              <td>
                <span class="d-block text-body">$15,000</span>
                <span class="d-block text-body">Estimation</span>
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
  name: "AllProjects",
};
</script>