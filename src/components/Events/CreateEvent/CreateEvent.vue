<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="card-title mb-3">
        <h3 class="fw-medium fs-18 mb-0">Create an Event</h3>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Event Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Event name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Type</label>
              <input
                type="text"
                class="form-control"
                placeholder="Business event"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Select topic</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select category</option>
                <option value="1">Family Event</option>
                <option value="2">Office Evenet</option>
                <option value="3">Colege Evenet</option>
              </select>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4 d-flex align-items-center">
              <div class="form-check c-form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault1"
                />
                <label
                  class="form-check-label text-body fs-14"
                  for="flexCheckDefault1"
                >
                  Online
                </label>
              </div>
              <div class="form-check c-form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label text-body fs-14"
                  for="flexCheckDefault2"
                >
                  Offline
                </label>
              </div>
              <div class="form-check c-form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                />
                <label
                  class="form-check-label text-body fs-14"
                  for="flexCheckDefault3"
                >
                  Both
                </label>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Venue</label>
              <input
                type="text"
                class="form-control"
                placeholder="Event venue"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Country</label>
              <input
                type="text"
                class="form-control"
                placeholder="Select country"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event State</label>
              <input
                type="text"
                class="form-control"
                placeholder="Select state"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Select city"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Start Date</label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Time</label>
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event End Date</label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Time</label>
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Registration Deadline</label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label">Event Organizers</label>
              <input
                type="text"
                class="form-control"
                placeholder="Select name"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Event Sponsors</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Event Details</label>
              <textarea
                class="form-control"
                placeholder="Write event details here..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4 border p-1 d-inline-block">
              <img
                src="../../../assets/images/products/product-1.jpg"
                alt="product-1"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label">Attached Files</label>
              <div
                class="product image form-control h-100 text-center position-relative py-5 px-5"
              >
                <div class="product-upload">
                  <label for="file-upload" class="file-upload mb-0">
                    <img
                      src="../../../assets/images/upload-2.png"
                      alt="upload-2"
                    />
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-group">
              <button type="submit" class="default-btn">Add New Event</button>
              <button type="submit" class="default-btn border-btn ms-3">
                Cancel
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
  name: "CreateEvent",
};
</script>