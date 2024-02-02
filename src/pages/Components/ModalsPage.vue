<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Basic Modal</h4>

          <ul class="ps-0 mb-0 list-unstyled">
            <li class="d-inline-block">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Basic Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Scrollable Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Vertically Centered
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                Extra Large
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                Large Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                Small Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
              >
                Full Screen Modal
              </button>
            </li>
          </ul>

          <!-- Basic Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Scrollable Modal -->
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="2Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="2Label">Modal Scrollable</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Iste illum modi vitae hic maiores earum
                    officia beatae iure facilis, quo ex facere laborum ducimus?
                    Iste consequuntur eos aperiam mollitia repellendus! Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium delectus beatae ducimus cum voluptate? Facere
                    quidem voluptas tempora consectetur nisi? Eos impedit
                    tempore eum quisquam explicabo nam nemo. Culpa, aperiam!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis at natus incidunt repellendus dolore voluptate nam
                    animi adipisci? Omnis hic quibusdam animi obcaecati
                    architecto vitae sequi quasi expedita nobis explicabo. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facere
                    perspiciatis magnam illum voluptatum quod praesentium
                    voluptas commodi! Ad quibusdam aperiam id. Obcaecati rem sit
                    aperiam eos veniam ratione est possimus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Hic ad ipsa earum
                    cupiditate, corrupti qui ratione consectetur quas, molestiae
                    excepturi nostrum nobis, voluptatem accusantium pariatur
                    iusto doloremque ab. Quia, totam! Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Ullam odio qui quo
                    consequuntur nemo quod, eius non ad est facilis fugiat ea
                    repellat sed ut veniam voluptas tempore optio nostrum? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Iste
                    illum modi vitae hic maiores earum officia beatae iure
                    facilis, quo ex facere laborum ducimus? Iste consequuntur
                    eos aperiam mollitia repellendus! Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Accusantium delectus
                    beatae ducimus cum voluptate? Facere quidem voluptas tempora
                    consectetur nisi? Eos impedit tempore eum quisquam explicabo
                    nam nemo. Culpa, aperiam! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Omnis at natus incidunt
                    repellendus dolore voluptate nam animi adipisci? Omnis hic
                    quibusdam animi obcaecati architecto vitae sequi quasi
                    expedita nobis explicabo. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facere perspiciatis magnam
                    illum voluptatum quod praesentium voluptas commodi! Ad
                    quibusdam aperiam id. Obcaecati rem sit aperiam eos veniam
                    ratione est possimus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Hic ad ipsa earum cupiditate, corrupti qui
                    ratione consectetur quas, molestiae excepturi nostrum nobis,
                    voluptatem accusantium pariatur iusto doloremque ab. Quia,
                    totam! Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Ullam odio qui quo consequuntur nemo quod, eius non ad
                    est facilis fugiat ea repellat sed ut veniam voluptas
                    tempore optio nostrum? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Iste illum modi vitae hic
                    maiores earum officia beatae iure facilis, quo ex facere
                    laborum ducimus? Iste consequuntur eos aperiam mollitia
                    repellendus! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Accusantium delectus beatae ducimus cum
                    voluptate? Facere quidem voluptas tempora consectetur nisi?
                    Eos impedit tempore eum quisquam explicabo nam nemo. Culpa,
                    aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Omnis at natus incidunt repellendus dolore voluptate
                    nam animi adipisci? Omnis hic quibusdam animi obcaecati
                    architecto vitae sequi quasi expedita nobis explicabo. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facere
                    perspiciatis magnam illum voluptatum quod praesentium
                    voluptas commodi! Ad quibusdam aperiam id. Obcaecati rem sit
                    aperiam eos veniam ratione est possimus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Hic ad ipsa earum
                    cupiditate, corrupti qui ratione consectetur quas, molestiae
                    excepturi nostrum nobis, voluptatem accusantium pariatur
                    iusto doloremque ab. Quia, totam!
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Vertically Centered -->
          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal3Label">
                    Modal Vertically Centered
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Extra Large -->
          <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            aria-labelledby="exampleModal4Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal4Label">
                    Modal Extra Large
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Large Modal -->
          <div
            class="modal fade"
            id="exampleModal5"
            tabindex="-1"
            aria-labelledby="exampleModal5Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal5Label">
                    Large Modal
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Small Modal -->
          <div
            class="modal fade"
            id="exampleModal6"
            tabindex="-1"
            aria-labelledby="exampleModal6Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal6Label">
                    Small Modal
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Small Modal -->
          <div
            class="modal fade"
            id="exampleModal7"
            tabindex="-1"
            aria-labelledby="exampleModal7Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModal7Label">
                    Full Screen Modal
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-body fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="text-dark fs-18 fw-medium mb-3">Color Modal</h4>

          <ul class="ps-0 mb-0 list-unstyled">
            <li class="d-inline-block">
              <button
                type="button"
                class="default-btn bg-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
              >
                Primary Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn bg-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
              >
                Success Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn bg-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
              >
                Danger Modal
              </button>
            </li>
            <li class="d-inline-block ms-sm-3 mb-3 mb-lg-0">
              <button
                type="button"
                class="default-btn bg-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
              >
                Warning Modal
              </button>
            </li>
          </ul>

          <!-- Basic Modal -->
          <div
            class="modal fade"
            id="exampleModal8"
            tabindex="-1"
            aria-labelledby="exampleModal8Label"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content bg-primary">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 text-white"
                    id="exampleModal8Label"
                  >
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-white fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Scrollable Modal -->
          <div
            class="modal fade"
            id="exampleModal9"
            tabindex="-1"
            aria-labelledby="exampleModal9Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content bg-success">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 text-white"
                    id="exampleModal9Label"
                  >
                    Modal Scrollable
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-white fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Iste illum modi vitae hic maiores earum
                    officia beatae iure facilis, quo ex facere laborum ducimus?
                    Iste consequuntur eos aperiam mollitia repellendus! Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium delectus beatae ducimus cum voluptate? Facere
                    quidem voluptas tempora consectetur nisi? Eos impedit
                    tempore eum quisquam explicabo nam nemo. Culpa, aperiam!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis at natus incidunt repellendus dolore voluptate nam
                    animi adipisci? Omnis hic quibusdam animi obcaecati
                    architecto vitae sequi quasi expedita nobis explicabo. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facere
                    perspiciatis magnam illum voluptatum quod praesentium
                    voluptas commodi! Ad quibusdam aperiam id. Obcaecati rem sit
                    aperiam eos veniam ratione est possimus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Hic ad ipsa earum
                    cupiditate, corrupti qui ratione consectetur quas, molestiae
                    excepturi nostrum nobis, voluptatem accusantium pariatur
                    iusto doloremque ab. Quia, totam! Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Ullam odio qui quo
                    consequuntur nemo quod, eius non ad est facilis fugiat ea
                    repellat sed ut veniam voluptas tempore optio nostrum? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Iste
                    illum modi vitae hic maiores earum officia beatae iure
                    facilis, quo ex facere laborum ducimus? Iste consequuntur
                    eos aperiam mollitia repellendus! Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Accusantium delectus
                    beatae ducimus cum voluptate? Facere quidem voluptas tempora
                    consectetur nisi? Eos impedit tempore eum quisquam explicabo
                    nam nemo. Culpa, aperiam! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Omnis at natus incidunt
                    repellendus dolore voluptate nam animi adipisci? Omnis hic
                    quibusdam animi obcaecati architecto vitae sequi quasi
                    expedita nobis explicabo. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facere perspiciatis magnam
                    illum voluptatum quod praesentium voluptas commodi! Ad
                    quibusdam aperiam id. Obcaecati rem sit aperiam eos veniam
                    ratione est possimus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Hic ad ipsa earum cupiditate, corrupti qui
                    ratione consectetur quas, molestiae excepturi nostrum nobis,
                    voluptatem accusantium pariatur iusto doloremque ab. Quia,
                    totam! Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Ullam odio qui quo consequuntur nemo quod, eius non ad
                    est facilis fugiat ea repellat sed ut veniam voluptas
                    tempore optio nostrum? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Iste illum modi vitae hic
                    maiores earum officia beatae iure facilis, quo ex facere
                    laborum ducimus? Iste consequuntur eos aperiam mollitia
                    repellendus! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Accusantium delectus beatae ducimus cum
                    voluptate? Facere quidem voluptas tempora consectetur nisi?
                    Eos impedit tempore eum quisquam explicabo nam nemo. Culpa,
                    aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Omnis at natus incidunt repellendus dolore voluptate
                    nam animi adipisci? Omnis hic quibusdam animi obcaecati
                    architecto vitae sequi quasi expedita nobis explicabo. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facere
                    perspiciatis magnam illum voluptatum quod praesentium
                    voluptas commodi! Ad quibusdam aperiam id. Obcaecati rem sit
                    aperiam eos veniam ratione est possimus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Hic ad ipsa earum
                    cupiditate, corrupti qui ratione consectetur quas, molestiae
                    excepturi nostrum nobis, voluptatem accusantium pariatur
                    iusto doloremque ab. Quia, totam!
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Vertically Centered -->
          <div
            class="modal fade"
            id="exampleModal10"
            tabindex="-1"
            aria-labelledby="exampleModal10Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content bg-danger">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 text-white"
                    id="exampleModal10Label"
                  >
                    Modal Vertically Centered
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-white fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Extra Large -->
          <div
            class="modal fade"
            id="exampleModal11"
            tabindex="-1"
            aria-labelledby="exampleModal11Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content bg-warning">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 text-white"
                    id="exampleModal11Label"
                  >
                    Modal Extra Large
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="text-white fs-14">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam odio qui quo consequuntur nemo quod, eius non ad est
                    facilis fugiat ea repellat sed ut veniam voluptas tempore
                    optio nostrum?
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
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
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ModalsPage",
  components: {
    MainFooter,
  },
});
</script>