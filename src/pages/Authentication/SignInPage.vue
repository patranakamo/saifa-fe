<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <SignIn />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignIn from "../../components/Authentication/SignIn/SignIn.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SignInPage",
  components: {
    SignIn,
    MainFooter,
  },
});
</script>