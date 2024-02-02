<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <ReadEmail />

      <!-- Compose Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-18 text-dark" id="exampleModalLabel">
                New Message
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card-body p-0">
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
                        <button
                          type="submit"
                          class="bg-transparent border-0 ms-3"
                        >
                          <vue-feather
                            type="image"
                            style="width: 20px; stroke: #919aa3"
                          ></vue-feather>
                        </button>
                        <button
                          type="submit"
                          class="bg-transparent border-0 ms-2"
                        >
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
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReadEmail from "../../components/Email/ReadEmail/ReadEmail.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ReadEmailPage",
  components: {
    ReadEmail,
    MainFooter,
  },
});
</script>