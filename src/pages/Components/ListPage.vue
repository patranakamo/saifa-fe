<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Simple List</h4>

              <ul class="list-group rounded-0 border-color">
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Header
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  News Feed
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Message
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Event
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Pages
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Footer
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Active List</h4>

              <ul class="list-group rounded-0 border-color">
                <li
                  class="list-group-item fs-14 text-white fw-medium border-color py-3 active bg-primary"
                >
                  Header
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  News Feed
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Message
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Event
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Pages
                </li>
                <li
                  class="list-group-item fs-14 text-dark fw-medium border-color py-3"
                >
                  Footer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ListPage",
  components: {
    MainFooter,
  },
});
</script>