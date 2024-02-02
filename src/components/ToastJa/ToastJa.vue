<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  message: String,
  status: String
})

console.log(props.message);

import toastr from 'toastr';

const showSuccessToast = () => {
  toastr.success('This is a success message!');
  toastr.error('This is a error message!');
  toastr.info('This is a error message!');
};
</script>
<template>
  <div style="position: absolute; z-index: 9999">
    <button @click="showSuccessToast">Show Success Toast</button>
  </div>
</template>
<!--<template>-->
<!--  <div class="m-toast z-10">-->
<!--    <div :class="`alert alert-${status}`">-->
<!--      <span>{{ message }} {{ status }}</span>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<style>-->
<!--.m-toast {-->
<!--  min-width: 200px;-->
<!--  min-height: 120px;-->
<!--  background-color: #1b1f22;-->
<!--  position: absolute;-->
<!--  z-index: 222;-->

<!--  color: #155724;-->
<!--  background-color: #d4edda;-->
<!--  border-color: #c3e6cb;-->
<!--  font-size: 20px;-->
<!--  border-radius: 4px;-->
<!--}-->
<!--.alert {-->
<!--  position: relative;-->
<!--  padding: 0.75rem 1.25rem;-->
<!--  margin-bottom: 1rem;-->
<!--  border: 1px solid transparent;-->
<!--  border-radius: 0.25rem;-->
<!--}-->
<!--</style>-->