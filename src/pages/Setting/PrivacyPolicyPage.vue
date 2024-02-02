<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <PrivacyPolicy />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrivacyPolicy from "../../components/Settings/PrivacyPolicy/PrivacyPolicy.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "PrivacyPolicyPage",
  components: {
    PrivacyPolicy,
    MainFooter,
  },
});
</script>