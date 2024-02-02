<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body px-4 py-5">
      <div class="text-center">
        <img
          src="../../assets/images/starter-img.png"
          class="mb-4"
          alt="starter-img"
        />
        <h3 class="fs-30 fw-medium mb-4">Create Something Beautiful</h3>
        <router-link
          to="/pricing"
          class="default-btn text-decoration-none text-white"
        >
          Getting Started
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarterContent",
};
</script>