<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4 pb-0">
      <h4 class="text-dark fs-18 fw-medium mb-3">Custom Styles</h4>

      <form>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter first name"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label">Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your city"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Country</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select country</option>
                <option value="1">United Ctates</option>
                <option value="2">Canada</option>
                <option value="3">Arabic</option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group mb-4">
              <label class="label">Zip</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter zip code"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
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
                  Agree to terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <button type="submit" class="default-btn">Submit Form</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomStyles",
};
</script>