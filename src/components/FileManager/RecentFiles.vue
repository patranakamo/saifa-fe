<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Recent Files</h3>

        <button
          class="btn btn-primary default-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Create Folder
        </button>
      </div>

      <div class="all-table scroll-bar h-660">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium fs-14 ps-0" scope="col">Name</th>
              <th class="text-dark fw-medium fs-14" scope="col">Owner</th>
              <th class="text-dark fw-medium fs-14" scope="col">Listed Date</th>
              <th class="text-dark fw-medium fs-14" scope="col">File Size</th>
              <th class="text-dark fw-medium fs-14" scope="col">File Items</th>
              <th class="text-dark fw-medium fs-14" scope="col"></th>
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Product Design
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">Patrick Griffith</span>
              </td>
              <td>
                <span class="text-body">05 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">1.0 GB</span>
              </td>
              <td>
                <span class="text-body">61</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Wireframes
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">Paul Cupp</span>
              </td>
              <td>
                <span class="text-body">07 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">0.5 GB</span>
              </td>
              <td>
                <span class="text-body">78</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Personal Doc Files
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">David Martinez</span>
              </td>
              <td>
                <span class="text-body">09 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">0.90 GB</span>
              </td>
              <td>
                <span class="text-body">19</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Important Documents
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">William Frost</span>
              </td>
              <td>
                <span class="text-body">10 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">1.5 GB</span>
              </td>
              <td>
                <span class="text-body">95</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Media files
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">Tony Wright</span>
              </td>
              <td>
                <span class="text-body">12 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">1.9 GB</span>
              </td>
              <td>
                <span class="text-body">46</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
                    class="wh-30"
                    src="../../assets/images/file-2.png"
                    alt="file-2"
                  />
                  <h5 class="fs-14 text-dark mb-0 ms-2 fw-medium">
                    Mix Design Projects
                  </h5>
                </router-link>
              </td>
              <td>
                <span class="text-body">Lani Brown</span>
              </td>
              <td>
                <span class="text-body">15 Feb, 2023</span>
              </td>
              <td>
                <span class="text-body">0.85 GB</span>
              </td>
              <td>
                <span class="text-body">59</span>
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
                        <vue-feather type="edit"></vue-feather>
                        Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="download"></vue-feather>
                        Download
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
  name: "RecentFiles",
};
</script>