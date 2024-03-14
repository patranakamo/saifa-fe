<template>
  <div class="container-fluid">
    <div class="inner-main-content">
      <div
          class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Token Details</h3>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">

              <h3 class="fw-medium fs-18 mb-4">Token Details</h3>
              <div class="d-flex justify-content-between border-bottom mb-4">
                <h4 class="text-dark fs-14 fw-medium"></h4>
                <h4 class="text-dark fs-14 fw-medium"></h4>
              </div>
              <ul class="ps-0 mb-0 list-unstyled">
                <li class="d-flex justify-content-between align-items-center mb-4">
                  <span class="text-body fs-14">Token:</span>
                  <span class="right-details text-dark fs-14 fw-medium"> {{ token }}</span>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">Expiration date:</span>
                  <span class="right-details">
                    <select v-model="tokenStore.tokenSelect.expireMode" class="form-select form-control">
                         <option value="no">Never</option>
                         <option value="yes">Set Date</option>
                    </select>
                  </span>

                </li>

                <div v-if="tokenStore.tokenSelect.expireMode === 'yes'">
                  <CalendarContentExpire></CalendarContentExpire>

                  <li class="li-select d-flex justify-content-between align-items-center mb-4">
                    <span class="topic_select text-body fs-14">Expiration date you select :</span>
                    <span class="right-details">
                    {{ tokenStore.tokenSelect.expire }}
                  </span>
                  </li>
                </div>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">Token Status :</span>
                  <span class="right-details">
                    <select v-model="tokenStore.tokenSelect.status" class="form-select form-control">
                      <option value="open">Open</option>
                      <option value="close">Close</option>
                    </select>
                  </span>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">Allow connection source :</span>
                  <span class="right-details">
                    <select v-model="tokenStore.tokenSelect.allowSourceNum" class="form-select form-control">
                      <option value=0>All</option>
                       <option value=1>1 Allow Source</option>
                       <option value=2>2 Allow Source</option>
                       <option value=3>3 Allow Source</option>
                       <option value=4>4 Allow Source</option>
                       <option value=5>5 Allow Source</option>
                    </select>
                    </span>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">CURL full command for used this token: </span>
                  <span class="right-details">
                    {{curl}}
                  </span>>
                </li>

                <li class="li-select d-flex justify-content-between align-items-center mb-4">
                  <span class="topic_select text-body fs-14">copy curl by this btn: </span>
                  <span class="right-details">
                    <button @click="copyCurlCommand()" class="default-btn border-btn ms-3" >Copy CURL</button>
                  </span>
                </li>

                <div v-if="tokenStore.tokenSelect.allowSourceNum > 0" style="padding: 10px">
                  <div class="col-lg-12" v-for="n in tokenStore.numberOfInputs" :key="n">
                    <div class="form-group mb-0">
                      <label class="label">Allow IP or domain for used this token</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="enter ip here"
                          v-model="tokenStore.tokenSelect.allowSource[n]"
                      />
                    </div>
                  </div>
                </div>

              </ul>

              <div class="col-sm-10">
                <div class="form-group mb-0 d-flex">

                  <button @click="updateToken()" class="default-btn">Save</button>

                  <router-link :to="{name:'TokenList' }">
                    <button class="default-btn border-btn ms-3"> Cancel</button>
                  </router-link>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <RecentUsedToken :tokenLog=tokenStore.tokenLog></RecentUsedToken>
        </div>
      </div>

      <MainFooter/>
    </div>
  </div>
</template>

<script setup>
import RecentUsedToken from "../../components/Ecommerce/OrdersDetails/RecentUsedToken.vue";
import MainFooter from "../../components/Layouts/MainFooter.vue";
// import CalendarContent from "@/components/Widgets/CalendarContent.vue";
import CalendarContentExpire from "@/components/Widgets/CalendarContentExpire.vue";

import {usedTokenStore} from '@/stores/token'

const tokenStore = usedTokenStore()

import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import toastr from "toastr";

const route = useRoute()
const router = useRouter();
const token = ref('new')
const curl = ref('')

onMounted(async () => {
  if (route.params.id) {
    token.value = route.params.id
    await tokenStore.loadToken(route.params.id)
    const urlObject = new URL(window.location.href);
    const currentDomain = urlObject.hostname;
    curl.value = `curl -H "Authorization: Bearer ${token.value}" "${currentDomain}:9988/v1/invoices?mode=desc&page=1&perPage=10&search=" `;
  }
})
const copyCurlCommand = async () => {
  try {
    //await navigator.clipboard.writeText(curl.value);
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement("textarea");
    textArea.value = curl.value;
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";
    document.body.prepend(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }

    toastr.success('CURL command copied to clipboard!')
  } catch (err) {
    console.error('error in : copyTextToClipboard ', err);
  }
};

const updateToken = async () => {
  if (await tokenStore.updateToken(token.value)) {
    toastr.success('update token ' + token.value + " success!")
    await tokenStore.loadTokens()
    setTimeout(() => {
      router.push({name: 'TokenList'});
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

</style>