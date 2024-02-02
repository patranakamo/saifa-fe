<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">User Details</h3>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <span class="fw-medium fs-18 mb-4">{{ userId !== 'new' ? 'User Details :' : 'Add New User :' }}</span>

              <div class="d-flex justify-content-between border-bottom mb-4">
                <h4 class="text-dark fs-14 fw-medium"></h4>
                <h4 class="text-dark fs-14 fw-medium"></h4>
              </div>
              <ul class="ps-0 mb-0 list-unstyled">
                <li v-if="userId !== 'new'" class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">UserId:</span>
                  <span class="right-details text-dark fs-14 fw-medium"> {{ userId }}</span>
                </li>
                <li v-if="userId !== 'new'" class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Username:</span>
                  <span class="right-details text-dark fs-14 fw-medium"> {{ userStore.userSelect.username }}</span>
                </li>
                <li v-else class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Username:</span>
                  <span class="right-details text-dark fs-14 fw-medium">
                     <input placeholder="example johnbar" type="text"
                            v-model="newUsername"
                            :class="{'red-input': newUsername.length > 0 && newUsername.length < 5} "
                            class="form-control"
                     >
                  </span>
                  <div v-if="newUsername.length > 0 && newUsername.length < 5 ">
                    {{ textNotCorrectFormatUsername }}
                  </div>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">Status :</span>
                  <span v-if="!userStore.userSelect.is_admin" class="right-details">
                    <select v-model="userStore.userSelect.status" class="form-select form-control">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </span>
                  <span v-else class="right-details">
                    OPEN
                  </span>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">{{
                      userId !== 'new' ? 'New Password :' : 'Password :'
                    }}</span>

                  <span class="right-details">
                    <input placeholder="enter password here" type="text"
                           v-model="newPassword"
                           :class="{'red-input': newPassword.length > 0 && newPassword.length < 5} "
                           class="form-control"
                    >
                  </span>
                  <div v-if="newPassword.length > 0 && newPassword.length < 5 ">
                    {{ textNotCorrectFormatPassword }}
                  </div>
                </li>

              </ul>

              <div class="col-sm-10">
                <div class="form-group mb-0 d-flex">

                  <button v-if="userId !== 'new'" @click="updateToken()" class="default-btn">Update</button>
                  <button v-else @click="addNewUser()" class="default-btn">Save</button>

                  <router-link :to="{name:'UserList' }">
                    <button class="default-btn border-btn ms-3"> Cancel</button>
                  </router-link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="row" v-if="userId !== 'new'">
        <div class="col-lg-12">
          <RecentUsedUser :tokenLog=userStore.LoginLog></RecentUsedUser>
        </div>
      </div>

      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
import RecentUsedUser from "../../components/Ecommerce/OrdersDetails/RecentUsedUser.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
// import CalendarContentExpire from "@/components/Widgets/CalendarContentExpire.vue";

import {usedUsersStore} from '@/stores/users'

const userStore = usedUsersStore()

import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import toastr from "toastr";

const route = useRoute()
const router = useRouter();
const userId = ref('new')
const newPassword = ref('')
const newUsername = ref('')

const textNotCorrectFormatPassword = ref('the password need to have more then 5 character')
const textNotCorrectFormatUsername = ref('the username need to have more then 5 character')

onMounted(async () => {
  if (route.params.id && route.params.id !== 'new') {
    userId.value = route.params.id
    await userStore.loadUser(route.params.id)
  } else {
    userStore.userSelect = {
      "user_id": "",
      "username": "",
      "status": "active",
      "create_at": -1,
      "update_at": -1,
      "last_login_time": -1,
      "new_password": "",
    }
  }
})

const addNewUser = async () => {
  if (newPassword.value.length < 5) {
    toastr.info(textNotCorrectFormatPassword.value)
    return
  }
  if (newPassword.value.length < 5) {
    toastr.info(textNotCorrectFormatUsername.value)
    return
  }

  if (await userStore.addNewUser(newUsername.value, newPassword.value)) {
    toastr.success('add new user ' + userStore.newUserId + " success!")
    setTimeout(() => {
      router.push({name: 'UserList'});
    }, 2000);
  }
}

const updateToken = async () => {
  if (newPassword.value.length > 0 && newPassword.value.length < 5) {
    toastr.info(textNotCorrectFormatPassword.value)
    return
  }

  userStore.userSelect.new_password = newPassword.value
  if (await userStore.updateUser(userId.value)) {
    toastr.success('update user ' +  userStore.userSelect.username + " success!")
    setTimeout(() => {
      router.push({name: 'UserList'});
    }, 2000);
  }
}

</script>
<style>
.li-select {
  margin-top: 20px;
  min-height: 50px;
}

.topic_select {
  min-width: 300px;
}

.right-details {
  min-width: 300px;
  max-width: 400px;
  float: left;
  position: absolute;
  margin-left: 300px;
  padding: 6px;
}

.red-input {
  border-color: red !important;
  color: red;
}
</style>