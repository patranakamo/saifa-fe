<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title mb-3">
        <h3 class="fw-medium fs-18 mb-0">Ticket Pricing</h3>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Ticket Type</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Paid ticket</option>
                <option value="1">UnPaid ticket</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Select Price</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select Price</option>
                <option value="1">$100</option>
                <option value="2">$200</option>
                <option value="3">$300</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Select Tags</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select Product tags</option>
                <option value="1">Ring</option>
                <option value="2">Headphone</option>
                <option value="3">Watch</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <div class="form-check c-form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault4"
                >
                  Show the number of available tickets
                </label>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card-title mb-4">
              <h3 class="fw-medium fs-18 mb-0">Privacy</h3>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <div class="form-check c-form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault5"
                >
                  On this event, our distribution partners, and search
                </label>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <div class="form-check c-form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault6"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault6"
                >
                  Only the individuals you select have access to it.
                </label>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-0 d-flex">
              <button type="submit" class="default-btn">Publish Event</button>
              <button type="submit" class="default-btn border-btn ms-3">
                Save Event
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketPricing",
};
</script>