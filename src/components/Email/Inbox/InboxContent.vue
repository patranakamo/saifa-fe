<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="mb-4">
              <a
                href="#"
                class="default-btn d-block w-100 text-center text-decoration-none text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Compose
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather
                    type="inbox"
                    style="width: 20px; stroke: #5c61f2"
                  ></vue-feather>
                  <span class="ms-2 text-dark">Inbox</span>
                </div>
                <span class="text-body">5</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="star" style="width: 20px"></vue-feather>
                <span class="ms-2">Starred</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="clock" style="width: 20px"></vue-feather>
                <span class="ms-2">Snoozed</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="send" style="width: 20px"></vue-feather>
                <span class="ms-2">Sent</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="file" style="width: 20px"></vue-feather>
                <span class="ms-2">Drafts</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather
                    type="alert-octagon"
                    style="width: 20px"
                  ></vue-feather>
                  <span class="ms-2">Spam</span>
                </div>

                <span class="text-body">10</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather type="trash" style="width: 20px"></vue-feather>
                  <span class="ms-2">Trash</span>
                </div>

                <span class="text-body">12</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="bookmark" style="width: 20px"></vue-feather>
                <span class="ms-2">Important</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="mail" style="width: 20px"></vue-feather>
                <span class="ms-2">All Mail</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="user" style="width: 20px"></vue-feather>
                <span class="ms-2">Personal</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="briefcase" style="width: 20px"></vue-feather>
                <span class="ms-2">Company</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather
                  type="dollar-sign"
                  style="width: 20px"
                ></vue-feather>
                <span class="ms-2">Wallet Balance</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="users" style="width: 20px"></vue-feather>
                <span class="ms-2">Friends</span>
              </a>
            </li>
            <li class="mb-0">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="plus" style="width: 20px"></vue-feather>
                <span class="ms-2">Create New Lable</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-xxl-9 col-md-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Email List</h3>

            <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center">
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Reload "
                >
                  <vue-feather
                    type="rotate-cw"
                    style="width: 20px"
                  ></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Print"
                >
                  <vue-feather type="printer" style="width: 20px"></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Info"
                >
                  <vue-feather
                    type="alert-octagon"
                    style="width: 20px"
                  ></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Delete"
                >
                  <vue-feather type="trash" style="width: 20px"></vue-feather>
                </a>
              </li>
              <li class="me-3">
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
                        <vue-feather type="edit"></vue-feather>
                        Edit
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
              </li>
            </ul>
          </div>

          <div class="all-table scroll-bar">
            <table class="table align-middle mb-0">
              <tbody>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">
                        Daily UI/UX Design
                      </h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vivamus magna justo, lacinia eget...
                    </span>
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">01/03/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">Facebook</h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Quisque velit nisi, pretium ut lacinia in, elementum id
                      enim. Sed porttitor lectus nibh.</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">01/03/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">Dribbble</h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Donec sollicitudin molestie malesuada. Nulla porttitor
                      accumsan tincidunt...</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">28/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">
                        William Frost
                      </h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Quisque velit nisi, pretium ut lacinia in, elementum id
                      enim. Sed porttitor lectus nibh.</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">27/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">
                        Tony Wright
                      </h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Nulla porttitor accumsan tincidunt...</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">27/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">Facebook</h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui...</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">27/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">Dribbble</h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14">
                      Sed porttitor lectus nibh. Curabitur aliquet quam id dui
                      posuere blandit.</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">26/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">Dribbble</h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Proin eget tortor risus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem.</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">25/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">
                        Robert Higgins
                      </h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Pellentesque in ipsum id orci porta dapibus. Donec
                      sollicitudin molestie malesuada...</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">25/02/2023</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <div class="form-check mb-0 pb-0 d-flex align-items-center">
                      <input
                        class="form-check-input pb-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />

                      <a href="#">
                        <vue-feather
                          type="star"
                          style="width: 20px"
                        ></vue-feather>
                      </a>
                    </div>
                  </td>
                  <td>
                    <router-link to="/read-email" class="text-decoration-none">
                      <h5 class="fs-14 text-dark mb-0 fw-medium">
                        Daily UI/UX Design
                      </h5>
                    </router-link>
                  </td>
                  <td class="text-truncate">
                    <span class="text-body fs-14"
                      >Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vivamus magna justo, lacinia eget...</span
                    >
                  </td>
                  <td class="pe-0">
                    <span class="text-body text-end">01/03/2023</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul
            class="ps-0 mb-0 mt-4 list-unstyled d-flex align-items-center justify-content-end"
          >
            <li class="text-body">1-10 of 79</li>
            <li class="ms-2">
              <button class="bg-transparent p-0 border-0">
                <vue-feather
                  type="chevron-left"
                  style="width: 16px"
                ></vue-feather>
              </button>
              <button class="bg-transparent p-0 border-0">
                <vue-feather
                  type="chevron-right"
                  style="width: 16px"
                ></vue-feather>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InboxContent",
};
</script>

<style lang="scss" scoped>
ul {
  li {
    a {
      .icon {
        i {
          position: relative;
          top: 4px;
        }
      }
    }
  }
}
</style>