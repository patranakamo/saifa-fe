<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div
        class="card-title d-flex justify-content-between align-items-center mb-3"
      >
        <h3 class="fw-medium fs-18 mb-0">Recent Order</h3>

        <select
          class="form-select border-0"
          aria-label="Default select example"
        >
          <option selected>This Month</option>
          <option value="1">Last Month</option>
          <option value="2">This Year</option>
          <option value="3">Last Year</option>
        </select>
      </div>

      <div class="all-table scroll-bar h-608">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Order # ID
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Product
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Customer
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Quantity
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Price
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Date
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Vendor
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Status
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="ps-0">
                <span class="text-body">{{ order.orderId }}</span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img
                    class="wh-50 rounded-2"
                    :src="require(`../../../../assets/images/${order.image}`)"
                    alt="product-9"
                  />
                  <h3 class="fs-14 text-dark ms-3 mb-0">{{ order.title }}</h3>
                </div>
              </td>
              <td>
                <span class="text-body">{{ order.customer }}</span>
              </td>
              <td>
                <span class="text-body">{{ order.quantity }}</span>
              </td>
              <td>
                <span class="text-body">${{ order.price }}</span>
              </td>
              <td>
                <span class="text-body">{{ order.date }}</span>
              </td>
              <td>
                <span class="text-body">{{ order.vendor }}</span>
              </td>
              <td>
                <span :class="computeClass(order.status)">
                  {{ order.status }}
                </span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="eye"></vue-feather>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
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
import recentOrder from "./recentOrder.json";

export default defineComponent({
  name: "RecentOrder",
  data() {
    return {
      orders: recentOrder,
    };
  },
  setup() {
    const wordDelivered = ref("Delivered");
    const wordPending = ref("Pending");
    const wordOutOfStock = ref("Out of stock");

    const computeClass = (classValue: string) => {
      return {
        "text-success": wordDelivered.value === classValue,
        "text-primary": wordPending.value === classValue,
        "text-danger": wordOutOfStock.value === classValue,
      };
    };

    return {
      wordDelivered,
      wordPending,
      wordOutOfStock,
      computeClass,
    };
  },
});
</script>