<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
              class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Invoice Logs</h3>
            <router-link :to="{name:'InvoiceDetails', params: { id: 'new' } }">
                        <button
                            class="btn btn-primary default-btn"
                            type="button"
                        >
                          + Add New Invoice
                        </button>
            </router-link>
          </div>

          <div
              class="card-title d-sm-flex d-md-flex d-lg-flex justify-content-between align-items-center mb-3"
          >
            <!--            <form class="src-form position-relative w-25 w-sm-100">-->
            <!--              <input-->
            <!--                  v-model="search"-->
            <!--                  type="text"-->
            <!--                  class="form-control h-40"-->
            <!--                  placeholder="Search with  Asterisk ID "-->
            <!--                  @change="loadData()"-->
            <!--              />-->
            <!--              <vue-feather-->
            <!--                  type="search"-->
            <!--                  class="position-absolute top-50 start-0 translate-middle-y"-->
            <!--              ></vue-feather>-->
            <!--            </form>-->

            <div class="input-group w-25 w-sm-100 mt-3 mt-sm-0 mt-lg-0 mt-md-0">
              <button
                  class="btn btn-outline-secondary border-0 text-body fs-14 bg-transparent"
                  type="button"
              >
                Sort By Invoice Create Date:
              </button>
              <select
                  class="form-select form-control h-40 rounded-2"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  @change="loadData()"
                  v-model="mode"
              >
                <option selected value="asc">newest to oldest</option>
                <option value="desc">oldest to newest</option>
              </select>
            </div>
          </div>

          <div class="all-table scroll-bar h-660">
            <table class="table align-middle mb-0">
              <thead>
              <tr>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14 ps-0" scope="col">
                  ID
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  StoreName
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  amount
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Status
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Cancel
                </th>
              </tr>

              <tr v-for="(row, index) in localInvoiceStore.list" :key="index">
                <td class="ps-0">
                  <vue v-if="row.invoice_id">
                    <router-link :to="{name:'InvoiceDetails', params: { id: row.invoice_id } }">
                      <a href="#">
                        {{ row.invoice_id }}
                      </a>
                    </router-link>
                  </vue>
                </td>
                <td class="ps-0">
                  {{ row.address_name }}
                </td>
                <td class="ps-0">
                  {{ row.amount }}
                </td>
                <!--                <td class="ps-0">-->
                <!--                  {{ localInvoiceStore.formatDateTime(row.create_at) }}-->
                <!--                </td>-->
                <td class="ps-0" :class="{
                  'text-danger': row.status === 'CANCELED',
                  'text-primary': row.status === 'wait',
                  'text-success': row.status === 'payed'
                }">
                  <span style="text-transform:uppercase;">{{ row.status }}</span>
                </td>
                <td>
                  <a
                      class="border-btn default-btn text-decoration-none py-2 px-3"
                      v-if="row.status === 'wait'"
                      href="#"
                      @click="cancelInvoice(  row.invoice_id )"
                  >
                    Cancel
                  </a>
<!--                  <button-->
<!--                      v-if="row.status === 'wait'"-->
<!--                      class="btn btn-danger default-btn"-->
<!--                      type="button"-->
<!--                      data-bs-toggle="offcanvas"-->
<!--                      data-bs-target="#offcanvasRight"-->
<!--                      aria-controls="offcanvasRight"-->
<!--                      @click="cancelInvoice( row.invoice_id )"-->
<!--                  >-->
<!--                    Cancel-->
<!--                  </button>-->
                </td>
                <!--                <td class="ps-0">-->
                <!--                  {{ row.duration > 0 ? row.duration + ' secs' : '-' }}-->
                <!--                </td>-->
              </tr>
              </thead>
            </table>

            <b-pagination
                v-model="pageNumber"
                :total-rows="rows"
                :per-page="perPage"
                @click="loadData()"
            ></b-pagination>

          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
import MainFooter from "../../components/Layouts/MainFooter.vue";
import {usedInvoiceStore} from '@/stores/invoice'

const localInvoiceStore = usedInvoiceStore()
import {onMounted, ref} from 'vue'
import Swal from "sweetalert2";
import toastr from "toastr";

const mode = ref('desc')
const search = ref('')
const pageNumber = ref(1)
const rows = ref(1)
const perPage = ref(10)

const loadData = async () => {
  await localInvoiceStore.loadInvoices(perPage.value, pageNumber.value, mode.value, search.value)
  rows.value = localInvoiceStore.total_count
}

onMounted(async () => {
  loadData()
})

const cancelInvoice = async (invoice_id) => {
  Swal.fire({
    title: 'Are you sure you want to cancel this invoice ?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, cancel it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (await localInvoiceStore.cancelInvoice(invoice_id)) {
        toastr.success('cancel invoice ' + invoice_id + " success!")
        await loadData()
      }else{
        toastr.info('cancel invoice ' + invoice_id + " failed!")
        await loadData()
      }

    }
  })
}


</script>
<style scoped>
.ps-0 {
  /*text-align: center;*/
  padding-left: 30px !important;
}
</style>