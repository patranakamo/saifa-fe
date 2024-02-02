<template>
  <div id="SidebarLightMode" class="sidebar-area">
    <div
      id="accordionExample"
      class="layout-menu menu-vertical menu bg-menu-theme scroll-bar active hv-100"
    >
      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner">
        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            <vue-feather type="grid" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Dashboard</span>
          </a>

          <ul
            id="collapse1"
            class="menu-sub collapse show"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/" class="menu-link">
                Project Management
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/e-commerce" class="menu-link">
                E-Commerce
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/analytics" class="menu-link">
                Analytics
              </router-link>
            </li>
            <li class="menu-item mb-0">
              <router-link
                to="/crm"
                class="menu-link d-flex justify-content-between align-items-center"
              >
                CRM
                <span class="bg-primary text-white rounded-1 fs-12 px-2">
                  Hot
                </span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text fs-14 text-white">Call</span>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'WebhookRouting'}" class="menu-link">
            <vue-feather type="settings" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Webhook Routing</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{name:'CallList'}" class="menu-link">
            <vue-feather type="phone-call" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Last Call Log</span>
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
        <li class="menu-item">
          <router-link :to="{name:'InvoiceList'}" class="menu-link">
            <vue-feather type="shopping-bag" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Invoice</span>
          </router-link>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text fs-14 text-white">Apps</span>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            <vue-feather
              type="file-text"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Project Management</span>
          </a>
          <ul
            id="collapse2"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/overview" class="menu-link">
                Overview
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/project-list" class="menu-link">
                Project List
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/project-create" class="menu-link">
                Project Create
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/clients" class="menu-link">
                Clients
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/teams" class="menu-link"> Teams </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/kanban-board" class="menu-link">
                Kanban Board
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/user" class="menu-link"> User </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            <vue-feather
              type="shopping-cart"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">E-Commerce</span>
          </a>
          <ul
            id="collapse3"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/products" class="menu-link">
                Products
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/product-details" class="menu-link">
                Product Details
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/orders" class="menu-link"> Orders </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/orders-details" class="menu-link">
                Orders Details
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/customers" class="menu-link">
                Customers
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/shopping-cart" class="menu-link">
                Shopping Cart
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/checkout" class="menu-link">
                Checkout
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/sellers" class="menu-link">
                Sellers
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/add-product" class="menu-link">
                Add Product
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/refund" class="menu-link"> Refund </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/website-traffic" class="menu-link">
            <vue-feather
              type="bar-chart"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Website Traffic</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/chat" class="menu-link">
            <vue-feather
              type="message-square"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Chat</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            <vue-feather type="mail" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Email</span>
          </a>
          <ul
            id="collapse4"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/inbox" class="menu-link"> Inbox </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/read-email" class="menu-link">
                Read Email
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/compose" class="menu-link">
                Compose
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            <vue-feather type="mail" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Events</span>
          </a>
          <ul
            id="collapse5"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/create-an-event" class="menu-link">
                Create an Event
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/event-details" class="menu-link">
                Event Details
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-expanded="false"
            aria-controls="collapse6"
          >
            <vue-feather
              type="share-2"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Social</span>
          </a>
          <ul
            id="collapse6"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/profile" class="menu-link">
                Profile
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/setting" class="menu-link">
                Setting
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="false"
            aria-controls="collapse7"
          >
            <vue-feather
              type="clipboard"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Invoice</span>
          </a>
          <ul
            id="collapse7"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/invoice-list" class="menu-link">
                Invoice List
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/invoice-details" class="menu-link">
                Invoice Details
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/file-manager" class="menu-link">
            <vue-feather type="file" class="menu-icon tf-icons"></vue-feather>
            <span class="title">File Manager</span>
          </router-link>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text fs-14 text-white">Pages</span>
        </li>

        <li class="menu-item">
          <router-link to="/starter" class="menu-link">
            <vue-feather type="star" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Starter</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/pricing" class="menu-link">
            <vue-feather
              type="package"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Pricing</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/faq" class="menu-link">
            <vue-feather
              type="help-circle"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">FAQ</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/notifications" class="menu-link">
            <vue-feather
              type="alert-circle"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Notifications</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            <vue-feather type="user" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Users</span>
          </a>
          <ul
            id="collapse8"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/team-member" class="menu-link">
                Team Member
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/user-list" class="menu-link">
                User List
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/add-user" class="menu-link">
                Add User
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-expanded="false"
            aria-controls="collapse9"
          >
            <vue-feather type="user" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Profile</span>
          </a>
          <ul
            id="collapse9"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/user-profile" class="menu-link">
                User Profile
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/teams" class="menu-link"> Teams </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/projects" class="menu-link">
                Projects
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/error" class="menu-link">
            <vue-feather
              type="alert-octagon"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Error</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/icon" class="menu-link">
            <vue-feather
              type="feather"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Icon</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse10"
            aria-expanded="false"
            aria-controls="collapse10"
          >
            <vue-feather type="unlock" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Authentications</span>
          </a>
          <ul
            id="collapse10"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/sign-in" class="menu-link">
                Sign In
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/sign-up" class="menu-link">
                Sign Up
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/reset-password" class="menu-link">
                Reset Password
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forget-password" class="menu-link">
                Forget Password
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/lock-screen" class="menu-link">
                Lock Screen
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/log-out" class="menu-link">
                Log Out
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/confirm-mail" class="menu-link">
                Confirm Mail
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/timeline" class="menu-link">
            <vue-feather
              type="activity"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Timeline</span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/members" class="menu-link">
            <vue-feather type="users" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Members</span>
          </router-link>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text fs-14 text-white">Modules</span>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse11"
            aria-expanded="false"
            aria-controls="collapse11"
          >
            <vue-feather
              type="message-circle"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Form</span>
          </a>
          <ul
            id="collapse11"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/form-layout" class="menu-link">
                Form Layout
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/form-elements" class="menu-link">
                Form Elements
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/form-components" class="menu-link">
                Form Components
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/form-validation" class="menu-link">
                Form Validation
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse12"
            aria-expanded="false"
            aria-controls="collapse12"
          >
            <vue-feather
              type="command"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Components</span>
          </a>
          <ul
            id="collapse12"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/alerts" class="menu-link"> Alerts </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/avatar" class="menu-link"> Avatar </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/buttons" class="menu-link">
                Buttons
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/badges" class="menu-link"> Badges </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/cards" class="menu-link"> Cards </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/dropdowns" class="menu-link">
                Dropdowns
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/grids" class="menu-link"> Grids </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/images" class="menu-link"> Images </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/list" class="menu-link"> List </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/modals" class="menu-link"> Modals </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/navs" class="menu-link"> Navs </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/paginations" class="menu-link">
                Paginations
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/popover-tooltips" class="menu-link">
                Popover & Tooltips
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/progress" class="menu-link">
                Progress
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/spinners" class="menu-link">
                Spinners
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/tabs-accordions" class="menu-link">
                Tabs Accordions
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/videos" class="menu-link"> Videos </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse13"
            aria-expanded="false"
            aria-controls="collapse13"
          >
            <vue-feather type="table" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Table</span>
          </a>
          <ul
            id="collapse13"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/basic-table" class="menu-link">
                Basic Table
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/data-table" class="menu-link">
                Data Table
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse14"
            aria-expanded="false"
            aria-controls="collapse14"
          >
            <vue-feather
              type="sliders"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Extended UI</span>
          </a>
          <ul
            id="collapse14"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/range-slider" class="menu-link">
                Range Slider
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ratings" class="menu-link">
                Ratings
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/scrollbar" class="menu-link">
                Scrollbar
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/widgets" class="menu-link">
            <vue-feather type="layers" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Widgets</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse15"
            aria-expanded="false"
            aria-controls="collapse15"
          >
            <vue-feather
              type="pie-chart"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Charts</span>
          </a>
          <ul
            id="collapse15"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/apexcharts" class="menu-link">
                Apexcharts
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/amcharts" class="menu-link">
                Amcharts
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse16"
            aria-expanded="false"
            aria-controls="collapse16"
          >
            <vue-feather type="map" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Maps</span>
          </a>
          <ul
            id="collapse16"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/google-maps" class="menu-link">
                Google Maps
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/leaflet-maps" class="menu-link">
                Leaflet Maps
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/calendar" class="menu-link">
            <vue-feather
              type="calendar"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Calendar</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse17"
            aria-expanded="false"
            aria-controls="collapse17"
          >
            <vue-feather
              type="settings"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Setting</span>
          </a>
          <ul
            id="collapse17"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/account-settings" class="menu-link">
                Account Settings
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/change-password" class="menu-link">
                Change Password
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/connections" class="menu-link">
                Connections
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/privacy-policy" class="menu-link">
                Privacy Policy
              </router-link>
            </li>
          </ul>
        </li>

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