<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="d-sm-flex d-md-flex d-lg-flex justify-content-between">
        <div>
          <h3 class="fs-18 fw-medium mb-3">Invoice Details</h3>
          <h4 class="fs-14 mb-3">
            Invoice Number: <span class="text-body">#34672</span>
          </h4>
          <h4 class="fs-14 mb-3">Invoice To:</h4>
          <h4 class="fs-14 mb-0">Robert Henry</h4>
          <p class="text-body fs-14">
            W. Randall Mill Street Copperas Cove, TX 31694 <br />
            +1 065 7733 844
          </p>
        </div>
        <div class="text-end mt-4 mt-lg-0 mt-md-0 mt-sm-0">
          <h3 class="fs-18 fw-medium mb-3 text-white">Invoice Details</h3>
          <h4 class="fs-14 mb-3">
            Date: <span class="text-body">25 / 02 / 2023</span>
          </h4>
          <h4 class="fs-14 mb-3">Pay To:</h4>
          <h4 class="fs-14 mb-0">Evelyn Herman</h4>
          <p class="text-body fs-14">
            Chapel Ave. New Milford, CT 9193 <br />
            +1 045 7766 9858
          </p>
        </div>
      </div>

      <div class="all-table scroll-bar h-660">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium fs-14 ps-0" scope="col">Qty</th>
              <th class="text-dark fw-medium fs-14" scope="col">
                Item Description
              </th>
              <th class="text-dark fw-medium fs-14" scope="col">Price</th>
              <th class="text-dark fw-medium fs-14" scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14 fw-medium">01</span>
              </td>
              <td>
                <span class="text-body fs-14">Business Brochure design</span>
              </td>
              <td>
                <span class="text-body fs-14">$300</span>
              </td>
              <td>
                <span class="text-body fs-14">$300</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14 fw-medium">02</span>
              </td>
              <td>
                <span class="text-body fs-14">Mobile App Development</span>
              </td>
              <td>
                <span class="text-body fs-14">$700</span>
              </td>
              <td>
                <span class="text-body fs-14">$700</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14 fw-medium">03</span>
              </td>
              <td>
                <span class="text-body fs-14"
                  >Webpage Design and Development</span
                >
              </td>
              <td>
                <span class="text-body fs-14">$600</span>
              </td>
              <td>
                <span class="text-body fs-14">$600</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0">
                <span class="text-dark fs-14 fw-medium">04</span>
              </td>
              <td>
                <span class="text-body fs-14">AI Design update</span>
              </td>
              <td>
                <span class="text-body fs-14">$400</span>
              </td>
              <td>
                <span class="text-body fs-14">$400</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0 border-0">
                <span class="text-dark fs-14 fw-medium">Note:</span>
              </td>
              <td class="border-0">
                <span class="text-body fs-14"
                  >If you have any concerns regarding this invoice, please
                  contact me</span
                >
              </td>
              <td>
                <span class="text-dark fs-14">Sub total</span>
              </td>
              <td>
                <span class="text-dark fs-14">$2000</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0 border-0"></td>
              <td class="border-0"></td>
              <td>
                <span class="text-dark fs-14">Tax (10%)</span>
              </td>
              <td>
                <span class="text-dark fs-14">$200</span>
              </td>
            </tr>
            <tr>
              <td class="ps-0 border-0"></td>
              <td class="border-0"></td>
              <td>
                <span class="text-dark fs-14">Grand Total</span>
              </td>
              <td>
                <span class="text-dark fs-14">$2200</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-5">
        <button class="default-btn">Print</button>
        <button class="default-btn border-btn ms-3">Download</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetails",
};
</script>