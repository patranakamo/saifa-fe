<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
              class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Call Logs</h3>

            <!--            <button-->
            <!--                class="btn btn-primary default-btn"-->
            <!--                type="button"-->
            <!--                data-bs-toggle="offcanvas"-->
            <!--                data-bs-target="#offcanvasRight"-->
            <!--                aria-controls="offcanvasRight"-->
            <!--            >-->
            <!--              + Add New-->
            <!--            </button>-->
          </div>

          <div
              class="card-title d-sm-flex d-md-flex d-lg-flex justify-content-between align-items-center mb-3"
          >
            <form class="src-form position-relative w-25 w-sm-100">
              <input
                  v-model="search"
                  type="text"
                  class="form-control h-40"
                  placeholder="Search with  Asterisk ID "
                  @change="loadLogs()"
              />
              <vue-feather
                  type="search"
                  class="position-absolute top-50 start-0 translate-middle-y"
              ></vue-feather>
            </form>

            <div class="input-group w-25 w-sm-100 mt-3 mt-sm-0 mt-lg-0 mt-md-0">
              <button
                  class="btn btn-outline-secondary border-0 text-body fs-14 bg-transparent"
                  type="button"
              >
                Sort By Call Date:
              </button>
              <select
                  class="form-select form-control h-40 rounded-2"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  @change="loadLogs()"
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
                  Asterisk ID
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Channel
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Call Start
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Status
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Duration
                </th>
              </tr>

              <tr v-for="(row, index) in callAccountStore.list" :key="index">
                <td class="ps-0">
                  <vue v-if="row.call_id">
                  <router-link :to="{name:'CallDetails', params: { id: row.call_id } }">
                    <a href="#">
                      {{ row.ask_id }}
                    </a>
                  </router-link>
                  </vue>
                </td>
                <td class="ps-0">
                  {{ row.channel }}
                </td>
                <td class="ps-0">
                  {{ callAccountStore.formatDateTime(row.create_at) }}
                </td>
                <td class="ps-0" :class="{
                  'text-danger': row.call_status === 'initialize',
                  'text-primary': row.call_status === 'Connected',
                  'text-success': row.call_status === 'Up'
                }">
                  {{ row.call_status }}
                </td>
                <td class="ps-0">
                  {{ row.duration > 0 ? row.duration + ' secs' : '-' }}
                </td>
              </tr>
              </thead>
            </table>

            <b-pagination
                v-model="pageNumber"
                :total-rows="rows"
                :per-page="perPage"
                @click="loadLogs()"
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
import {usedCallAccountStore} from '@/stores/event/call'

const callAccountStore = usedCallAccountStore()
import {onMounted, ref} from 'vue'

const mode = ref('desc')
const search = ref('')
const pageNumber = ref(1)
const rows = ref(1)
const perPage = ref(10)

const loadLogs = async () => {
  await callAccountStore.loadCallLogs(perPage.value, pageNumber.value, mode.value, search.value)
  rows.value = callAccountStore.total_count
}

onMounted(async () => {
  await callAccountStore.loadCallLogs(perPage.value, pageNumber.value, mode.value)
  rows.value = callAccountStore.total_count
})
</script>