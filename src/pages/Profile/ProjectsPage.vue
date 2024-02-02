<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProjectsContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsContent from "../../components/Profile/Projects/ProjectsContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    ProjectsContent,
    MainFooter,
  },
});
</script>