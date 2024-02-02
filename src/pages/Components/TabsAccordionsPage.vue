<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <TabsContent />

      <AccordionContent />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabsContent from "../../components/Components/TabsAccordions/TabsContent.vue";
import AccordionContent from "../../components/Components/TabsAccordions/AccordionContent.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "TabsAccordionsPage",
  components: {
    TabsContent,
    AccordionContent,
    MainFooter,
  },
});
</script>