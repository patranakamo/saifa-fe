<template>
  <div
    class="card active-projects-content border-0 box-shadow border-radius-10 mb-4"
  >
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-2"
      >
        <h3 class="fw-medium fs-18 mb-0">Active Project</h3>
        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">This Year</option>
          <option value="2">Last Month</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-body fw-medium pt-0 active"
            id="project-1-tab"
            data-bs-toggle="tab"
            data-bs-target="#project-1-tab-pane"
            type="button"
            role="tab"
            aria-controls="project-1-tab-pane"
            aria-selected="true"
          >
            Project - 01
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-body fw-medium"
            id="project-2-tab"
            data-bs-toggle="tab"
            data-bs-target="#project-2-tab-pane"
            type="button"
            role="tab"
            aria-controls="project-2-tab-pane"
            aria-selected="false"
          >
            Project 02
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-body fw-medium"
            id="project-3-tab"
            data-bs-toggle="tab"
            data-bs-target="#project-3-tab-pane"
            type="button"
            role="tab"
            aria-controls="project-3-tab-pane"
            aria-selected="false"
          >
            Project 03
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="project-1-tab-pane"
          role="tabpanel"
          aria-labelledby="project-1-tab"
          tabindex="0"
        >
          <div class="mb-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="d-flex align-items-center">
                  <div>
                    <img
                      src="../../../assets/images/project-logo.png"
                      alt="project-logo"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fs-14 fw-medium">Python Upgrade</h5>
                    <p class="text-body">
                      <span class="text-dark">Client :</span> Winford Griggs
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <span class="text-body d-block mb-1">Assigned To</span>
                    <a href="#" class="d-block text-decoration-none">
                      <img
                        class="rounded-circle wh-30"
                        src="../../../assets/images/user/user-2.jpg"
                        alt="user-3"
                      />
                      <span class="text-dark ms-1">Charles Aguilar</span>
                    </a>
                  </div>

                  <div class="dropdown action-opt">
                    <button
                      class="btn bg-transparent p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <vue-feather type="more-horizontal"></vue-feather>
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
                          <vue-feather type="trash"></vue-feather>
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step-wrapper">
            <ul class="step-content ps-0 mb-4 list-unstyled d-flex">
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">01</span>
                <p class="fw-medium text-dark fs-14 mt-2">Planning</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-white fs-14 active">02</span>
                <p class="fw-medium text-dark fs-14 mt-2">Design</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">3</span>
                <p class="fw-medium text-dark fs-14 mt-2">Development</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">04</span>
                <p class="fw-medium text-dark fs-14 mt-2">Testing</p>
              </li>
            </ul>
            <div class="mw-785 m-auto">
              <ul
                class="d-flex justify-content-between align-items-center ps-0 mb-1 list-unstyled"
              >
                <li class="text-body fs-14 fw-medium">0%</li>
                <li class="text-body fs-14 fw-medium">50%</li>
                <li class="text-body fs-14 fw-medium">100%</li>
              </ul>

              <div
                class="progress rounde rounded-0 overflow-visible mb-4"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 8px"
              >
                <div
                  class="progress-bar rounde rounded-0 overflow-visible"
                  style="width: 50%; height: 8px"
                ></div>
              </div>

              <div class="d-flex align-items-center">
                <p class="mb-0 fw-medium text-primary fs-14">
                  <span class="text-dark">Project Total Hours:</span>
                  300:00 hrs
                </p>
                <p class="mb-0 fw-medium text-primary fs-14 ms-4">
                  <span class="text-dark">Project Hours Left: </span>
                  150:00 hrs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="project-2-tab-pane"
          role="tabpanel"
          aria-labelledby="project-2-tab"
          tabindex="0"
        >
          <div class="mb-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="d-flex align-items-center">
                  <div>
                    <img
                      src="../../../assets/images/project-logo.png"
                      alt="project-logo"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fs-14 fw-medium">Python Upgrade</h5>
                    <p class="text-body">
                      <span class="text-dark">Client :</span> Winford Griggs
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <span class="text-body d-block mb-1">Assigned To</span>
                    <a href="#" class="d-block text-decoration-none">
                      <img
                        class="rounded-circle wh-30"
                        src="../../../assets/images/user/user-3.jpg"
                        alt="user-3"
                      />
                      <span class="text-dark ms-1">Staven Dew</span>
                    </a>
                  </div>

                  <div class="dropdown action-opt">
                    <button
                      class="btn bg-transparent p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <vue-feather type="more-horizontal"></vue-feather>
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
                          <vue-feather type="trash"></vue-feather>
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step-wrapper">
            <ul class="step-content ps-0 mb-4 list-unstyled d-flex">
              <li class="text-center">
                <span class="fw-medium text-white fs-14 active">01</span>
                <p class="fw-medium text-dark fs-14 mt-2">Planning</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">02</span>
                <p class="fw-medium text-dark fs-14 mt-2">Design</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">03</span>
                <p class="fw-medium text-dark fs-14 mt-2">Development</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">04</span>
                <p class="fw-medium text-dark fs-14 mt-2">Testing</p>
              </li>
            </ul>

            <div class="mw-785 m-auto">
              <ul
                class="d-flex justify-content-between align-items-center ps-0 mb-1 list-unstyled"
              >
                <li class="text-body fs-14 fw-medium">0%</li>
                <li class="text-body fs-14 fw-medium">10%</li>
                <li class="text-body fs-14 fw-medium">100%</li>
              </ul>
              <div
                class="progress rounde rounded-0 overflow-visible mb-4"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 8px"
              >
                <div
                  class="progress-bar rounde rounded-0 overflow-visible"
                  style="width: 10%; height: 8px"
                ></div>
              </div>

              <div class="d-flex align-items-center">
                <p class="mb-0 fw-medium text-primary fs-14">
                  <span class="text-dark">Project Total Hours:</span>
                  300:00 hrs
                </p>
                <p class="mb-0 fw-medium text-primary fs-14 ms-4">
                  <span class="text-dark">Project Hours Left: </span>
                  150:00 hrs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="project-3-tab-pane"
          role="tabpanel"
          aria-labelledby="project-3-tab"
          tabindex="0"
        >
          <div class="mb-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="d-flex align-items-center">
                  <div>
                    <img
                      src="../../../assets/images/project-logo.png"
                      alt="project-logo"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fs-14 fw-medium">Python Upgrade</h5>
                    <p class="text-body">
                      <span class="text-dark">Client :</span> Winford Griggs
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <span class="text-body d-block mb-1">Assigned To</span>
                    <a href="#" class="d-block text-decoration-none">
                      <img
                        class="rounded-circle wh-30"
                        src="../../../assets/images/user/user-4.jpg"
                        alt="user-4"
                      />
                      <span class="text-dark ms-1">Anne Smith</span>
                    </a>
                  </div>

                  <div class="dropdown action-opt">
                    <button
                      class="btn bg-transparent p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <vue-feather type="more-horizontal"></vue-feather>
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
                          <vue-feather type="trash"></vue-feather>
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step-wrapper">
            <ul class="step-content ps-0 mb-4 list-unstyled d-flex">
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">01</span>
                <p class="fw-medium text-dark fs-14 mt-2">Planning</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">02</span>
                <p class="fw-medium text-dark fs-14 mt-2">Design</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-dark fs-14">03</span>
                <p class="fw-medium text-dark fs-14 mt-2">Development</p>
              </li>
              <li class="text-center">
                <span class="fw-medium text-white fs-14 active">04</span>
                <p class="fw-medium text-dark fs-14 mt-2">Testing</p>
              </li>
            </ul>

            <div class="mw-785 m-auto">
              <ul
                class="d-flex justify-content-between align-items-center ps-0 mb-1 list-unstyled"
              >
                <li class="text-body fs-14 fw-medium">0%</li>
                <li class="text-body fs-14 fw-medium">100%</li>
                <li class="text-body fs-14 fw-medium">100%</li>
              </ul>
              <div
                class="progress rounde rounded-0 overflow-visible mb-4"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="height: 8px"
              >
                <div
                  class="progress-bar rounde rounded-0 overflow-visible"
                  style="width: 100%; height: 8px"
                ></div>
              </div>

              <div class="d-flex align-items-center">
                <p class="mb-0 fw-medium text-primary fs-14">
                  <span class="text-dark">Project Total Hours:</span>
                  300:00 hrs
                </p>
                <p class="mb-0 fw-medium text-primary fs-14 ms-4">
                  <span class="text-dark">Project Hours Left: </span>
                  150:00 hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveProject",
};
</script>