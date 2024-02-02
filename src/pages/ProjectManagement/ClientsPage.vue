<template>
  <div class="container-fluid">
    <div class="inner-main-content client-area">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Clients List</h3>
      </div>

      <ClientsList />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientsList from "../../components/ProjectManagement/Clients/ClientsList.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ClientsPage",
  components: {
    ClientsList,
    MainFooter,
  },
});
</script>