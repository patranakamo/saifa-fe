<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ConnectionsContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConnectionsContent from "../../components/Settings/Connections/ConnectionsContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ConnectionsPage",
  components: {
    ConnectionsContent,
    MainFooter,
  },
});
</script>