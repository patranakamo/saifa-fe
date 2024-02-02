<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4 pb-0">
      <h4 class="text-dark fs-18 fw-medium mb-3">Supported elements</h4>

      <form class="was-validated">
        <div class="mb-3">
          <label for="validationTextarea" class="form-label label"
            >Text area</label
          >
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Required example textarea"
            rows="4"
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>

        <div class="form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="validationFormCheck1"
            required
          />
          <label class="form-check-label" for="validationFormCheck1"
            >Check this checkbox</label
          >
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="mb-3">
          <select
            class="form-select form-control"
            required
            aria-label="select example"
          >
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid select feedback</div>
        </div>

        <div class="mb-3">
          <button class="default-btn" type="submit" disabled>
            Submit form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportedElements",
};
</script>