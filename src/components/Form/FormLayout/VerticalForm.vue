<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Vertical Form</h4>
      <form>
        <div class="form-group mb-4">
          <label class="label">First Name</label>
          <input type="text" class="form-control" placeholder="Enter name" />
        </div>
        <div class="form-group mb-4">
          <label class="label">Email Address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email address"
          />
        </div>
        <div class="form-group mb-4">
          <label class="label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="************"
          />
        </div>
        <div class="form-group mb-0 d-flex">
          <button type="submit" class="default-btn">Save</button>
          <button type="submit" class="default-btn border-btn ms-3">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormLayout",
};
</script>