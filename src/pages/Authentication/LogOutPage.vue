<template>
  <div class="main-content p-0">
    <div class="container-fluid">
      <LogOut />
      <MainFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LogOut from "../../components/Authentication/LogOut/LogOut.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
import { useAccountStore } from '@/stores/account'
const accountStore = useAccountStore()
// export default defineComponent({
//   name: "LogOutPage",
//   components: {
//     LogOut,
//     MainFooter,
//   },
// });
onMounted(async () => {
  // load product when load page
  await accountStore.logout()
})
</script>