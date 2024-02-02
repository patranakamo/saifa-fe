<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 locations">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Top Countries</h3>

        <span class="text-body fs-14 fw-medium">Total visits 70984</span>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="me-4 py-1">
            <img src="../../../assets/images/top-countries-map.png" alt="" />
          </div>
        </div>

        <div class="col-lg-5">
          <div class="all-table scroll-bar h-336">
            <table class="table align-middle mb-0">
              <tbody>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/united-states-of-america.png"
                        alt="united-states-of-america"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">United States</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">15005</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/china.png"
                        alt="china"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">China</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">12580</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/australia.png"
                        alt="australia"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">Australia</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">8465</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/brazil.png"
                        alt="brazil"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">Brazil</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">7895</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/netherlands.png"
                        alt="netherlands"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">Netherlands</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">7534</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/canada.png"
                        alt="canada"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">Canada</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">6895</span>
                  </td>
                </tr>
                <tr class="mb-3">
                  <td class="ps-0">
                    <div class="d-flex align-items-center">
                      <img
                        class="wh-20"
                        src="../../../assets/images/flag/germany1.png"
                        alt="germany1"
                      />
                      <div class="ms-3">
                        <h3 class="fs-14 text-dark mb-0">Germany</h3>
                      </div>
                    </div>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-body fs-14">9536</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCountries",
};
</script>