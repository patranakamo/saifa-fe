<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Grid Rows</h4>
      <form>
        <div class="row">
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">Email Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">Company</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter city name"
              />
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="form-group mb-4">
              <label class="label">Country</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter country name"
              />
            </div>
          </div>
          <div class="col-xxl-12">
            <div class="form-group mb-0 d-flex">
              <button type="submit" class="default-btn">Save</button>
              <button type="submit" class="default-btn border-btn ms-3">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridRows",
};
</script>