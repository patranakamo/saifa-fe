<template>
  <img
    src="../../../assets/images/event-img.jpg"
    class="rounded-3 mb-4"
    alt="event-img"
  />

  <div class="card-title mb-3">
    <h3 class="fw-medium fs-18 mb-0">Event Details</h3>
  </div>

  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="fs-18 fw-medium">
            The theme of this event is business, so everyone was very interested
          </h4>
          <p class="text-body fs-14">
            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Sed porttitor lectus nibh.
          </p>

          <div class="row justify-content-center">
            <div class="col-lg-6 col-sm-6">
              <div class="p-4 bg-f5f7fb mb-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="../../../assets/images/location.svg"
                      alt="location"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 class="fs-18 fw-medium">Location</h4>
                    <p class="text-body">
                      North Glenholme Circle South Richmond Hill, AM 705
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="p-4 bg-f5f7fb mb-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="../../../assets/images/clock.svg" alt="clock" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 class="fs-18 fw-medium">Date & Time</h4>
                    <p class="text-body">
                      March 25, 2023 <br />
                      03:00 PM - 90PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="event-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565170.29301636!2d-132.08532758867793!3d31.786060306224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1690103086523!5m2!1sen!2sbd"
              style="width: 100%; display: block; height: 270px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-lg-flex align-items-center mb-4">
    <ul class="ps-0 mb-lg-0 mb-md-0 mb-sm-0 list-unstyled d-sm-flex">
      <li class="mb-2 mb-sm-0">
        <button type="submit" class="default-btn">
          <vue-feather type="square" style="width: 18px"></vue-feather>
          <span>Get Ticket</span>
        </button>
      </li>
      <li class="ms-sm-2 mb-2 mb-sm-0 ms-md-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="calendar" style="width: 18px"></vue-feather>
          <span>Add To Calendar</span>
        </button>
      </li>
      <li class="ms-sm-2 mb-2 mb-sm-0 ms-md-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="heart" style="width: 18px"></vue-feather>
          <span>5823</span>
        </button>
      </li>
      <li class="ms-sm-2 mb-2 mb-sm-0 ms-md-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="share-2" style="width: 18px"></vue-feather>
          <span>2416</span>
        </button>
      </li>
    </ul>
    <ul
      class="ps-0 mb-0 ms-lg-4 ms-md-4 ms-sm-4 mt-4 mt-lg-0 list-unstyled d-flex align-items-center"
    >
      <li class="d-none d-sm-block d-md-block d-lg-block">
        <span class="fs-14">Share with Friends:</span>
      </li>
      <li class="ms-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="facebook" style="width: 18px"></vue-feather>
        </button>
      </li>
      <li class="ms-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="twitter" style="width: 18px"></vue-feather>
        </button>
      </li>
      <li class="ms-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="linkedin" style="width: 18px"></vue-feather>
        </button>
      </li>
      <li class="ms-2">
        <button type="submit" class="default-btn border-btn">
          <vue-feather type="mail" style="width: 18px"></vue-feather>
        </button>
      </li>
    </ul>
  </div>

  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 fw-medium">About this event</h4>
          <p class="fs-14 text-body">
            Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Curabitur aliquet quam id dui posuere
            blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
            velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
            lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem.
          </p>

          <ul class="ps-4 mt-4 mb-4 list-unstyled fs-14">
            <li class="mb-3 text-body">
              Nulla quis lorem ut libero malesuada feugiat.
            </li>
            <li class="mb-3 text-body">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi.
            </li>
            <li class="mb-3 text-body">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </li>
            <li class="text-body">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id
              orci porta dapibus.
            </li>
          </ul>

          <p class="fs-14 text-body">
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
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 fw-medium">Event Topic</h4>

          <ul class="ps-0 mt-4 mb-0 list-unstyled fs-14">
            <li class="mb-3 text-body">
              <span class="text-dark">01)</span> Leadership development and
              management
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">02)</span> International business and
              globalization
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">03)</span> Sales and business development
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">04)</span> Digital marketing and social
              media
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">05)</span> Human resources and talent
              management
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">06)</span> Project management and process
              improvement
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">07)</span> Entrepreneurship and startups
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">08)</span> Customer service and experience
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">09)</span> Sustainability and corporate
              social responsibility
            </li>
            <li class="text-body">
              <span class="text-dark">10)</span> Legal and regulatory compliance
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="fs-18 fw-medium mb-4">Responses</h4>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6">
              <div class="bg-f5f7fb p-4 mb-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="../../../assets/images/check-circle.svg"
                      alt="check-circle"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 class="fw-medium fs-18 text-body">Going</h4>
                    <h2 class="w-medium fs-30 mb-0">2,486</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="bg-f5f7fb p-4 mb-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="../../../assets/images/command.svg"
                      alt="command"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 class="fw-medium fs-18 text-body">Interested</h4>
                    <h2 class="w-medium fs-30 mb-0">7,984</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="bg-f5f7fb p-4 mb-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="../../../assets/images/share-2.svg"
                      alt="share-2"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 class="fw-medium fs-18 text-body">Share</h4>
                    <h2 class="w-medium fs-30 mb-0">10,482</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <h4 class="fs-18 fw-medium mb-4">Refund Policy</h4>

          <ul class="ps-0 mb-0 list-unstyled fs-14">
            <li class="mb-3 text-body">
              <span class="text-dark">01)</span>
              Vivamus suscipit tortor eget felis porttitor volutpat.
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">02)</span>
              Curabitur aliquet quam id dui posuere blandit.
            </li>
            <li class="mb-3 text-body">
              <span class="text-dark">03)</span>
              Pellentesque in ipsum id orci porta dapibus
            </li>
            <li class="text-body">
              <span class="text-dark">04)</span>
              Sed porttitor lectus nibh.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
};
</script>