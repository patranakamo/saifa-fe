<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4 pb-0">
          <h4 class="text-dark fs-18 fw-medium mb-3">Input Groups</h4>

          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">First Name</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      style="padding-left: 35px !important"
                      placeholder="Enter name"
                    />
                    <vue-feather
                      type="user"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      style="padding-left: 35px !important"
                      placeholder="Enter phone"
                    />
                    <vue-feather
                      type="phone"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Email Address</label>
                  <div class="position-relative">
                    <input
                      type="email"
                      class="form-control"
                      style="padding-left: 35px !important"
                      placeholder="Enter email address"
                    />
                    <vue-feather
                      type="mail"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Location</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      style="padding-left: 35px !important"
                      placeholder="Enter location"
                    />
                    <vue-feather
                      type="map-pin"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Password</label>
                  <div class="password-wrapper position-relative">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      style="padding-left: 35px !important"
                      value="password"
                    />
                    <vue-feather
                      type="lock"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                    <i
                      style="
                        color: #919aa3;
                        font-size: 16px;
                        right: 15px !important;
                      "
                      class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 end-0 position-absolute"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Payment Method</label>
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      style="padding-left: 35px !important"
                      placeholder="Enter payment"
                    />
                    <vue-feather
                      type="credit-card"
                      style="
                        width: 16px;
                        stroke: #919aa3;
                        left: 15px !important;
                      "
                      class="position-absolute top-50 start-0 translate-middle-y"
                    ></vue-feather>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4 pb-0">
          <h4 class="text-dark fs-18 fw-medium mb-3">Dropdown Default</h4>

          <form>
            <div class="form-group mb-4">
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Dropdown Default</h4>
          <img
            class="mb-3"
            src="../../../assets/images/text-tols.svg"
            alt="text-tols"
          />
          <textarea
            class="form-control"
            placeholder="Type your text "
            cols="30"
            rows="6"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">
            Switches toggle buttons
          </h4>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexSwitchCheckChecked"
            >
              Checked switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDisabled"
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexSwitchCheckDisabled"
            >
              Disabled switch checkbox input
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
            </label>
          </div>
        </div>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Sliders</h4>

          <label for="customRange1" class="form-label">Example Range</label>
          <input type="range" class="form-range" id="customRange1" />
        </div>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Drop zone</h4>

          <div class="form-group">
            <label class="label">Attached Files</label>
            <div
              class="product image form-control h-100 text-center position-relative py-5 px-5"
            >
              <div class="product-upload">
                <label for="file-upload" class="file-upload mb-0">
                  <img
                    src="../../../assets/images/upload-2.png"
                    alt="upload-2"
                  />
                </label>
                <input id="file-upload" type="file" />
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
  name: "FormComponents",
};
</script>