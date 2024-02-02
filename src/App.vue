<template>
<!--  <PreLoader v-if="isLoading" />-->

  <MainHeader />
<!-- just for test see UI <ToastJa message="sadf" status="fail"></ToastJa>-->
  <div
    :class="[
      'main-content expanded js-container',
      { collapsed: stateStoreInstance.open },
    ]"
  >
    <MainSidebar />

    <router-view />
    <SettingsOption />
    <SettingsModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PreLoader from "./components/Layouts/PreLoader.vue";

import MainHeader from "./components/Layouts/MainHeader.vue";
import MainSidebar from "./components/Layouts/MainSidebar.vue";
import SettingsOption from "./components/Layouts/SettingsOption.vue";
import SettingsModal from "./components/Layouts/SettingsModal.vue";
import stateStore from "./utils/store";
// import ToastJa from "@/components/ToastJa/ToastJa.vue";

export default defineComponent({
  name: "App",
  components: {
    // PreLoader,
    //ToastJa,
    MainHeader,
    MainSidebar,
    SettingsOption,
    SettingsModal,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
  },
  setup() {
    const stateStoreInstance = stateStore;
    return { stateStoreInstance };
  },
});
</script>