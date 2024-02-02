<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Products Details</h3>
      </div>
      <ProductsDetails />

      <MainFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ProductsDetails from "../../components/Ecommerce/ProductsDetails/ProductsDetails.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
import {useTodoStore} from '../../stores/todo'

const localTodoStore = useTodoStore()
onMounted(async () => {
  await localTodoStore.loadTodos()
  // loadDone.value = true
})

// export default defineComponent({
//   name: "ProductsDetailsPage",
//   components: {
//     ProductsDetails,
//     MainFooter,
//   },
// });

</script>