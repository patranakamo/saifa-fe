<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <h4 class="text-dark fs-18 fw-medium mb-3">Leaflet Map</h4>

      <LeafletMaps />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeafletMaps from "../../components/LeafletMaps/LeafletMaps.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "LeafletMapPage",
  components: {
    LeafletMaps,
    MainFooter,
  },
});
</script>