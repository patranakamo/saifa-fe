<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <DefaultBadges />

      <OutlineBadges />

      <SoftBadges />

      <RoundOutlineBadges />

      <SoftRoundBadges />

      <IconBadges />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultBadges from "../../components/Components/Badges/DefaultBadges.vue";
import OutlineBadges from "../../components/Components/Badges/OutlineBadges.vue";
import SoftBadges from "../../components/Components/Badges/SoftBadges.vue";
import RoundOutlineBadges from "../../components/Components/Badges/RoundOutlineBadges.vue";
import SoftRoundBadges from "../../components/Components/Badges/SoftRoundBadges.vue";
import IconBadges from "../../components/Components/Badges/IconBadges.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "BadgesPage",
  components: {
    DefaultBadges,
    OutlineBadges,
    SoftBadges,
    RoundOutlineBadges,
    SoftRoundBadges,
    IconBadges,
    MainFooter,
  },
});
</script>