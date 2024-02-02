<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <StarterContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarterContent from "../components/Starter/StarterContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "StarterPage",
  components: {
    StarterContent,
    MainFooter,
  },
});
</script>