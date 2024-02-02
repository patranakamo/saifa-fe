<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
              class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Token Management</h3>

            <button
                class="btn btn-primary default-btn"
                type="button"
                @click="addNewToken()"
            >
              + Add New Token
            </button>
          </div>


          <div class="all-table scroll-bar h-660">
            <table class="table align-middle mb-0">
              <thead>
              <tr>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14 ps-0" scope="col">
                  Token
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Last Used
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Expire
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Allow
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Status
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">

                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="(row, index) in tokenStore.list" :key="index">
                <td class="">
                  <vue v-if="row.token">
                    <router-link :to="{name:'TokenDetails', params: { id: row.token } }">
                      <vue-feather type="unlock" class="menu-icon tf-icons"></vue-feather>
                      {{ row.token }}
                    </router-link>
                  </vue>
                </td>

                <td class="" v-if="!row.last_used || row.last_used < 1">
                  <span class="text-body">Never</span>
                </td>
                <td class="" v-else>
                  {{ tokenStore.formatUnixTimestamp(row.last_used) }}
                </td>

                <td class="" v-if="row.expire === '-1'">
                  <span class="text-body">Never</span>
                </td>
                <td class="" v-else>
                  {{ tokenStore.formatUnixTimestamp(row.expire) }}
                </td>
                <td class="">
                  <span class="text-body">{{ row.allow }}</span>
                </td>
                <td class=" text-body" :class="{
                  'text-danger': row.status === 'close',
                  'text-success': row.status === 'open'
                }">
                  {{ row.status }}
                </td>
                <td class="">
                  <a
                      class="border-btn default-btn text-decoration-none py-2 px-3"
                      href="#"
                      @click="removeItem( row.token )"
                  >
                    remove
                  </a>

                </td>

              </tr>
              </tbody>

            </table>

          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
import MainFooter from "../../components/Layouts/MainFooter.vue";
import {usedTokenStore} from '@/stores/token'
import Swal from 'sweetalert2';
import toastr from 'toastr';

const tokenStore = usedTokenStore()
import {onMounted, ref} from 'vue'

onMounted(async () => {
  await tokenStore.loadTokens()
  tokenStore.tokenSelect = {
    'status': 'open',
    'expire': -1,
    'expireMode': 'no',
    'allowSource': [],
    'allowSourceNum': 0,
  }
})

const addNewToken = async () => {
  const token = await tokenStore.addNewToken()
  if (token) {
    toastr.success('add new token ' + tokenStore.lastToken + " success!")
    await tokenStore.loadTokens()
  }
}
const removeItem = async (token) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (await tokenStore.removeToken(token)) {
        toastr.success('remove token ' + token + " success!")
        await tokenStore.loadTokens()
      }
    }
  })
}


</script>
<style scoped>
/*.text-body {*/
/*  padding-left: 30px !important;*/
/*}*/

/*.ps-0{*/
/*  padding-left: 0px !important;*/
/*}*/
</style>
