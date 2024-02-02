<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Kanban Board</h3>
      </div>

      <KanbanBoard />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KanbanBoard from "../../components/ProjectManagement/KanbanBoard/KanbanBoard.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "KanbanBoardPage",
  components: {
    KanbanBoard,
    MainFooter,
  },
});
</script>