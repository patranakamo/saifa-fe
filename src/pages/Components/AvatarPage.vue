<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div class="row justify-content-center">
        <div class="col-xxl-4">
          <StatusAvatar />
        </div>
        <div class="col-xxl-4">
          <SingleUserAvatar />
        </div>
        <div class="col-xxl-4">
          <GroupUserAvatar />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <AvatarSizeRoundedCircle />
        </div>
        <div class="col-xxl-6">
          <AvatarSizeRoundedSquare />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Circular</h4>
              <img
                class="rounded-circle wh-50"
                src="../../assets/images/user/user-27.jpg"
                alt="user-27"
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Square</h4>
              <img
                class="wh-50"
                src="../../assets/images/user/user-34.jpg"
                alt="user-34"
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-4">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="text-dark fs-18 fw-medium mb-3">Soft</h4>
              <img
                class="rounded-1 wh-50"
                src="../../assets/images/user/user-35.jpg"
                alt="user-35"
              />
            </div>
          </div>
        </div>
      </div>

      <SizeAndColors />

      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatusAvatar from "../../components/Components/Avatar/StatusAvatar.vue";
import SingleUserAvatar from "../../components/Components/Avatar/SingleUserAvatar.vue";
import GroupUserAvatar from "../../components/Components/Avatar/GroupUserAvatar.vue";
import AvatarSizeRoundedCircle from "../../components/Components/Avatar/AvatarSizeRoundedCircle.vue";
import AvatarSizeRoundedSquare from "../../components/Components/Avatar/AvatarSizeRoundedSquare.vue";
import SizeAndColors from "../../components/Components/Avatar/SizeAndColors.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AvatarPage",
  components: {
    StatusAvatar,
    SingleUserAvatar,
    GroupUserAvatar,
    AvatarSizeRoundedCircle,
    AvatarSizeRoundedSquare,
    SizeAndColors,
    MainFooter,
  },
});
</script>