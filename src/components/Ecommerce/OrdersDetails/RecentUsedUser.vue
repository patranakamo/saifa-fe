<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">User Login Log</h3>
      </div>

      <div class="all-table scroll-bar h-608">

        <table class="table align-middle mb-0">
          <thead>
          <tr>
            <th class="text-dark fw-medium pb-2 pt-0 ps-0 fs-14" scope="col">
              IP
            </th>
            <th class="text-dark fw-medium pb-2 pt-0 fs-14" scope="col">
              Time
            </th>
            <th class="text-dark fw-medium pb-8 pt-0 fs-14" scope="col">
              Json Data
            </th>
          </tr>
          </thead>

          <tbody v-if="tokenLog && tokenLog.length > 0">

          <tr v-for="(row, index) in tokenLog" :key="index">
            <td class="ps-0">
              <div class="d-flex align-items-center">
                <div style="float: left; margin: 6px;">
                  <vue-feather
                      type="server"
                      style="width: 20px"
                      stroke="blue"
                  ></vue-feather>
                </div>
                <div style="float: left">
                  <h3 class="fs-14 text-dark ms-3 mb-0">{{row.user_ip}}</h3>
                </div>
                <div style="clear: both"></div>
              </div>
            </td>
            <td>
              {{row.time_format}}
            </td>
            <td>
              <span class="text-body">
                   {{row.json}}
<!--                <div id="json-container">-->
<!--                   {{row.json}}-->
<!--                </div>-->
              </span>
            </td>
          </tr>

          </tbody>
          <tbody v-else>
            <tr>
              <td class="ps-0"> This user Never Login Before</td>
              <td class="ps-0"> - </td>
              <td class="ps-0">
                -
                <vue-feather  type="cloud-off" class="right menu-icon tf-icons"></vue-feather>
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
    tokenLog: {
      type: [],
      required: true
    }
  }
}
</script>
<style scoped>
.right{
  float: right;
}
#json-container {
  max-width: 520px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  /*border: 1px solid #ccc;*/
  padding: 1px;
}

</style>