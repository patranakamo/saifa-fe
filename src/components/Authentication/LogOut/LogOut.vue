<template>
  <div class="h-80vh">
    <div class="d-table">
      <div class="d-table-cell">
        <div
          class="card border-0 box-shadow border-radius-10 mb-4 w-100"
          style="max-width: 500px; margin: auto"
        >
          <div class="card-body p-30">
            <div class="text-center mb-4">
              <h4 class="fs-20 fw-semibold mb-2">Welcome To CallCraft</h4>
              <p class="fs-14 text-body mb-4">
                Thank you for using
                <span class="text-primary">Call Craft</span> system.
              </p>
              <img
                class="mb-3"
                src="../../../assets/images/logo.png"
                alt="Vaxo-logo"
              />
              <h4 class="fs-18 fw-semibold mb-2">You Are Logged out</h4>
            </div>
            <form>
              <div class="form-group">
                <router-link
                  to="/sign-in"
                  class="default-btn w-100 d-block text-center text-white text-decoration-none"
                >
                  Sign In
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogOut",
};
</script>