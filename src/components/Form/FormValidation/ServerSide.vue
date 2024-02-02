<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4 pb-0">
      <h4 class="text-dark fs-18 fw-medium mb-3">Server Side</h4>

      <form>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group mb-4">
              <label for="validationServer01" class="form-label label"
                >First Name</label
              >
              <input
                type="text"
                class="form-control is-valid"
                style="border-color: #2ed47e"
                id="validationServer01"
                value="Enter first name"
                required
              />
              <div class="valid-feedback fs-14 text-success">Looks good!</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group mb-4">
              <label for="validationServer02" class="form-label label"
                >Last name</label
              >
              <input
                type="text"
                class="form-control is-valid"
                style="border-color: #2ed47e"
                id="validationServer02"
                value="Enter last name"
                required
              />
              <div class="valid-feedback fs-14 text-success">Looks good!</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group mb-4">
              <label for="validationServerUsername" class="form-label label"
                >Username</label
              >
              <div class="input-group has-validation">
                <input
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  value="Enter username"
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="validationServer03" class="form-label label"
                >City</label
              >
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                value="Enter your city"
                required
              />
              <div id="validationServer03Feedback" class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group mb-4">
              <label for="validationServer04" class="form-label label"
                >State</label
              >
              <select
                class="form-select form-control is-invalid"
                id="validationServer04"
                aria-describedby="validationServer04Feedback"
                required
              >
                <option selected disabled value="">Choose...</option>
                <option>UK</option>
              </select>
              <div id="validationServer04Feedback" class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group mb-4">
              <label for="validationServer05" class="form-label label"
                >Zip</label
              >
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServer05"
                aria-describedby="validationServer05Feedback"
                required
              />
              <div id="validationServer05Feedback" class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-4">
              <div class="form-check">
                <input
                  class="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-4">
              <div class="col-12">
                <button class="default-btn" type="submit">Submit form</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerSide",
};
</script>