<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <IconContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconContent from "../components/Icon/IconContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "IconPage",
  components: {
    IconContent,
    MainFooter,
  },
});
</script>