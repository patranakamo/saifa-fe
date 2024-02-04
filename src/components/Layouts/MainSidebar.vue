<template>
  <div id="SidebarLightMode" class="sidebar-area">
    <div
      id="accordionExample"
      class="layout-menu menu-vertical menu bg-menu-theme scroll-bar active hv-100"
    >
      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner">
<!--        <li class="menu-item">-->
<!--          <a-->
<!--            href="javascript:void(0);"-->
<!--            class="menu-link menu-toggle"-->
<!--            data-bs-toggle="collapse"-->
<!--            data-bs-target="#collapse1"-->
<!--            aria-expanded="true"-->
<!--            aria-controls="collapse1"-->
<!--          >-->
<!--            <vue-feather type="grid" class="menu-icon tf-icons"></vue-feather>-->
<!--            <span class="title">Dashboard</span>-->
<!--          </a>-->

<!--          <ul-->
<!--            id="collapse1"-->
<!--            class="menu-sub collapse show"-->
<!--            data-bs-parent="#accordionExample"-->
<!--          >-->
<!--            <li class="menu-item">-->
<!--              <router-link to="/" class="menu-link">-->
<!--                Project Management-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <router-link to="/e-commerce" class="menu-link">-->
<!--                E-Commerce-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <router-link to="/analytics" class="menu-link">-->
<!--                Analytics-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="menu-item mb-0">-->
<!--              <router-link-->
<!--                to="/crm"-->
<!--                class="menu-link d-flex justify-content-between align-items-center"-->
<!--              >-->
<!--                CRM-->
<!--                <span class="bg-primary text-white rounded-1 fs-12 px-2">-->
<!--                  Hot-->
<!--                </span>-->
<!--              </router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </li>-->

        <div class="small head-menu">
          <div class="menu-header-text fs-14 text-white">Shop</div>
        </div>

        <li class="menu-item">
          <router-link :to="{name:'ProjectManagementPage'}" class="menu-link">
            <vue-feather type="grid" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Dashboard</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'InvoiceList'}" class="menu-link">
            <vue-feather type="shopping-bag" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Invoice</span>
          </router-link>
        </li>

        <div class="small head-menu">
          <div class="menu-header-text fs-14 text-white">Setup</div>
        </div>

        <li class="menu-item">
          <router-link :to="{name:'ShopSetup'}" class="menu-link">
            <vue-feather type="shopping-cart" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Shop Setup</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'WebhookRouting'}" class="menu-link">
            <vue-feather type="settings" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Webhook Routing</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'TokenList'}" class="menu-link">
            <vue-feather type="unlock" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Access Token</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'UserList'}" class="menu-link">
            <vue-feather type="users" class="menu-icon tf-icons"></vue-feather>
            <span class="title">User</span>
          </router-link>
        </li>

        <div class="small head-menu">
          <div class="menu-header-text fs-14 text-white"></div>
        </div>

        <li class="menu-item pb-85">
          <router-link to="/log-out" class="menu-link">
            <vue-feather type="power" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Logout</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSidebar",
};
</script>
<style scoped>
.head-menu{
  padding: 10px;padding-bottom: 20px;
}
</style>