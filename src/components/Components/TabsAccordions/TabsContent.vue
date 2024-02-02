<template>
  <div class="card border-0 box-shadow border-radius-10 mb-3">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Tabs Example</h4>

      <ul
        class="nav nav-tabs user-tabs border-0 mb-4"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 text-body fs-14 active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 text-body fs-14"
            id="teams-tab"
            data-bs-toggle="tab"
            data-bs-target="#teams-tab-pane"
            type="button"
            role="tab"
            aria-controls="teams-tab-pane"
            aria-selected="false"
          >
            Teams
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border-0 text-body fs-14"
            id="projects-tab"
            data-bs-toggle="tab"
            data-bs-target="#projects-tab-pane"
            type="button"
            role="tab"
            aria-controls="projects-tab-pane"
            aria-selected="false"
          >
            Projects
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <p class="text-body fs-14">
            Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Curabitur aliquet quam id dui posuere blandit. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Cras
            ultricies ligula sed magna dictum porta. Vivamus suscipit tortor
            eget felis porttitor volutpat. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada
            feugiat. Curabitur aliquet quam id dui posuere blandit. Nulla
            porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Nulla quis
            lorem ut libero malesuada feugiat. Nulla porttitor accumsan
            tincidunt. Donec sollicitudin molestie malesuada. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula.
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="teams-tab-pane"
          role="tabpanel"
          aria-labelledby="teams-tab"
          tabindex="0"
        >
          <p class="text-body fs-14">
            Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Curabitur aliquet quam id dui posuere blandit. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Cras
            ultricies ligula sed magna dictum porta. Vivamus suscipit tortor
            eget felis porttitor volutpat. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada
            feugiat. Curabitur aliquet quam id dui posuere blandit. Nulla
            porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Nulla quis
            lorem ut libero malesuada feugiat. Nulla porttitor accumsan
            tincidunt. Donec sollicitudin molestie malesuada. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula.
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="projects-tab-pane"
          role="tabpanel"
          aria-labelledby="projects-tab"
          tabindex="0"
        >
          <p class="text-body fs-14">
            Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Curabitur aliquet quam id dui posuere blandit. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Cras
            ultricies ligula sed magna dictum porta. Vivamus suscipit tortor
            eget felis porttitor volutpat. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada
            feugiat. Curabitur aliquet quam id dui posuere blandit. Nulla
            porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Nulla quis
            lorem ut libero malesuada feugiat. Nulla porttitor accumsan
            tincidunt. Donec sollicitudin molestie malesuada. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsContent",
};
</script>