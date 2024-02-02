<template>
  <div class="container-fluid">
    <div class="inner-main-content chat-grid">
      <ChatContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatContent from "../components/Chat/ChatContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    ChatContent,
    MainFooter,
  },
});
</script>