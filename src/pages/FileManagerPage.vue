<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xxl-3 col-md-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <ul class="ps-0 mb-0 list-unstyled">
                <li class="mb-4">
                  <h4 class="fs-18">My Drive</h4>
                </li>
                <li class="mb-4">
                  <form class="src-form position-relative">
                    <input
                      type="text"
                      class="form-control h-40 ps-5"
                      placeholder="Search here..."
                    />
                    <vue-feather
                      type="search"
                      class="position-absolute top-50 start-0 translate-middle-y"
                      style="width: 20; stroke: #919aa3; left: 15px !important"
                    ></vue-feather>
                  </form>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none justify-content-between"
                  >
                    <div>
                      <vue-feather
                        type="hard-drive"
                        style="width: 20px; stroke: #5c61f2"
                      ></vue-feather>
                      <span class="ms-2 text-dark">My Drive</span>
                    </div>
                    <span class="text-body">5</span>
                  </a>
                  <ul
                    class="ps-0 mb-0 mt-3 list-unstyled"
                    style="margin-left: 30px"
                  >
                    <li class="mb-3">
                      <a href="#" class="fw-medium fs-14 text-decoration-none"
                        >Projects</a
                      >
                    </li>
                    <li class="mb-3">
                      <a href="#" class="fw-medium fs-14 text-decoration-none"
                        >Documents</a
                      >
                    </li>
                    <li class="mb-3">
                      <a href="#" class="fw-medium fs-14 text-decoration-none"
                        >Application</a
                      >
                    </li>
                    <li class="mb-3">
                      <a href="#" class="fw-medium fs-14 text-decoration-none"
                        >Assets</a
                      >
                    </li>
                    <li class="mb-0">
                      <a href="#" class="fw-medium fs-14 text-decoration-none"
                        >Personal</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none"
                  >
                    <vue-feather type="clock" style="width: 20px"></vue-feather>
                    <span class="ms-2">Recants</span>
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none"
                  >
                    <vue-feather type="file" style="width: 20px"></vue-feather>
                    <span class="ms-2">Documents</span>
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none"
                  >
                    <vue-feather type="image" style="width: 20px"></vue-feather>
                    <span class="ms-2">Media</span>
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none justify-content-between"
                  >
                    <div>
                      <vue-feather
                        type="trash"
                        style="width: 20px"
                      ></vue-feather>
                      <span class="ms-2">Trash</span>
                    </div>

                    <span class="text-body">12</span>
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center fw-medium fs-14 text-decoration-none"
                  >
                    <vue-feather type="star" style="width: 20px"></vue-feather>
                    <span class="ms-2">Important</span>
                  </a>
                </li>
              </ul>

              <div class="mt-5 pt-5">
                <h4 class="fs-18 fw-medium mb-3">Storage Status</h4>
                <div
                  class="progress rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75 rounded-0 bg-primary"></div>
                </div>
                <p class="text-body mt-2">% 50 GB Used of 128 GB</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xxl-9 col-md-8">
          <MyDrive />

          <RecentFiles />

          <!-- Start Default Offcanvas From Area -->
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
                Add A New Folder List
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">File Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Write your file name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Owner Name</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Write your email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Listed Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Write listed date"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Rolls</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Write your rolls"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">File Size</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Write your file size"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Status</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Status</option>
                        <option value="1">Active</option>
                        <option value="2">Deactive</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Photo</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Write your photo"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <button type="submit" class="default-btn">
                        Create Folder
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- End Default Offcanvas From Area -->
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyDrive from "../components/FileManager/MyDrive.vue";
import RecentFiles from "../components/FileManager/RecentFiles.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "FileManagerPage",
  components: {
    MyDrive,
    RecentFiles,
    MainFooter,
  },
});
</script>