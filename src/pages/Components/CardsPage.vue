<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <CardWithImages />

      <HorizontalCardWithImages />

      <CardWithText />

      <CardBackgroundStyles />

      <CardBorderStyles />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardWithImages from "../../components/Components/Cards/CardWithImages.vue";
import HorizontalCardWithImages from "../../components/Components/Cards/HorizontalCardWithImages.vue";
import CardWithText from "../../components/Components/Cards/CardWithText.vue";
import CardBackgroundStyles from "../../components/Components/Cards/CardBackgroundStyles.vue";
import CardBorderStyles from "../../components/Components/Cards/CardBorderStyles.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CardsPage",
  components: {
    CardWithImages,
    HorizontalCardWithImages,
    CardWithText,
    CardBackgroundStyles,
    CardBorderStyles,
    MainFooter,
  },
});
</script>