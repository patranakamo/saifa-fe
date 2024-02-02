<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Project Create</h3>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Project Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Write your project name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Write your project name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">End Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Write your project name"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Project Description</label>
              <textarea
                class="form-control"
                cols="30"
                rows="6"
                placeholder="Write your project description"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Budget</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter rate"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Priority Status</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Priority</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Categories</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">E-Commerce</option>
                <option value="2">CRM</option>
                <option value="3">Analytics</option>
                <option value="4">Project Management</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Members</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Juhon Dew</option>
                <option value="1">Stiven Dew</option>
                <option value="2">Karlino</option>
                <option value="3">Zeck</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Project Lead</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Stiven Dew</option>
                <option value="2">Karlino</option>
                <option value="3">Zeck</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Project Tags</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">E-Commerce</option>
                <option value="2">CRM</option>
                <option value="3">Analytics</option>
                <option value="4">Project Management</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <button type="submit" class="default-btn">
                + Create Project
              </button>
              <button type="submit" class="default-btn cancel ms-3">
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
  name: "ProjectCreate",
};
</script>