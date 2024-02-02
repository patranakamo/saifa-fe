import {createWebHistory, createRouter} from "vue-router";

import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import AnalyticsPage from "../pages/Dashboard/AnalyticsPage.vue";
import CRMPage from "../pages/Dashboard/CRMPage.vue";
import OverviewPage from "../pages/ProjectManagement/OverviewPage.vue";
import ProjectListPage from "../pages/ProjectManagement/ProjectListPage.vue";
import ProjectCreatePage from "../pages/ProjectManagement/ProjectCreatePage.vue";
import ClientsPage from "../pages/ProjectManagement/ClientsPage.vue";
import TeamsPage from "../pages/ProjectManagement/TeamsPage.vue";
import KanbanBoardPage from "../pages/ProjectManagement/KanbanBoardPage.vue";
import UserPage from "../pages/ProjectManagement/UserPage.vue";
import ProductsPage from "../pages/Ecommerce/ProductsPage.vue";
import ProductsDetailsPage from "../pages/Ecommerce/ProductsDetailsPage.vue";
import OrdersPage from "../pages/Ecommerce/OrdersPage.vue";
import OrdersDetailsPage from "../pages/Ecommerce/OrdersDetailsPage.vue";
import CustomersPage from "../pages/Ecommerce/CustomersPage.vue";
import ShippingCartPage from "../pages/Ecommerce/ShippingCartPage.vue";
import CheckoutPage from "../pages/Ecommerce/CheckoutPage.vue";
import SellersPage from "../pages/Ecommerce/SellersPage.vue";
import AddProductPage from "../pages/Ecommerce/AddProductPage.vue";
import RefundPage from "../pages/Ecommerce/RefundPage.vue";
import WebsiteTrafficPage from "../pages/WebsiteTrafficPage.vue";
import ChatPage from "../pages/ChatPage.vue";
import InboxPage from "../pages/Email/InboxPage.vue";
import ReadEmailPage from "../pages/Email/ReadEmailPage.vue";
import ComposePage from "../pages/Email/ComposePage.vue";
import CreateEventPage from "../pages/Events/CreateEventPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import ProfilePage from "../pages/Social/ProfilePage.vue";
import SettingPage from "../pages/Social/SettingPage.vue";
import InvoiceListPage from "../pages/Invoice/InvoiceListPage.vue";
import InvoiceDetailsPage from "../pages/Invoice/InvoiceDetailsPage.vue";
import FileManagerPage from "../pages/FileManagerPage.vue";
import StarterPage from "../pages/StarterPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import FaqPage from "../pages/FaqPage.vue";
import NotificationsPage from "../pages/NotificationsPage.vue";
import TeamMemberPage from "../pages/Users/TeamMemberPage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import UserProfilePage from "../pages/Profile/UserProfilePage.vue";
import ProjectsPage from "../pages/Profile/ProjectsPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import IconPage from "../pages/IconPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import SignUpPage from "../pages/Authentication/SignUpPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgetPasswordPage from "../pages/Authentication/ForgetPasswordPage.vue";
import LockScreenPage from "../pages/Authentication/LockScreenPage.vue";
import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import ConfirmMailPage from "../pages/Authentication/ConfirmMailPage.vue";
import TimelinePage from "../pages/TimelinePage.vue";
import MembersPage from "../pages/MembersPage.vue";
import FormLayoutPage from "../pages/Form/FormLayoutPage.vue";
import FormElementsPage from "../pages/Form/FormElementsPage.vue";
import FormComponentsPage from "../pages/Form/FormComponentsPage.vue";
import FormValidationPage from "../pages/Form/FormValidationPage.vue";
import AlertsPage from "../pages/Components/AlertsPage.vue";
import AvatarPage from "../pages/Components/AvatarPage.vue";
import ButtonsPage from "../pages/Components/ButtonsPage.vue";
import BadgesPage from "../pages/Components/BadgesPage.vue";
import CardsPage from "../pages/Components/CardsPage.vue";
import DropdownsPage from "../pages/Components/DropdownsPage.vue";
import GridsPage from "../pages/Components/GridsPage.vue";
import ImagesPage from "../pages/Components/ImagesPage.vue";
import ListPage from "../pages/Components/ListPage.vue";
import ModalsPage from "../pages/Components/ModalsPage.vue";
import NavsPage from "../pages/Components/NavsPage.vue";
import PaginationsPage from "../pages/Components/PaginationsPage.vue";
import PopoverTooltipsPage from "../pages/Components/PopoverTooltipsPage.vue";
import ProgressPage from "../pages/Components/ProgressPage.vue";
import SpinnersPage from "../pages/Components/SpinnersPage.vue";
import TabsAccordionsPage from "../pages/Components/TabsAccordionsPage.vue";
import VideosPage from "../pages/Components/VideosPage.vue";
import BasicTablePage from "../pages/Table/BasicTablePage.vue";
import DataTablePage from "../pages/Table/DataTablePage.vue";
import RangeSliderPage from "../pages/ExtendedUI/RangeSliderPage.vue";
import RatingsPage from "../pages/ExtendedUI/RatingsPage.vue";
import ScrollbarPage from "../pages/ExtendedUI/ScrollbarPage.vue";
import WidgetsPage from "../pages/WidgetsPage.vue";
import ApexchartsPage from "../pages/Charts/ApexchartsPage.vue";
import AmchartsPage from "../pages/Charts/AmchartsPage.vue";
import GoogleMapsPage from "../pages/Maps/GoogleMapsPage.vue";
import LeafletMapPage from "../pages/Maps/LeafletMapPage.vue";
import CalendarPage from "../pages/CalendarPage.vue";
import AccountSettingsPage from "../pages/Setting/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Setting/ChangePasswordPage.vue";
import ConnectionsPage from "../pages/Setting/ConnectionsPage.vue";
import PrivacyPolicyPage from "../pages/Setting/PrivacyPolicyPage.vue";

//real rout
import WebhookRouting from "../pages/call/WebhookRouting.vue";
import CallList from "../pages/call/CallLogPage.vue";
import CallDetails from "../pages/call/CallLogPageDetails.vue";
import TokenList from "../pages/call/TokenPage.vue";
import TokenDetails from "../pages/call/TokenPageDetails.vue";
import UserList from "../pages/call/UserPage.vue";
import UserDetails from "../pages/call/UserDetails.vue";
import InvoiceList from "../pages/call/InvoiceList.vue";
import InvoiceDetails from "../pages/call/InvoiceDetails.vue";

const routes = [
    {
        path: "/",
        name: "ProjectManagementPage",
        component: ProjectManagementPage,
    },
    {
        path: "/e-commerce",
        name: "EcommercePage",
        component: EcommercePage,
    },
    {
        path: "/analytics",
        name: "AnalyticsPage",
        component: AnalyticsPage,
    },
    {
        path: "/crm",
        name: "CRMPage",
        component: CRMPage,
    },
    {
        path: "/overview",
        name: "OverviewPage",
        component: OverviewPage,
    },
    {
        path: "/project-list",
        name: "ProjectListPage",
        component: ProjectListPage,
    },
    {
        path: "/project-create",
        name: "ProjectCreatePage",
        component: ProjectCreatePage,
    },
    {
        path: "/clients",
        name: "ClientsPage",
        component: ClientsPage,
    },
    {
        path: "/teams",
        name: "TeamsPage",
        component: TeamsPage,
    },
    {
        path: "/kanban-board",
        name: "KanbanBoardPage",
        component: KanbanBoardPage,
    },
    {
        path: "/user",
        name: "UserPage",
        component: UserPage,
    },
    {
        path: "/products",
        name: "ProductsPage",
        component: ProductsPage,
    },
    {
        path: "/product-details",
        name: "ProductsDetailsPage",
        component: ProductsDetailsPage,
    },
    {
        path: "/orders",
        name: "OrdersPage",
        component: OrdersPage,
    },
    {
        path: "/orders-details",
        name: "OrdersDetailsPage",
        component: OrdersDetailsPage,
    },
    {
        path: "/customers",
        name: "CustomersPage",
        component: CustomersPage,
    },
    {
        path: "/shopping-cart",
        name: "ShippingCartPage",
        component: ShippingCartPage,
    },
    {
        path: "/checkout",
        name: "CheckoutPage",
        component: CheckoutPage,
    },
    {
        path: "/sellers",
        name: "SellersPage",
        component: SellersPage,
    },
    {
        path: "/add-product",
        name: "AddProductPage",
        component: AddProductPage,
    },
    {
        path: "/refund",
        name: "RefundPage",
        component: RefundPage,
    },
    {
        path: "/website-traffic",
        name: "WebsiteTrafficPage",
        component: WebsiteTrafficPage,
    },
    {
        path: "/chat",
        name: "ChatPage",
        component: ChatPage,
    },
    {
        path: "/inbox",
        name: "InboxPage",
        component: InboxPage,
    },
    {
        path: "/read-email",
        name: "ReadEmailPage",
        component: ReadEmailPage,
    },
    {
        path: "/compose",
        name: "ComposePage",
        component: ComposePage,
    },
    {
        path: "/create-an-event",
        name: "CreateEventPage",
        component: CreateEventPage,
    },
    {
        path: "/event-details",
        name: "EventDetailsPage",
        component: EventDetailsPage,
    },
    {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage,
    },
    {
        path: "/setting",
        name: "SettingPage",
        component: SettingPage,
    },
    {
        path: "/invoice-list",
        name: "InvoiceListPage",
        component: InvoiceListPage,
    },
    {
        path: "/invoice-details",
        name: "InvoiceDetailsPage",
        component: InvoiceDetailsPage,
    },
    {
        path: "/file-manager",
        name: "FileManagerPage",
        component: FileManagerPage,
    },
    {
        path: "/starter",
        name: "StarterPage",
        component: StarterPage,
    },
    {
        path: "/pricing",
        name: "PricingPage",
        component: PricingPage,
    },
    {
        path: "/faq",
        name: "FaqPage",
        component: FaqPage,
    },
    {
        path: "/notifications",
        name: "NotificationsPage",
        component: NotificationsPage,
    },
    {
        path: "/team-member",
        name: "TeamMemberPage",
        component: TeamMemberPage,
    },
    {
        path: "/user-list",
        name: "UsersListPage",
        component: UsersListPage,
    },
    {
        path: "/add-user",
        name: "AddUserPage",
        component: AddUserPage,
    },
    {
        path: "/user-profile",
        name: "UserProfilePage",
        component: UserProfilePage,
    },
    {
        path: "/projects",
        name: "ProjectsPage",
        component: ProjectsPage,
    },
    {path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage},
    {
        path: "/icon",
        name: "IconPage",
        component: IconPage,
    },
    {
        path: "/sign-in",
        name: "SignInPage",
        component: SignInPage,
    },
    {
        path: "/sign-up",
        name: "SignUpPage",
        component: SignUpPage,
    },
    {
        path: "/reset-password",
        name: "ResetPasswordPage",
        component: ResetPasswordPage,
    },
    {
        path: "/forget-password",
        name: "ForgetPasswordPage",
        component: ForgetPasswordPage,
    },
    {
        path: "/lock-screen",
        name: "LockScreenPage",
        component: LockScreenPage,
    },
    {
        path: "/log-out",
        name: "LogOutPage",
        component: LogOutPage,
    },
    {
        path: "/confirm-mail",
        name: "ConfirmMailPage",
        component: ConfirmMailPage,
    },
    {
        path: "/timeline",
        name: "TimelinePage",
        component: TimelinePage,
    },
    {
        path: "/members",
        name: "MembersPage",
        component: MembersPage,
    },
    {
        path: "/form-layout",
        name: "FormLayoutPage",
        component: FormLayoutPage,
    },
    {
        path: "/form-elements",
        name: "FormElementsPage",
        component: FormElementsPage,
    },
    {
        path: "/form-components",
        name: "FormComponentsPage",
        component: FormComponentsPage,
    },
    {
        path: "/form-validation",
        name: "FormValidationPage",
        component: FormValidationPage,
    },
    {
        path: "/alerts",
        name: "AlertsPage",
        component: AlertsPage,
    },
    {
        path: "/avatar",
        name: "AvatarPage",
        component: AvatarPage,
    },
    {
        path: "/buttons",
        name: "ButtonsPage",
        component: ButtonsPage,
    },
    {
        path: "/badges",
        name: "BadgesPage",
        component: BadgesPage,
    },
    {
        path: "/cards",
        name: "CardsPage",
        component: CardsPage,
    },
    {
        path: "/dropdowns",
        name: "DropdownsPage",
        component: DropdownsPage,
    },
    {
        path: "/grids",
        name: "GridsPage",
        component: GridsPage,
    },
    {
        path: "/images",
        name: "ImagesPage",
        component: ImagesPage,
    },
    {
        path: "/list",
        name: "ListPage",
        component: ListPage,
    },
    {
        path: "/modals",
        name: "ModalsPage",
        component: ModalsPage,
    },
    {
        path: "/navs",
        name: "NavsPage",
        component: NavsPage,
    },
    {
        path: "/paginations",
        name: "PaginationsPage",
        component: PaginationsPage,
    },
    {
        path: "/popover-tooltips",
        name: "PopoverTooltipsPage",
        component: PopoverTooltipsPage,
    },
    {
        path: "/progress",
        name: "ProgressPage",
        component: ProgressPage,
    },
    {
        path: "/spinners",
        name: "SpinnersPage",
        component: SpinnersPage,
    },
    {
        path: "/tabs-accordions",
        name: "TabsAccordionsPage",
        component: TabsAccordionsPage,
    },
    {
        path: "/videos",
        name: "VideosPage",
        component: VideosPage,
    },
    {
        path: "/basic-table",
        name: "BasicTablePage",
        component: BasicTablePage,
    },
    {
        path: "/data-table",
        name: "DataTablePage",
        component: DataTablePage,
    },
    {
        path: "/range-slider",
        name: "RangeSliderPage",
        component: RangeSliderPage,
    },
    {
        path: "/ratings",
        name: "RatingsPage",
        component: RatingsPage,
    },
    {
        path: "/scrollbar",
        name: "ScrollbarPage",
        component: ScrollbarPage,
    },
    {
        path: "/widgets",
        name: "WidgetsPage",
        component: WidgetsPage,
    },
    {
        path: "/apexcharts",
        name: "ApexchartsPage",
        component: ApexchartsPage,
    },
    {
        path: "/amcharts",
        name: "AmchartsPage",
        component: AmchartsPage,
    },
    {
        path: "/google-maps",
        name: "GoogleMapsPage",
        component: GoogleMapsPage,
    },
    {
        path: "/leaflet-maps",
        name: "LeafletMapPage",
        component: LeafletMapPage,
    },
    {
        path: "/calendar",
        name: "CalendarPage",
        component: CalendarPage,
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
        path: "/connections",
        name: "ConnectionsPage",
        component: ConnectionsPage,
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicyPage",
        component: PrivacyPolicyPage,
    },
    {
        path: "/webhook-routing",
        name: "WebhookRouting",
        component: WebhookRouting,
    },
    {
        path: "/calls",
        name: "CallList",
        component: CallList ,
    },
    {
        path: "/call/:id",
        name: "CallDetails",
        component: CallDetails,
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
    }
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