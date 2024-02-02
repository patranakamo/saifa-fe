<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Basic Dropdown</h4>

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
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <vue-feather type="download"></vue-feather>
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Hover Menu</h4>

              <div class="dropdown action-opt hover">
                <button
                  class="btn bg-transparent p-0 text-primary fs-14"
                  type="button"
                >
                  Hover Me
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
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <vue-feather type="download"></vue-feather>
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Dropdown Placement</h4>

              <ul class="ps-0 mb-0 list-unstyled">
                <li class="d-inline-block mb-3 mb-lg-0">
                  <div class="dropdown action-opt">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Button Left
                    </button>
                    <ul class="dropdown-menu dropdown-menu-start">
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
                </li>
                <li class="d-inline-block ms-0 ms-sm-3 mb-3 mb-lg-0">
                  <div class="dropdown action-opt">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Button Right
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
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
                </li>
                <li class="d-inline-block ms-0 ms-sm-3 mb-3 mb-lg-0">
                  <div class="dropdown action-opt dropdown-center">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Button Center
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
                </li>
                <li class="d-inline-block ms-0 ms-sm-3 mb-3 mb-lg-0">
                  <div class="dropdown action-opt dropup">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Button Top
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
                </li>
                <li class="d-inline-block ms-0 ms-sm-3 mb-3 mb-lg-0">
                  <div class="dropdown action-opt dropup">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Button Top Right
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
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
                </li>
                <li class="d-inline-block ms-0 ms-sm-3 mb-3 mb-lg-0">
                  <div class="dropdown action-opt">
                    <button
                      class="bg-transparent default-btn border-btn text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown Link
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
                </li>
              </ul>
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
  name: "DropdownsPage",
  components: {
    MainFooter,
  },
});
</script>