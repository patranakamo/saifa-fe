<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4 transaction">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Transaction History</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Week</option>
          <option value="1">Last Week</option>
          <option value="2">This Month</option>
          <option value="3">Last Month</option>
        </select>
      </div>

      <div class="scroll-bar h-452">
        <table class="table align-middle mb-0 transaction-table">
          <tbody>
            <tr
              class="mb-3"
              v-for="transaction in transactions"
              :key="transaction.id"
            >
              <td class="ps-0">
                <div class="d-flex align-items-center">
                  <img
                    class="wh-40 rounded-circle"
                    :src="
                      require(`../../../../assets/images/${transaction.image}`)
                    "
                    alt="user-15"
                  />
                  <div class="ms-3">
                    <h3 class="fs-14 text-dark">{{ transaction.name }}</h3>
                    <span class="text-body">
                      ID {{ transaction.transactionId }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <span class="text-dark">${{ transaction.price }}</span>
              </td>
              <td class="text-end">
                <span :class="computeClass(transaction.status)">{{
                  transaction.status
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import transactionHistory from "./transactionHistory.json";

export default defineComponent({
  name: "TransactionHistory",
  data() {
    return {
      transactions: transactionHistory,
    };
  },
  setup() {
    const wordCompleted = ref("Completed");
    const wordInProgress = ref("In Progress");
    const wordCancelled = ref("Cancelled");

    const computeClass = (classValue: string) => {
      return {
        "text-success": wordCompleted.value === classValue,
        "text-primary": wordInProgress.value === classValue,
        "text-danger": wordCancelled.value === classValue,
      };
    };

    return {
      wordCompleted,
      wordInProgress,
      wordCancelled,
      computeClass,
    };
  },
});
</script>