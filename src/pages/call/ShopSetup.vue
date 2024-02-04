<script setup>
import {useShopStore} from '@/stores/shop'
import {onMounted, reactive, ref} from 'vue'
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter();

const localuseConfigStore = useShopStore();

const editConfig = reactive({
  start: '',
  end: '',
  newaction: ''
})

const selectedOption = ref(3)

onMounted(async () => {
  try {
    await loadConfig()
  } catch (error) {
    console.log('error', error)
  }
})
const loadConfig = async () => {
  await localuseConfigStore.loadConfig(router)
}
const updateConfigja = async () => {
  await localuseConfigStore.updateConfig(editConfig)
  loadConfig()
}
const updateConfig = async () => {
  await localuseConfigStore.updateShopConfig()
}

</script>

<template>

  <div class="container-fluid">
    <div class="row">

      <div class="col-lg-8">
        <div class="card border-0 box-shadow border-radius-10 mb-4">
          <div class="card-body p-4">
            <h3 class="fw-medium fs-18 mb-4">Shop Name:</h3>
            <div style="padding: 10px; padding-bottom: 20px">
              This shop serves as a label for all payments made to this lnd Node. This way, you can easily track which payment corresponds to which shop.
              After adding the list of shop names, they will appear as options for shops when creating a new invoice, and will be included in the invoice details once the invoice is generated.
              <div>
              Note: The shop name is not linked to any Bitcoin wallet address.
              </div>
            </div>

            <div v-if="localuseConfigStore.selectedOptionOpen === 'open' " class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Select Number of Shop Used for this Node.</label>
                  <select
                      v-model="localuseConfigStore.selectedOption"
                      class="form-select form-control"
                      aria-label="Default select example"
                  >
                    <option
                        v-for="number in 20"
                        :key="number"
                        :value="number"
                    > {{ number }} shop</option>
                  </select>
                </div>
              </div>


              <div class="col-lg-12" v-for="n in localuseConfigStore.numberOfInputs" :key="n">
                <div class="form-group mb-0">
                  <label class="label">Shop Name : {{ n + 1 }}</label>
                  <input
                      type="text"
                      class="form-control"
                      placeholder="enter shop name here"
                      v-model="localuseConfigStore.inputValues[n]"
                  />
                </div>
              </div>


            </div>
            <a href="#">
              <div class="col-lg-12" style="margin-top:20px">
                <button @click="updateConfig()" class="default-btn">Update</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-control{
  color: #1b1f22;
}
</style>