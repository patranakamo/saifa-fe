import {createWebHistory, createRouter} from "vue-router";

import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import StarterPage from "../pages/StarterPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import AccountSettingsPage from "../pages/Setting/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Setting/ChangePasswordPage.vue";
import WebhookRouting from "../pages/call/WebhookRouting.vue";
import TokenList from "../pages/call/TokenPage.vue";
import TokenDetails from "../pages/call/TokenPageDetails.vue";
import UserList from "../pages/call/UserPage.vue";
import UserDetails from "../pages/call/UserDetails.vue";
import InvoiceList from "../pages/call/InvoiceList.vue";
import InvoiceDetails from "../pages/call/InvoiceDetails.vue";
// import FaqPage from "../pages/FaqPage.vue";
// import SettingPage from "../pages/Social/SettingPage.vue";

const routes = [
    {
        path: "/",
        name: "ProjectManagementPage",
        component: ProjectManagementPage,
    },
    {
        path: "/starter",
        name: "StarterPage",
        component: StarterPage,
    },
    {
        path: "/sign-in",
        name: "SignInPage",
        component: SignInPage,
    },
    {
        path: "/log-out",
        name: "LogOutPage",
        component: LogOutPage,
    },
    {
        path: "/account-settings",
        name: "AccountSettingsPage",
        component: AccountSettingsPage,
    },
    {
        path: "/change-password",
        name: "ChangePasswordPage",
        component: ChangePasswordPage,
    },
    {
        path: "/webhook-routing",
        name: "WebhookRouting",
        component: WebhookRouting,
    },
    {
        path: "/tokens",
        name: "TokenList",
        component: TokenList,
    },
    {
        path: "/token/:id",
        name: "TokenDetails",
        component: TokenDetails,
    },
    {
        path: "/users",
        name: "UserList",
        component: UserList,
    },
    {
        path: "/user/:id",
        name: "UserDetails",
        component: UserDetails,
    },
    {
        path: "/invoices",
        name: "InvoiceList",
        component: InvoiceList,
    },
    {
        path: "/invoice/:id",
        name: "InvoiceDetails",
        component: InvoiceDetails,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "ErrorPage",
        component: ErrorPage
    }
    // {
    //     path: "/setting",
    //     name: "SettingPage",
    //     component: SettingPage,
    // },
    // {
    //     path: "/faq",
    //     name: "FaqPage",
    //     component: FaqPage,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes: routes,
    scrollBehavior() {
        return {top: 0, behavior: "smooth"};
    },
});

import {useAccountStore} from '@/stores/account'

router.beforeEach(async (to, from, next) => {
    const accountStore = useAccountStore()
    await accountStore.checkAuth()
    if (accountStore.userId !== "") {
        //already login
        if (to.name == 'SignInPage') {
            next({name: 'ProjectManagementPage'})
        } else {
            next()
        }
    } else {
        if (to.name != 'SignInPage') {
            next({name: 'SignInPage'})
        } else {
            next()
        }
    }
})
export default router;