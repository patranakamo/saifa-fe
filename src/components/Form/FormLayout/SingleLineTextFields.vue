<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <h4 class="text-dark fs-18 fw-medium mb-3">Single Line Text Fields</h4>

      <div class="row mb-4">
        <label class="col-sm-2 col-form-label label">First Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Enter name" />
        </div>
      </div>
      <div class="row mb-4">
        <label class="col-sm-2 col-form-label label">Email Address</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div class="row mb-4">
        <label class="col-sm-2 col-form-label label">Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="************"
          />
        </div>
      </div>
      <div class="row mb-4">
        <label class="col-sm-2 col-form-label label">Someinformation</label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
            placeholder="Write some information"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div class="row mb-4">
        <label class="col-sm-2 col-form-label label"></label>
        <div class="col-sm-10">
          <div class="form-group mb-0 d-flex">
            <button type="submit" class="default-btn">Save</button>
            <button type="submit" class="default-btn border-btn ms-3">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleLineTextFields",
};
</script>