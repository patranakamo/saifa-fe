<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Traffic Resources</h3>

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

      <div class="all-table link-table scroll-bar h-608">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium fs-14 ps-0" scope="col">Link</th>
              <th class="text-dark fw-medium fs-14" scope="col">Percentage</th>
              <th class="text-dark fw-medium fs-14" scope="col">Value</th>
              <th class="text-dark fw-medium fs-14" scope="col">Visits</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14">google.com</span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 11px; background-color: rgba(234, 67, 53, 0.1)"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 40%; height: 11px; background-color: #ea4335"
                  ></div>
                </div>
              </td>
              <td>
                <span style="color: #ea4335" class="fs-14">40%</span>
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">21,886</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14">facebook.com</span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 11px; background-color: rgba(59, 89, 152, 0.1)"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 25%; height: 11px; background-color: #3b5998"
                  ></div>
                </div>
              </td>
              <td>
                <span style="color: #3b5998" class="fs-14">25%</span>
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">13,679</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14">twitter.com</span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="12"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="
                    height: 11px;
                    background-color: rgba(29, 161, 242, 0.1);
                  "
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 12%; height: 11px; background-color: #1da1f2"
                  ></div>
                </div>
              </td>
              <td>
                <span style="color: #1da1f2" class="fs-14">12%</span>
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">6,566</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14">linkedin.com</span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="8"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 11px; background-color: rgba(0, 119, 181, 0.1)"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 8%; height: 11px; background-color: #0077b5"
                  ></div>
                </div>
              </td>
              <td>
                <span style="color: #0077b5" class="fs-14">8%</span>
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">4,377</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14">github.com</span>
              </td>
              <td>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 11px; background-color: rgba(51, 51, 51, 0.1)"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 15%; height: 11px; background-color: #333333"
                  ></div>
                </div>
              </td>
              <td>
                <span style="color: #333333" class="fs-14">15%</span>
              </td>
              <td class="pe-0">
                <span class="text-body fs-14">8,207</span>
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
  name: "TrafficResources",
};
</script>