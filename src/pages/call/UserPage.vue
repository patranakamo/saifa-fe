<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
              class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">User Management</h3>
            <router-link :to="{name:'UserDetails', params: { id:'new' } }">
              <button
                  class="btn btn-primary default-btn"
                  type="button"
              >
                + Add New User
              </button>
            </router-link>
          </div>


          <div class="all-table scroll-bar h-660">
            <table class="table align-middle mb-0">
              <thead>
              <tr>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14 ps-0" scope="col">
                  Username
                </th>

<!--                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">-->
<!--                  Verified-->
<!--                </th>-->
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Last Update
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Last Login
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">
                  Status
                </th>
                <th class="text-dark fw-medium pt-2 pb-2 fs-14" scope="col">

                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="(row, index) in userStore.list" :key="index">
                <!--                <vue v-if="row.user_id">-->
                <td class="">
                  <div v-if="row.username!=='admin'">
                    <router-link :to="{name:'UserDetails', params: { id: row.user_id } }">
                      <vue-feather type="user" class="menu-icon tf-icons"></vue-feather>
                      {{ row.username }}
                    </router-link>
                  </div>
                  <div v-else>
                    <vue-feather type="user-plus" class="menu-icon tf-icons"></vue-feather>
                   Admin user
                  </div>

                </td>

                <!--                <td class="">-->
                <!--                  {{ row.username }}-->
                <!--                </td>-->

                <!--                <td class="" v-if="!row.create_at || row.create_at < 1">-->
                <!--                  <span class="text-body">Never</span>-->
                <!--                </td>-->
                <!--                <td class="" v-else>-->
                <!--                  {{ userStore.formatUnixTimestamp(row.create_at) }}-->
                <!--                </td>-->


<!--                <td class=" text-body" :class="{-->
<!--                  'text-danger': row.is_verified === 'no',-->
<!--                  'text-success': row.is_verified === 'yes'-->
<!--                }">-->
<!--                  {{ row.is_verified }}-->
<!--                </td>-->

                <td class="" v-if="!row.update_at || row.update_at < 1">
                  <span class="text-body">Never</span>
                </td>
                <td class="" v-else>
                  {{ userStore.formatUnixTimestamp(row.update_at) }}
                </td>

                <td class="" v-if="!row.last_login_time || row.last_login_time < 1">
                  <span class="text-body">Never</span>
                </td>
                <td class="" v-else>
                  {{ userStore.formatUnixTimestamp(row.last_login_time) }}
                </td>


                <td v-if="row.username!=='admin'" class=" text-body" :class="{
                  'text-danger': row.status === 'inactive',
                  'text-success': row.status === 'active'
                }">
                    {{ row.status }}
                </td>
                <td v-else class=" text-body" >
                  -
                </td>


                <td v-if="!row.is_admin" class="">
                  <a
                      class="border-btn default-btn text-decoration-none py-2 px-3"
                      href="#"
                      @click="removeItem( row.user_id )"
                  >
                    remove
                  </a>
                </td>
                <td v-else class="">
                </td>
                <!--                </vue>-->
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
import {usedUsersStore} from '@/stores/users'
import Swal from 'sweetalert2';
import toastr from 'toastr';

const userStore = usedUsersStore()
import {onMounted, ref} from 'vue'

onMounted(async () => {
  await userStore.loadUsers()
  userStore.userSelect = {
    "user_id": "",
    "username": "",
    "status": "active",
    "create_at": -1,
    "update_at": -1,
    "last_login_time": -1,
  }
})
const removeItem = async (userId) => {
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
      if (await userStore.removeUser(userId)) {
        toastr.success('remove token ' + userId + " success!")
        await userStore.loadUsers()
      }
    }
  })
}
</script>