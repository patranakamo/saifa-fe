<template>
  <header id="darkModeHeader" class="header-area bg-white mb-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-7">
          <div class="left-header-content">
            <ul
              class="d-lg-flex d-md-flex align-items-center ps-0 mb-0 list-unstyled"
            >
              <li class="mb-3 mb-md-0 mb-lg-0">
                <div
                  class="d-flex justify-content-between align-items-center cw-273"
                >
                  <router-link to="/" class="flex-shrink-0">
                    <div style="width: 100px">
                    <img
                      src="../../assets/images/saifa_log.jpg"
                      class="main-logo"
                      alt="main-logo"
                    />
                    <img
                      src="../../assets/images/white-logo.png"
                      class="d-none white-logo"
                      alt="white-logo"
                    />
                    </div>
                  </router-link>
                  <div>
                    <button
                      class="border-0 p-0 bg-transparent js-sidebar-expand flex-grow-1 ms-3 text-sm-end menu-bergur"
                      @click="stateStoreInstance.onChange"
                    >
                      <div
                        id="closeBtn"
                        @click="toggleButtonVisibility('openBtn')"
                        v-show="showOpenBtn"
                      >
                        <vue-feather type="menu"></vue-feather>
                      </div>
                      <div
                        id="openBtn"
                        @click="toggleButtonVisibility('closeBtn')"
                        v-show="showCloseBtn"
                      >
                        <vue-feather type="x"></vue-feather>
                      </div>
                    </button>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-5">
          <div class="float-lg-end float-md-end">
            <ul
              class="right-header-content list-unstyled d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center mb-0 ps-0"
            >

              <li >
                <div class="dropdown user-profile">
                  <a
                    href="#"
                    class="d-flex align-items-center user-control text-decoration-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="flex-shrink-0" style="margin-right: 20px">
<!--                      <img-->
<!--                        class="rounded-circle"-->
<!--                        src="../../assets/images/user/user-1.jpg"-->
<!--                        alt="user-1"-->
<!--                      />-->
                      <vue-feather type="user" class="menu-icon tf-icons"></vue-feather>
                    </div>
                    <div class="flex-grow-1 ms-3" >
                      <div
                        class="d-flex align-items-center justify-content-between"
                      >
                        <div v-if="userId" class="me-5 d-none d-lg-block">
                          <h3> {{userName}}</h3>
                          <span>role : Admin</span>
                        </div>
                        <div v-else class="me-5 d-none d-lg-block">
                          <h3>Need Login {{userId}}</h3>
                          <span>role : -</span>
                        </div>

                        <i v-if="userId" class="ri-arrow-down-s-line"></i>
                      </div>
                    </div>
                  </a>

                  <ul class="dropdown-menu border-0 box-shadow rounded-0">
                    <li class="me-0">
                      <router-link
                          v-if="userId"
                          :to="{name:'UserDetails', params: { id: userId } }"
                        class="dropdown-item d-flex align-items-center text-body"
                      >
                        <vue-feather
                          type="user"
                          class="text-primary"
                        ></vue-feather>
                        <span class="ms-2 text-dark">Profile</span>
                      </router-link>
                    </li>
                    <li class="me-0">
                      <router-link
                        class="dropdown-item d-flex align-items-center text-body"
                        to="/log-out"
                      >
                        <vue-feather
                          type="log-out"
                          class="text-primary"
                        ></vue-feather>
                        <span class="ms-2 text-dark">Logout</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "../../utils/store";
import {useAccountStore} from '@/stores/account'
import { watchEffect } from 'vue';

export default defineComponent({
  name: "MainHeader",
  setup() {
    const localAccountStore = useAccountStore()

    // Reactive properties
    const showOpenBtn = ref(true);
    const showCloseBtn = ref(false);
    const lastLoginTime = ref(0);
    const formattedDate = ref("");
    const lastLogintime = ref(0);
    const userId = ref("");
    const userName = ref("");
    const role = ref("");

    lastLogintime.value = localAccountStore.lastLoginTime

    watchEffect(() => {
      userId.value = localAccountStore.userId;
      userName.value = localAccountStore.userName;
      role.value = localAccountStore.role;
    });

    // Methods
    const toggleButtonVisibility = (buttonId) => {
      if (buttonId === "openBtn") {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
        // Perform any other actions you want after clicking "open"
      } else if (buttonId === "closeBtn") {
        showOpenBtn.value = true;
        showCloseBtn.value = false;
        // Perform any other actions you want after clicking "close"
      }
    };

    const startLiveCall = () => {
      alert("ok start live call")
      return '';
    };

    // Other setup logic
    const stateStoreInstance = stateStore;

    onMounted(() => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentDate = new Date();
      formattedDate.value = `${currentDate.getDate()} ${
          months[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`;
    });

    // Return all reactive properties and methods
    return {
      userId,
      userName,
      role,
      lastLogintime,
      showOpenBtn,
      showCloseBtn,
      lastLoginTime,
      toggleButtonVisibility,
      startLiveCall,
      stateStoreInstance,
      formattedDate
    };
  },
});
</script>
