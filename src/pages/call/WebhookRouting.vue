<script setup>
import {useConfigStore} from '@/stores/config'
import {onMounted, reactive, ref} from 'vue'
import {RouterLink} from 'vue-router'

const localuseConfigStore = useConfigStore();
const loaded = ref(false)
const showError = ref(false)

onMounted(async () => {
  try {
    await loadConfig()
  } catch (error) {
    console.log('error', error)
  }
})
const loadConfig = async () => {
  showError.value = await localuseConfigStore.loadConfig()
  loaded.value = true
}
const updateConfigja = async () => {
  await localuseConfigStore.updateConfig()
  loadConfig()
}
const updateConfigReTry = async () => {
  await localuseConfigStore.updateConfigRetryTime()
}

</script>

<template>

  <div class="container-fluid">
    <div class="row" v-if="loaded">
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
                    <input type="text" v-model="localuseConfigStore.webHookUrl" class="form-control"
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
                  <label class="col-sm-2 col-form-label label">Auth Webhook option</label>
                  <div class="col-sm-10">
                    <select v-model="localuseConfigStore.authOption" class="form-select form-control">
                      <option value="close">Webhook No Auth</option>
                      <option value="bearer">Webhook used normal Authorization (Bearer)</option>
                      <option value="customized">Webhook used customized api header key or token</option>
                    </select>
                  </div>
                </div>

                <div v-if="localuseConfigStore.authOption === 'bearer'" class="row mb-4">
                  <label class="col-sm-2 col-form-label label">Authorization (Bearer)</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="localuseConfigStore.bearer" class="form-control"
                           placeholder="add you Bearer token here for webhook call update data"/>
                  </div>
                </div>

                <div v-if="localuseConfigStore.authOption === 'customized'" class="row mb-4">
                  <label class="col-sm-2 col-form-label label">Header Api Key</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="localuseConfigStore.header_key" class="form-control"
                           placeholder="add you Bearer token here for webhook call update data"/>
                  </div>
                </div>
                <div v-if="localuseConfigStore.authOption === 'customized'" class="row mb-4">
                  <label class="col-sm-2 col-form-label label">Api or token key for auth webhook</label>
                  <div class="col-sm-10">
                    <input type="text" v-model="localuseConfigStore.api_key" class="form-control"
                           placeholder="add you Bearer token here for webhook call update data"/>
                  </div>
                </div>

                <div class="row mb-4">
                  <label class="col-sm-2 col-form-label label">Internal note:</label>
                  <div class="col-sm-10">
          <textarea
              class="form-control"
              placeholder="this url is node js app run on same server port 3000"
              cols="30"
              rows="10"
              v-model="localuseConfigStore.internal_note"
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
    <div class="row" v-else>
      <div v-if="!showError">loading</div>
      <div v-else>unable to load config.</div>
    </div>
  </div>
</template>
<style scoped>
.form-control {
  color: #1b1f22;
}
</style>