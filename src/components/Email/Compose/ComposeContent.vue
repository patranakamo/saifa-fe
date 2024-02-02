<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-md-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="mb-4">
              <a
                href="#"
                class="default-btn d-block w-100 text-center text-decoration-none text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Compose
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather
                    type="inbox"
                    style="width: 20px; stroke: #5c61f2"
                  ></vue-feather>
                  <span class="ms-2 text-dark">Inbox</span>
                </div>
                <span class="text-body">5</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="star" style="width: 20px"></vue-feather>
                <span class="ms-2">Starred</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="clock" style="width: 20px"></vue-feather>
                <span class="ms-2">Snoozed</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="send" style="width: 20px"></vue-feather>
                <span class="ms-2">Sent</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="file" style="width: 20px"></vue-feather>
                <span class="ms-2">Drafts</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather
                    type="alert-octagon"
                    style="width: 20px"
                  ></vue-feather>
                  <span class="ms-2">Spam</span>
                </div>

                <span class="text-body">10</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none justify-content-between"
              >
                <div class="icon">
                  <vue-feather type="trash" style="width: 20px"></vue-feather>
                  <span class="ms-2">Trash</span>
                </div>

                <span class="text-body">12</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="bookmark" style="width: 20px"></vue-feather>
                <span class="ms-2">Important</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="mail" style="width: 20px"></vue-feather>
                <span class="ms-2">All Mail</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="user" style="width: 20px"></vue-feather>
                <span class="ms-2">Personal</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="briefcase" style="width: 20px"></vue-feather>
                <span class="ms-2">Company</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather
                  type="dollar-sign"
                  style="width: 20px"
                ></vue-feather>
                <span class="ms-2">Wallet Balance</span>
              </a>
            </li>
            <li class="mb-4">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="users" style="width: 20px"></vue-feather>
                <span class="ms-2">Friends</span>
              </a>
            </li>
            <li class="mb-0">
              <a
                href="#"
                class="d-flex align-items-center fw-medium fs-16 text-decoration-none"
              >
                <vue-feather type="plus" style="width: 20px"></vue-feather>
                <span class="ms-2">Create New Lable</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-xxl-9 col-md-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">New Message</h3>

            <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center">
              <li class="me-3">
                <a href="#">
                  <vue-feather type="minus" style="width: 20px"></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a href="#">
                  <vue-feather type="x" style="width: 20px"></vue-feather>
                </a>
              </li>
            </ul>
          </div>

          <form>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">To</label>
                  <input
                    type="mail"
                    class="form-control"
                    placeholder="gilliam@gmail.com"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Cc</label>
                  <input
                    type="mail"
                    class="form-control"
                    placeholder="thomas@gmail.com"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Bcc</label>
                  <input
                    type="mail"
                    class="form-control"
                    placeholder="gilliam@gmail.com"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Subject</label>
                  <textarea
                    cols="30"
                    rows="6"
                    class="form-control"
                    placeholder="Write your note..."
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group d-flex align-items-center">
                  <button type="submit" class="default-btn">Send</button>
                  <button type="submit" class="bg-transparent border-0 ms-3">
                    <vue-feather
                      type="image"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                  <button type="submit" class="bg-transparent border-0 ms-2">
                    <vue-feather
                      type="paperclip"
                      style="width: 20px; stroke: #919aa3"
                    ></vue-feather>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComposeContent",
};
</script>

<style lang="scss" scoped>
ul {
  li {
    a {
      .icon {
        i {
          position: relative;
          top: 4px;
        }
      }
    }
  }
}
</style>