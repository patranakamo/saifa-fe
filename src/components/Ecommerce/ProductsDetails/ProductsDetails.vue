<template>
  <div
    class="card active-projects-content border-0 box-shadow border-radius-10 mb-4"
  >
    <div class="card-body p-4">
      <div class="row">
        <div class="col-lg-1">
          <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
            <li class="nav-item mb-4 mx-0 border-0" role="presentation">
              <button
                class="nav-link py-0 active"
                id="product1-tab"
                data-bs-toggle="tab"
                data-bs-target="#product1-tab-pane"
                type="button"
                role="tab"
                aria-controls="product1-tab-pane"
                aria-selected="true"
              >
                <img
                  class="cw-100 rounded-3"
                  src="../../../assets/images/products/product-11.jpg"
                  alt="product-11"
                />
              </button>
            </li>
            <li class="nav-item mb-4 mx-0" role="presentation">
              <button
                class="nav-link py-0"
                id="product2-tab"
                data-bs-toggle="tab"
                data-bs-target="#product2-tab-pane"
                type="button"
                role="tab"
                aria-controls="product2-tab-pane"
                aria-selected="false"
              >
                <img
                  class="cw-100 rounded-3"
                  src="../../../assets/images/products/product-12.jpg"
                  alt="product-12"
                />
              </button>
            </li>
            <li class="nav-item mb-0 mx-0" role="presentation">
              <button
                class="nav-link py-0"
                id="product3-tab"
                data-bs-toggle="tab"
                data-bs-target="#product3-tab-pane"
                type="button"
                role="tab"
                aria-controls="product3-tab-pane"
                aria-selected="false"
              >
                <img
                  class="cw-100 rounded-3"
                  src="../../../assets/images/products/product-13.jpg"
                  alt="product-13"
                />
              </button>
            </li>
          </ul>
        </div>
        <div class="col-lg-11">
          <div class="row">
            <div class="col-lg-6">
              <div class="tab-content mb-4" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="product1-tab-pane"
                  role="tabpanel"
                  aria-labelledby="product1-tab"
                  tabindex="0"
                >
                  <img
                    class="rounded-3 w-100"
                    src="../../../assets/images/products/product-11.jpg"
                    alt="product-11"
                  />
                </div>
                <div
                  class="tab-pane fade"
                  id="product2-tab-pane"
                  role="tabpanel"
                  aria-labelledby="product2-tab"
                  tabindex="0"
                >
                  <img
                    class="rounded-3 w-100"
                    src="../../../assets/images/products/product-12.jpg"
                    alt="product-12"
                  />
                </div>
                <div
                  class="tab-pane fade"
                  id="product3-tab-pane"
                  role="tabpanel"
                  aria-labelledby="product3-tab"
                  tabindex="0"
                >
                  <img
                    class="rounded-3 w-100"
                    src="../../../assets/images/products/product-13.jpg"
                    alt="product-13"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="fs-18 fw-medium">Soft cushion armchair ...</h3>
              <ul class="ps-0 list-unstyled d-flex align-items-center mb-3">
                <li class="me-1">
                  <i class="ri-star-fill fs-16" style="color: #ffba5c"></i>
                </li>
                <li class="me-1">
                  <i class="ri-star-fill fs-16" style="color: #ffba5c"></i>
                </li>
                <li class="me-1">
                  <i class="ri-star-fill fs-16" style="color: #ffba5c"></i>
                </li>
                <li class="me-1">
                  <i class="ri-star-fill fs-16" style="color: #ffba5c"></i>
                </li>
                <li class="me-1">
                  <i class="ri-star-fill fs-16" style="color: #ffba5c"></i>
                </li>
                <li>
                  <span class="text-body">(5.0)</span>
                </li>
              </ul>

              <span class="d-block fs-14 fw-medium mb-3 text-dark">
                $350.00
              </span>
              <p class="fs-14 mb-4 text-body">
                Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
                Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam
                sit amet quam vehicula elementum sed sit amet dui. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim.
              </p>

              <ul class="ps-0 mb-4 list-unstyled">
                <li class="d-sm-flex align-items-center mb-3">
                  <span
                    class="text-dark fs-14 fw-medium me-2 d-block mb-2 mb-sm-0"
                    >Size:
                  </span>
                  <select
                    class="form-select form-control wh-120 h-auto mb-3 mb-sm-0 wh-sm-100"
                    aria-label="Default select example"
                  >
                    <option selected>Small</option>
                    <option value="1">Large</option>
                    <option value="2">Medium</option>
                    <option value="3">Ex-Large</option>
                  </select>
                  <input
                    type="number"
                    class="form-control wh-120 h-auto ms-sm-2 mb-3 mb-sm-0 wh-sm-100"
                    placeholder="1"
                    min="1"
                  />
                  <router-link
                    to="/shopping-cart"
                    class="default-btn text-decoration-none text-white ms-sm-2 wh-sm-100 d-inline-block"
                  >
                    + Add To Cart
                  </router-link>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <span class="text-dark fs-14 fw-medium me-2">Size:</span>
                  <span class="text-body fs-14">Furniture</span>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <span class="text-dark fs-14 fw-medium me-2">SKU:</span>
                  <span class="text-body fs-14">AK007</span>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <span class="text-dark fs-14 fw-medium me-2">Vendor:</span>
                  <span class="text-body fs-14">Chester Burress</span>
                </li>
                <li class="d-flex align-items-center mb-0">
                  <span class="text-dark fs-14 fw-medium me-2"
                    >Availability:</span
                  >
                  <span class="text-body fs-14">In stock 38 items</span>
                </li>
              </ul>
            </div>
          </div>

          <ul
            class="nav nav-tabs border-0 text-start d-block mb-4"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item mx-0" role="presentation">
              <button
                class="nav-link text-body fs-18 active"
                id="description-tab"
                data-bs-toggle="tab"
                data-bs-target="#description-tab-pane"
                type="button"
                role="tab"
                aria-controls="description-tab-pane"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li class="nav-item me-3" role="presentation">
              <button
                class="nav-link text-body fs-18"
                id="ratings-tab"
                data-bs-toggle="tab"
                data-bs-target="#ratings-tab-pane"
                type="button"
                role="tab"
                aria-controls="ratings-tab-pane"
                aria-selected="false"
              >
                Ratings & reviews
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="description-tab-pane"
              role="tabpanel"
              aria-labelledby="description-tab"
              tabindex="0"
            >
              <p class="text-body fs-14 mb-3">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit
                tortor eget felis porttitor volutpat. Vivamus suscipit tortor
                eget felis porttitor volutpat. Vivamus suscipit tortor eget
                felis porttitor volutpat. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi.Nulla quis lorem ut libero
                malesuada feugiat. Proin eget tortor risus. Curabitur aliquet
                quam id.
              </p>

              <p class="text-body fs-14 mb-4">
                Donec sollicitudin molestie malesuada. Sed porttitor lectus
                nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Curabitur aliquet quam id dui posuere blandit.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Cras ultricies ligula sed magna dictum porta. Vivamus
                suscipit tortor eget felis porttitor volutpat. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
                erat, accumsan id imperdiet et, porttitor at sem. Nulla quis
                lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui
                posuere blandit. Nulla porttitor accumsan tincidunt. Mauris
                blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed
                porttitor lectus nibh. Nulla quis lorem ut libero malesuada
                feugiat. Nulla porttitor accumsan tincidunt. Donec sollicitudin
                molestie malesuada. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Donec velit
                neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              </p>

              <ul class="ps-0 mb-0 list-unstyled">
                <li class="text-body fs-14 mb-2">
                  1) Donec rutrum congue leo eget malesuada. Donec sollicitudin
                  molestie malesuada.
                </li>
                <li class="text-body fs-14 mb-2">
                  2) Proin eget tortor risus. Pellentesque in ipsum id orci
                  porta dapibus.
                </li>
                <li class="text-body fs-14 mb-2">
                  3) Vivamus magna justo, lacinia eget consectetur sed,
                  convallis at tellus.
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="ratings-tab-pane"
              role="tabpanel"
              aria-labelledby="ratings-tab"
              tabindex="0"
            >
              <ul class="ps-0 mb-4 list-unstyled">
                <li class="bg-f5f7fb p-4 rounded-3 mb-3">
                  <div class="d-flex justify-content-between">
                    <ul
                      class="ps-0 list-unstyled d-flex align-items-center mb-3"
                    >
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li>
                        <span class="text-body">(5.0)</span>
                      </li>
                    </ul>
                    <a href="#" class="text-dark fs-14">Rate This Product</a>
                  </div>
                  <p class="text-body fs-14 mb-3">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi.Nulla quis lorem ut libero malesuada feugiat. Proin
                    eget tortor risus. Curabitur aliquet quam id dui posuere
                    blandit. Sed porttitor lectus nibh. Nulla porttitor accumsan
                    tincidunt. Nulla quis lorem ut libero malesuada feugiat.
                  </p>
                  <h4 class="fw-medium fs-14 text-dark">- Edwin Harpal</h4>
                </li>
                <li class="bg-f5f7fb p-4 rounded-3 mb-3">
                  <div class="d-flex justify-content-between">
                    <ul
                      class="ps-0 list-unstyled d-flex align-items-center mb-3"
                    >
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li>
                        <span class="text-body">(5.0)</span>
                      </li>
                    </ul>
                    <a href="#" class="text-dark fs-14">Rate This Product</a>
                  </div>
                  <p class="text-body fs-14 mb-3">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi.Nulla quis lorem ut libero malesuada feugiat. Proin
                    eget tortor risus. Curabitur aliquet quam id dui posuere
                    blandit. Sed porttitor lectus nibh. Nulla porttitor accumsan
                    tincidunt. Nulla quis lorem ut libero malesuada feugiat.
                  </p>
                  <h4 class="fw-medium fs-14 text-dark">- Trena Callis</h4>
                </li>
                <li class="bg-f5f7fb p-4 rounded-3 mb-3">
                  <div class="d-flex justify-content-between">
                    <ul
                      class="ps-0 list-unstyled d-flex align-items-center mb-3"
                    >
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li class="me-1">
                        <i
                          class="ri-star-fill fs-16"
                          style="color: #ffba5c"
                        ></i>
                      </li>
                      <li>
                        <span class="text-body">(5.0)</span>
                      </li>
                    </ul>
                    <a href="#" class="text-dark fs-14">Rate This Product</a>
                  </div>
                  <p class="text-body fs-14 mb-3">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi.Nulla quis lorem ut libero malesuada feugiat. Proin
                    eget tortor risus. Curabitur aliquet quam id dui posuere
                    blandit. Sed porttitor lectus nibh. Nulla porttitor accumsan
                    tincidunt. Nulla quis lorem ut libero malesuada feugiat.
                  </p>
                  <h4 class="fw-medium fs-14 text-dark">- Tracy Mickelsen</h4>
                </li>
              </ul>

              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label">Subject</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-3">
                      <label class="label">Comment</label>
                      <textarea
                        class="form-control"
                        placeholder="Comment Here"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <button type="submit" class="default-btn">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsDetails",
};
</script>