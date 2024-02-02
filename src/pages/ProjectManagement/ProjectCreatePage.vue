<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ProjectCreate />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCreate from "../../components/ProjectManagement/ProjectCreate/ProjectCreate.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ProjectCreatePage",
  components: {
    ProjectCreate,
    MainFooter,
  },
});
</script>