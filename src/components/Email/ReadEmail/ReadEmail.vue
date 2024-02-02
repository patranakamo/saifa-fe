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
            class="card-title d-sm-flex d-md-flex d-lg-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-sm-0 mb-md-0 mb-lg-0">
              Tell us what you think and help us to improve
            </h3>

            <ul class="list-unstyled ps-0 mb-0 d-flex align-items-center">
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Reload "
                >
                  <vue-feather
                    type="rotate-cw"
                    style="width: 20px"
                  ></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Print"
                >
                  <vue-feather type="printer" style="width: 20px"></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Info"
                >
                  <vue-feather
                    type="alert-octagon"
                    style="width: 20px"
                  ></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Delete"
                >
                  <vue-feather type="trash" style="width: 20px"></vue-feather>
                </a>
              </li>
              <li class="me-3">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="d-sm-flex d-md-flex d-lg-flex justify-content-between align-items-center mt-4 mb-4"
          >
            <div class="d-flex align-items-center">
              <img
                src="../../../assets/images/user/user-26.png"
                alt="user-26"
              />
              <div class="ms-3">
                <h4 class="fw-medium fs-18 mb-0">Teresa Gilliam</h4>
                <p class="text-dark mb-0">
                  From: <span class="text-body">david@gmail.com</span>
                </p>
              </div>
            </div>
            <p class="text-body mt-3 mt-sm-0 mt-md-0 mt-lg-0">
              01/03/2023 3:07 AM
            </p>
          </div>

          <span class="text-body d-block mb-4">Hello Teresa Gilliam,</span>
          <p class="text-body">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Donec sollicitudin molestie malesuada.
            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui.
          </p>
          <p class="text-body">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Curabitur aliquet quam id dui posuere blandit. Curabitur non
            nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies
            ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
            Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
            libero malesuada feugiat. Proin eget tortor risus. Curabitur non
            nulla sit amet nisl tempus convallis quis ac lectus. Curabitur
            aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui
            posuere blandit. Quisque velit nisi, pretium ut lacinia in,
            elementum.
          </p>
          <ul class="text-body list-unstyled ps-3">
            <li class="mb-3">Nulla quis lorem ut libero malesuada feugiat.</li>
            <li class="mb-3">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi.
            </li>
            <li class="mb-3">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </li>
            <li>
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id
              orci porta dapibus.
            </li>
          </ul>
          <p class="text-body">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Donec sollicitudin molestie malesuada.
            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem.
          </p>
          <p class="text-body">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Donec sollicitudin molestie malesuada.
            Pellentesque in ipsum id orci porta dapibus.
          </p>
          <p class="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            leo sem, vestibulum a tortor id, tristique laoreet neque. Integer
            volutpat dictum ipsum at volutpat. Nullam rutrum neque ut vestibulum
            placerat. Pellentesque iaculis est at risus blandit convallis nec
            vel dui. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nunc ultrices sed ipsum id accumsan.
            Praesent sit amet urna vel mi molestie tempus sed eu nunc. Quisque
            mi ante, iaculis sed tortor in, laoreet pretium augue. In fermentum
            nibh id pharetra ullamcorper. Pellentesque sed varius nibh.
          </p>
          <p class="text-body">
            Pellentesque id orci magna. Nullam tempus maximus velit vel aliquam.
            Donec eget ipsum tincidunt, tempus nunc a, tincidunt dui.
            Pellentesque placerat finibus massa, id efficitur est. Vestibulum
            non est sed leo volutpat luctus consectetur eget orci. Ut et augue
            varius, tincidunt ex a, convallis libero. Morbi maximus ligula diam,
            vel ultrices est ultrices et. Donec ut libero dictum, eleifend massa
            et, fringilla justo. Aenean a ligula hendrerit eros pellentesque
            porta. Nullam ante ipsum, tincidunt in justo sed, luctus dapibus
            nibh. Curabitur in tortor a magna sagittis ultricies vitae congue
            lorem. Vivamus at justo ut nulla dictum finibus. Proin euismod
            pharetra pellentesque. Maecenas consectetur non sem eu egestas.
          </p>
          <p class="text-body">
            Donec vitae ornare purus, non interdum libero. Suspendisse eget
            vestibulum quam, hendrerit condimentum purus. Vivamus eget consequat
            velit. Integer auctor efficitur enim in ornare. Proin sed cursus
            lorem. Aenean mattis felis purus, at hendrerit risus varius sit
            amet. Quisque ut ipsum aliquam, blandit felis cursus, blandit velit.
            Integer in quam felis. Nullam at luctus augue.
          </p>
          <p class="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet velit vel tellus congue rutrum eget id lectus. Suspendisse quis
            imperdiet felis, in pretium dolor. Morbi ipsum ex, pretium non odio
            ut, vestibulum sagittis purus. Integer vitae pretium turpis. Sed nec
            lacus nunc. Morbi fermentum diam vel lobortis consectetur. Etiam
            ullamcorper arcu sed ex suscipit aliquet. Praesent erat leo,
            fringilla ac varius vitae, volutpat eget quam. Quisque tristique
            justo sit amet mi porttitor, pretium blandit sapien mattis. Quisque
            aliquet scelerisque ultrices. Phasellus ultrices mauris vitae lectus
            eleifend tincidunt. Praesent id purus nec dui venenatis gravida quis
            non augue.
          </p>
          <p class="text-body mb-5">
            Suspendisse feugiat maximus neque. Duis consectetur vehicula leo a
            dictum. Proin vehicula, elit eu laoreet ullamcorper, orci purus
            faucibus nulla, et pretium tortor tellus nec sapien. Fusce erat
            arcu, convallis sit amet hendrerit in, luctus ac nisl. Phasellus non
            ante in est auctor congue a auctor purus. Vivamus ac congue arcu, ac
            vestibulum diam. Donec finibus, risus non elementum efficitur, neque
            neque accumsan neque, nec pellentesque tellus eros ut diam.
            Vestibulum tristique orci et lectus iaculis ullamcorper. Curabitur
            venenatis nisi vel nulla vestibulum malesuada. Donec finibus justo
            sit amet eros eleifend, eget porta lacus aliquet. Duis ullamcorper
            suscipit odio, vitae ornare leo venenatis in. Duis egestas sed elit
            in lobortis. Duis purus orci, auctor eget vulputate vel, cursus nec
            metus. Donec mattis viverra nunc quis lacinia. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Ut id justo ullamcorper, laoreet orci non, ullamcorper quam.
          </p>

          <div class="d-flex">
            <button type="submit" class="default-btn">Reply</button>
            <button type="submit" class="default-btn ms-3">Forward</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadEmail",
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