<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title mb-0">
        <h3 class="fw-medium fs-18 mb-0">My Tasks</h3>
      </div>

      <div class="all-table scroll-bar h-325">
        <table class="table align-middle mb-0">
          <tbody>
            <tr>
              <td class="ps-0">
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Hotel Management System
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Terry Bourque</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-primary d-block"> On Process</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> July 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Engineering Lite Touch
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Raymond Scruggs</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-danger d-block"> Urgent</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body">Oct 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Python Upgrade
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Charles Aguilar</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-success d-block">Active</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> Sep 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Product Development
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Allen Barnes</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-primary d-block"> On Process</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> Aug 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Hotel Management System
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Terry Bourque</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-primary d-block"> On Process</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> July 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Engineering Lite Touch
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Raymond Scruggs</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-danger d-block"> Urgent</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body">Oct 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Python Upgrade
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Charles Aguilar</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-success d-block">Active</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> Sep 30, 2023</span>
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
                <div class="form-check d-flex align-items-center mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label fs-14 text-dark"
                    for="flexCheckDefault"
                  >
                    Product Development
                  </label>
                </div>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Assigned To</span>
                <span class="text-dark d-block">Allen Barnes</span>
              </td>
              <td class="ps-0">
                <span class="text-body d-block mb-1">Status</span>
                <span class="rounded-0 text-primary d-block"> On Process</span>
              </td>
              <td>
                <span class="d-block text-body mb-1">Deadline</span>
                <span class="d-block text-body"> Aug 30, 2023</span>
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
  name: "MyTasks",
};
</script>