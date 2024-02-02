<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <MembersContent />

      <!-- Start Default Offcanvas From Area -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title fs-18" id="offcanvasRightLabel">
            Add New A Members
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
                  <label class="label">Members Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your members name"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Write your email"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write Phone location"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Location</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Write your location"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Joining Date</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Photo</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Write your photo"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Create Members
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- End Default Offcanvas From Area -->

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MembersContent from "../components/Members/MembersContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "MembersPage",
  components: {
    MembersContent,
    MainFooter,
  },
});
</script>