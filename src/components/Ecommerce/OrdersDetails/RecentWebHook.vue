<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">web hook event</h3>
        <!--        <h3 class="fw-medium fs-18 mb-0">Customer ID : 357951</h3>-->
      </div>

      <div class="all-table scroll-bar h-608">
        <table class="table align-middle mb-0">
          <thead>
          <tr>
            <th class="text-dark fw-medium pb-2 pt-0 ps-0 fs-14" scope="col">
              Event Type
            </th>
            <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
              Time Send
            </th>
            <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
              Update Status
            </th>
            <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
              Json Data
            </th>
          </tr>
          </thead>

          <tbody>

          <tr v-for="(row, index) in webHookData" :key="index">
            <td class="ps-0">
              <div class="d-flex align-items-center">
                <div style="float: left; margin: 6px;">

                  <vue-feather
                      v-if="row.type === 'start'"
                      type="phone-forwarded"
                      style="width: 20px"
                      stroke="green"
                  ></vue-feather>
                  <vue-feather
                      v-else
                      type="phone-off"
                      style="width: 20px"
                      stroke="blue"
                  ></vue-feather>
                </div>
                <div style="float: left">
                  <h3 class="fs-14 text-dark ms-3 mb-0">{{row.type}} Call</h3>
                </div>
                <div style="clear: both"></div>
              </div>
            </td>
            <td>
              {{row.time_format}}
            </td>

            <td>
              <div v-if="row.status" class="d-flex align-items-center">
                <div style="float: left; margin: 6px;">
                  <vue-feather
                      type="cloud"
                      style="width: 20px"
                      stroke="green"
                  ></vue-feather>
                </div>
                <div style="float: left">
                  <h3 class="fs-14 text-dark ms-3 mb-0">webhook get data.</h3>
                </div>
                <div style="clear: both"></div>
              </div>
              <div v-else class="d-flex align-items-center">
                <div style="float: left; margin: 6px;">
                  <vue-feather
                      type="cloud-off"
                      style="width: 20px"
                      stroke="red"
                  ></vue-feather>
                </div>
                <div style="float: left">
                  <h3 class="fs-14 text-dark ms-3 mb-0">fail to send.</h3>
                </div>
                <div style="clear: both"></div>
              </div>
            </td>

            <td>
              <span class="text-body">
                <div id="json-container">
                   {{row.sent_data}}
                </div>
              </span>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    webHookData: {
      type: [],
      required: true
    }
  }
}
</script>
<style>

#json-container {
  max-width: 320px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  /*border: 1px solid #ccc;*/
  padding: 1px;
}

</style>