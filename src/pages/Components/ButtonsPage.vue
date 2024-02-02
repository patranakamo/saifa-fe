<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <DefaultButtons />

      <OutlineButtons />

      <SoftButtons />

      <IconButtons />

      <RoundedButtons />

      <BlockButtons />

      <ButtonsToolbar />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultButtons from "../../components/Components/Buttons/DefaultButtons.vue";
import OutlineButtons from "../../components/Components/Buttons/OutlineButtons.vue";
import SoftButtons from "../../components/Components/Buttons/SoftButtons.vue";
import IconButtons from "../../components/Components/Buttons/IconButtons.vue";
import RoundedButtons from "../../components/Components/Buttons/RoundedButtons.vue";
import BlockButtons from "../../components/Components/Buttons/BlockButtons.vue";
import ButtonsToolbar from "../../components/Components/Buttons/ButtonsToolbar.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ButtonsPage",
  components: {
    DefaultButtons,
    OutlineButtons,
    SoftButtons,
    IconButtons,
    RoundedButtons,
    BlockButtons,
    ButtonsToolbar,
    MainFooter,
  },
});
</script>