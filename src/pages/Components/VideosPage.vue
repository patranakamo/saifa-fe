<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <div class="card border-0 box-shadow border-radius-10 mb-3">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Video Example 01</h4>

              <iframe
                width="100%"
                height="400"
                class="rounded-3"
                src="https://www.youtube.com/embed/6_nNipJ3r9E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="card border-0 box-shadow border-radius-10 mb-3">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Video Example 02</h4>

              <iframe
                width="100%"
                height="300"
                class="rounded-3"
                src="https://www.youtube.com/embed/6_nNipJ3r9E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card border-0 box-shadow border-radius-10 mb-3">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Video Example 03</h4>

              <iframe
                width="100%"
                height="500"
                class="rounded-3"
                src="https://www.youtube.com/embed/6_nNipJ3r9E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
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
  name: "VideosPage",
  components: {
    MainFooter,
  },
});
</script>