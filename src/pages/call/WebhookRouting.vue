<script setup>
import {useConfigStore} from '@/stores/config'
import {onMounted, reactive, ref} from 'vue'
import {RouterLink} from 'vue-router'
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter();

const localuseConfigStore = useConfigStore();

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
  editConfig.start = localuseConfigStore.listWebHook.web_hook_url_start
  editConfig.end = localuseConfigStore.listWebHook.web_hook_url_end
  editConfig.newaction = localuseConfigStore.listWebHook.web_hook_url_newaction
  editConfig.update_invoice = localuseConfigStore.listWebHook.web_hook_url_update_invoice
}
const updateConfigja = async () => {
  await localuseConfigStore.updateConfig(editConfig)
  loadConfig()
}
const updateConfigReTry = async () => {
  await localuseConfigStore.updateConfigRetryTime()
}

</script>

<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row justify-content-center">
          <div class="col-xxl-12">
            <div class="card border-0 box-shadow border-radius-10 mb-4">
              <div class="card-body p-4">
                <h4 class="text-dark fs-18 fw-medium mb-3">Webhook URL Routing config</h4>

<!--                <div class="row mb-4">-->
<!--                  <label class="col-sm-2 col-form-label label">URL webhook: start call</label>-->
<!--                  <div class="col-sm-10">-->
<!--                    <input type="text" v-model="editConfig.start" class="form-control"-->
<!--                           placeholder="http://localhost:3000/start-call"/>-->
<!--                  </div>-->
<!--                </div>-->
<!--                -->
<!--                <div class="row mb-4">-->
<!--                  <label class="col-sm-2 col-form-label label">URL webhook: end call</label>-->
<!--                  <div class="col-sm-10">-->
<!--                    <input-->
<!--                        v-model="editConfig.end"-->
<!--                        type="text"-->
<!--                        class="form-control"-->
<!--                        placeholder="http://localhost:3000/end-call"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--                -->
<!--                <div class="row mb-4">-->
<!--                  <label class="col-sm-2 col-form-label label">URL webhook: click start live call</label>-->
<!--                  <div class="col-sm-10">-->
<!--                    <input-->
<!--                        v-model="editConfig.newaction"-->
<!--                        type="text"-->
<!--                        class="form-control"-->
<!--                        placeholder="http://localhost:3000/new_action"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->

                <div class="row mb-4">
                  <label class="col-sm-2 col-form-label label">URL Invoice Update Status</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="editConfig.update_invoice" class="form-control"
                           placeholder="http://localhost:3000/payment_done"/>
                  </div>
                </div>

<!--                <div class="row mb-4">-->
<!--                  <label class="col-sm-2 col-form-label label">URL BackUP Invoice Update Status</label>-->
<!--                  <div class="col-sm-10">-->
<!--                    <input type="text" v-model="editConfig.start" class="form-control"-->
<!--                           placeholder="http://localhost:3000/payment_done"/>-->
<!--                  </div>-->
<!--                </div>-->

                <div class="row mb-4">
                  <label class="col-sm-2 col-form-label label">Internal note:</label>
                  <div class="col-sm-10">
          <textarea
              class="form-control"
              placeholder="this url is node js app run on same server port 3000"
              cols="30"
              rows="10"
          ></textarea>
                  </div>
                </div>
                <div class="row mb-4">
                  <label class="col-sm-2 col-form-label label"></label>
                  <div class="col-sm-10">
                    <div class="form-group mb-0 d-flex">
                      <button @click="updateConfigja()" class="default-btn">Save</button>
                      <RouterLink to="/">
                        <button class="default-btn border-btn ms-3">
                          Cancel
                        </button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card border-0 box-shadow border-radius-10 mb-4">
          <div class="card-body p-4">
            <h3 class="fw-medium fs-18 mb-4">Retry Config</h3>

            <div class="d-flex laign-items-center mb-4">
              <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="open"
                    v-model="localuseConfigStore.selectedOptionOpen"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Enable Retry
                </label>
              </div>
              <div class="form-check ms-3">
                <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="close"
                    v-model="localuseConfigStore.selectedOptionOpen"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Disable Retry
                </label>
              </div>
            </div>

            <div v-if="localuseConfigStore.selectedOptionOpen === 'open' " class="row">
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Select Number of Retry</label>
                  <select
                      v-model="localuseConfigStore.selectedOption"
                      class="form-select form-control"
                      aria-label="Default select example"
                  >
                    <option selected value="1">retry 1 time</option>
                    <option value="2">retry 2 times</option>
                    <option value="3">retry 3 times</option>
                    <option value="4">retry 4 times</option>
                    <option value="5">retry 5 times</option>
                    <option value="6">retry 6 times</option>
                  </select>
                </div>
              </div>


              <div class="col-lg-12" v-for="n in localuseConfigStore.numberOfInputs" :key="n">
                <div class="form-group mb-0">
                  <label class="label">Number Minutes Retry after Fail for {{ n + 1 }} time</label>
                  <input
                      type="number"
                      class="form-control"
                      :placeholder="(n+1) + '0 Minutes for retry ' + (n+1)"
                      v-model="localuseConfigStore.inputValues[n]"
                  />
                </div>
              </div>


            </div>
            <a href="#">
              <div class="col-lg-12" style="margin-top:20px">
                <button @click="updateConfigReTry()" class="default-btn">Update</button>
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