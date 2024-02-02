<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <AllProjects />

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New Project
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
                  <label class="label">Project Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your project name"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Start Date</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Write your project name"
                  />
                </div>
              </div>
              <div class="col-lg-12">
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
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Budget</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter rate"
                  />
                </div>
              </div>
              <div class="col-lg-12">
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
              <div class="col-lg-12">
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
              <div class="col-lg-12">
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
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Project Lead</label>
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
              <div class="col-lg-12">
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
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllProjects from "../../components/ProjectManagement/ProjectList/AllProjects.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProjectListPage",
  components: {
    AllProjects,
    MainFooter,
  },
});
</script>