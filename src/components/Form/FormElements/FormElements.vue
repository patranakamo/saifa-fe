<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Form Group in Grid</h4>
      <form>
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Four Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Four Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Four Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Four Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">Three Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">Three Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">Three Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Two Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Two Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">One Column</label>
              <input type="text" class="form-control" placeholder="Your text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-xxl-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Basic Inputs</h4>
          <form>
            <div class="form-group mb-4">
              <label class="label">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Email Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter address"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="+1 444 222 5580"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">URL</label>
              <input
                type="text"
                class="form-control"
                placeholder="www.example.com"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Password</label>
              <div class="password-wrapper position-relative">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  value="password"
                />
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
            <div class="form-group mb-4">
              <label class="label">Number</label>
              <input type="number" class="form-control" placeholder="123" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Data</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Month</label>
              <input
                type="month"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Time</label>
              <input
                type="time"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Checkboxes</h4>

          <div class="c-form-check form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexCheckDefault"
            >
              Default checkbox
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexCheckChecked"
            >
              Checked checkbox
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexCheckIndeterminate"
            >
              Indeterminate checkbox
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDisabled"
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexCheckDisabled"
            >
              Disabled checkbox
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexCheckCheckedDisabled"
            >
              Disabled checked checkbox
            </label>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Radios</h4>

          <div class="c-form-check form-check">
            <input
              class="form-check-input rounded-circle"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexRadioDefault1"
            >
              Default radio
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input rounded-circle"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexRadioDefault2"
            >
              Default checked radio
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input rounded-circle"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexRadioDisabled"
            >
              Disabled radio
            </label>
          </div>
          <div class="c-form-check form-check">
            <input
              class="form-check-input rounded-circle"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioCheckedDisabled"
              checked
              disabled
            />
            <label
              class="form-check-label fs-14 text-body"
              for="flexRadioCheckedDisabled"
            >
              Disabled checked radio
            </label>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Sizes</h4>
          <div class="form-group input-group-lg mb-4">
            <label class="label">Large Input</label>
            <input
              type="text"
              class="form-control h-auto"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <div class="form-group mb-4">
            <label class="label">Default Input</label>
            <input
              type="text"
              class="form-control h-auto"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="form-group input-group-sm">
            <label class="label">Small Input</label>
            <input
              type="text"
              class="form-control h-auto"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
      </div>
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Check Inline</h4>

          <div class="d-flex">
            <div class="c-form-check form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
              />
              <label
                class="form-check-label fs-14 text-body ms-0"
                for="flexCheckDefault1"
                style="position: relative; top: -2px"
              >
                Item 01
              </label>
            </div>
            <div class="c-form-check form-check ms-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
              />
              <label
                class="form-check-label fs-14 text-body ms-0"
                for="flexCheckDefault2"
                style="position: relative; top: -2px"
              >
                Item 02
              </label>
            </div>
            <div class="c-form-check form-check ms-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
              />
              <label
                class="form-check-label fs-14 text-body ms-0"
                for="flexCheckDefault3"
                style="position: relative; top: -2px"
              >
                Item 03
              </label>
            </div>
            <div class="c-form-check form-check ms-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault4"
              />
              <label
                class="form-check-label fs-14 text-body ms-0"
                style="position: relative; top: -2px"
                for="flexCheckDefault4"
              >
                Item 04
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormElements",
};
</script>