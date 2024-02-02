<template>
  <div
    class="card active-projects-content border-0 box-shadow border-radius-10 mb-4"
  >
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Project Overview</h3>

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
                <vue-feather type="edit"></vue-feather>
                Edit
              </a>
            </li>
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

      <div class="row">
        <div class="col-lg-5 col-md-5">
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="book"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Project:</span> Public project
            </li>
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="user"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Client:</span> Bernard Garrison
            </li>
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="dollar-sign"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Budget:</span> $9,750
            </li>
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="calendar"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Started:</span> February 01,2023
            </li>
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="calendar"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Deadline:</span> August 31,2023
            </li>
            <li class="fs-14 fw-medium text-body mb-3">
              <vue-feather
                type="command"
                style="width: 18px; stroke: #919aa3"
              ></vue-feather>
              <span class="text-dark ms-2">Progress:</span> 20%
            </li>
          </ul>
        </div>
        <div class="col-lg-7 col-md-7">
          <p class="text-body fs-14 pe-lg-5" style="line-height: 25px">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
            rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim.
          </p>
          <p class="text-body fs-14 pe-lg-5" style="line-height: 25px">
            Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Nulla
            quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet
            quam vehicula elementum sed sit amet dui. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Curabitur non nulla sit
            amet nisl tempus convallis quis ac lectus. Pellentesque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectOverview",
};
</script>