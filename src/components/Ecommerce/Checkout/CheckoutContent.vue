<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Billing Information</h3>
          </div>

          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Inter furst name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Country</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">USA</option>
                    <option value="2">Canada</option>
                    <option value="3">Germany</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Town/City</label>
                  <input type="text" class="form-control" placeholder="City" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">State</label>
                  <input type="text" class="form-control" placeholder="State" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Order Notes :</label>
                  <textarea
                    class="form-control"
                    placeholder="Write your note..."
                    cols="30"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <button type="submit" class="default-btn">
                    Proceed To Shipping
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h3 class="fw-medium fs-18 mb-4">Shopping Cart</h3>
          <div class="d-flex justify-content-between border-bottom mb-4">
            <h4 class="text-dark fs-14 fw-medium">Description</h4>
            <h4 class="text-dark fs-14 fw-medium">Price</h4>
          </div>
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Grand Total:</span>
              <span class="text-dark fs-14 fw-medium">$5,570</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Discount :</span>
              <span class="text-dark fs-14 fw-medium">$-70</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Tax :</span>
              <span class="text-dark fs-14 fw-medium">$275</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Subtotal :</span>
              <span class="text-dark fs-14 fw-medium">$5,225</span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-4">
              <span class="text-body fs-14">Shipping Charge :</span>
              <span class="text-dark fs-14 fw-medium">$50</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
              <span class="text-dark fs-14 fw-medium">Total :</span>
              <span class="text-dark fs-14 fw-medium">$5,175</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h3 class="fw-medium fs-18 mb-4">Payment Method</h3>

          <div class="d-flex laign-items-center mb-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Credit card
              </label>
            </div>
            <div class="form-check ms-3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                PayPal
              </label>
            </div>
          </div>

          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Select card</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>VISA</option>
                    <option value="1">Master Card</option>
                    <option value="2">Paypal</option>
                    <option value="3">Payoneer</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Card number</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>5485xxxxxxxxx</option>
                    <option value="1">5475xxxxxxxxx</option>
                    <option value="2">5385xxxxxxxxx</option>
                    <option value="3">1485xxxxxxxxx</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Expires on</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Month</option>
                    <option value="1">January</option>
                    <option value="1">February</option>
                    <option value="1">March</option>
                    <option value="1">April</option>
                    <option value="1">May</option>
                    <option value="1">June</option>
                    <option value="1">July</option>
                    <option value="1">August</option>
                    <option value="1">September</option>
                    <option value="1">November</option>
                    <option value="1">December</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label text-white">Year</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Year</option>
                    <option value="1">2023</option>
                    <option value="1">2024</option>
                    <option value="1">2025</option>
                    <option value="1">2026</option>
                    <option value="1">2027</option>
                    <option value="1">2028</option>
                    <option value="1">2029</option>
                    <option value="1">230</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-0">
                  <label class="label">CVV Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter a CVV"
                  />
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
  name: "CheckoutContent",
};
</script>