<template>
  <div class="row">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="col-lg-6 col-sm-6"
    >
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div class="card-title">
            <h4 class="text-dark fs-18 fw-medium mb-3">{{ section.title }}</h4>
          </div>

          <div class="ratings" :dir="section.direction">
            <span
              v-for="(rating, ratingIndex) in section.ratings"
              :key="ratingIndex"
              @click="setActiveRating(section, ratingIndex)"
              :class="[
                'rating',
                { active: ratingIndex <= section.activeRating },
              ]"
            >
              <i :class="rating.iconClass"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RatingsContent",
  data() {
    return {
      sections: [
        {
          title: "Default Rating",
          direction: "ltr",
          ratings: [
            { iconClass: "ri-star-fill" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
          ],
          activeRating: -1,
        },
        {
          title: "Progressive Rating",
          direction: "ltr",
          ratings: [
            { iconClass: "ri-star-line" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
          ],
          activeRating: -1,
        },
        {
          title: "JavaScript Interaction",
          direction: "ltr",
          ratings: [
            { iconClass: "ri-heart-fill" },
            { iconClass: "ri-heart-fill ms-2" },
            { iconClass: "ri-heart-fill ms-2" },
            { iconClass: "ri-heart-fill ms-2" },
            { iconClass: "ri-heart-fill ms-2" },
          ],
          activeRating: -1,
        },
        {
          title: "Setting and Getting Values",
          direction: "ltr",
          ratings: [
            { iconClass: "ri-heart-line" },
            { iconClass: "ri-heart-line ms-2" },
            { iconClass: "ri-heart-line ms-2" },
            { iconClass: "ri-heart-line ms-2" },
            { iconClass: "ri-heart-line ms-2" },
          ],
          activeRating: -1,
        },
        {
          title: "RTL Support",
          direction: "rtl",
          ratings: [
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill ms-2" },
            { iconClass: "ri-star-fill" },
          ],
          activeRating: -1,
        },
        {
          title: "Read-only and Preset Value",
          direction: "rtl",
          ratings: [
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line ms-2" },
            { iconClass: "ri-star-line" },
          ],
          activeRating: -1,
        },
      ],
    };
  },
  methods: {
    setActiveRating(section: { activeRating: unknown }, ratingIndex: unknown) {
      section.activeRating = ratingIndex;
    },
  },
});
</script>