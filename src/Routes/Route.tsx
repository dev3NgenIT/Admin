import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../Page/Dashboard/Dashboard";
import AllProducts from "../Page/Dashboard/DashboardPages/Product/AllProducts";
import Brands from "../Page/Dashboard/DashboardPages/Product/Brands/Brands";
import Category from "../Page/Dashboard/DashboardPages/Product/Category/Category";
import Orders from "../Page/Dashboard/DashboardPages/Orders/OrdersList/OrdersLists";
import About from "../Page/Dashboard/DashboardPages/About/About";
import Faq from "../Page/Dashboard/DashboardPages/Faq/Faq";
import Privacy from "../Page/Dashboard/DashboardPages/Privacy/Privacy";
import Terms from "../Page/Dashboard/DashboardPages/Terms/Terms";
import Return from "../Page/Dashboard/DashboardPages/Return/Return";
import ContactMessages from "../Page/Dashboard/DashboardPages/ContactMessages/ContactMessages";
import NewsLetter from "../Page/Dashboard/DashboardPages/NewsLetter/NewsLetter";
import RolePermission from "../Page/Dashboard/DashboardPages/UserRole/RolePermission";
import SiteSetup from "../Page/Dashboard/DashboardPages/SiteSetting/SiteSetup";
import BrandCreate from "../Page/Dashboard/DashboardPages/Product/Brands/BrandCreate";
import BrandEdit from "../Page/Dashboard/DashboardPages/Product/Brands/BrandEdit";
import CategoryEdit from "../Page/Dashboard/DashboardPages/Product/Category/CategoryEdit";
import CategoryAdd from "../Page/Dashboard/DashboardPages/Product/Category/CategoryAdd";
import ProductCreate from "../Page/Dashboard/DashboardPages/Product/ProductCreate";
import SubCategory from "../Page/Dashboard/DashboardPages/Product/Category/SubCategory/SubCategory";
import SubCategoryAdd from "../Page/Dashboard/DashboardPages/Product/Category/SubCategory/SubCategoryAdd";
import ChildCategory from "../Page/Dashboard/DashboardPages/Product/Category/ChildCategory/ChildCategory";
import ChildCategoryAdd from "../Page/Dashboard/DashboardPages/Product/Category/ChildCategory/ChildCategoryAdd";
import SiteLogo from "../Page/Dashboard/DashboardPages/SiteSetting/SiteLogo";
import SiteDatabase from "../Page/Dashboard/DashboardPages/SiteSetting/SiteDatabase";
import SiteMeta from "../Page/Dashboard/DashboardPages/SiteSetting/SiteMeta";
import UserLists from "../Page/Dashboard/DashboardPages/UserRole/UserLists";
import UserCreate from "../Page/Dashboard/DashboardPages/UserRole/UserCreate";
import OrderLists from "../Page/Dashboard/DashboardPages/Orders/OrdersList/OrdersLists";
import OrdersReports from "../Page/Dashboard/DashboardPages/Orders/OrdersList/OrdersReports";
import RoleManagement from "../Page/Dashboard/DashboardPages/UserRole/RoleManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout with Header, Footer, and Outlet
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "admin/",
        element: <Dashboard />,
      },
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin/allproduct",
        element: <AllProducts />,
      },
      {
        path: "admin/brand",
        element: <Brands />,
      },
      {
        path: "admin/category",
        element: <Category />,
      },
      {
        path: "admin/orders",
        element: <Orders />,
      },
      {
        path: "admin/about",
        element: <About />,
      },
      {
        path: "admin/faq",
        element: <Faq />,
      },
      {
        path: "admin/privacy",
        element: <Privacy />,
      },
      {
        path: "admin/terms",
        element: <Terms />,
      },
      {
        path: "admin/return",
        element: <Return />,
      },
      {
        path: "admin/order-lists",
        element: <OrderLists />,
      },
      {
        path: "admin/order-reports",
        element: <OrdersReports />,
      },
      {
        path: "admin/contact-message",
        element: <ContactMessages />,
      },
      {
        path: "admin/newsletter",
        element: <NewsLetter />,
      },
      {
        path: "admin/users",
        element: <UserLists />,
      },
      {
        path: "admin/users/user-create",
        element: <UserCreate />,
      },
      {
        path: "admin/role-management",
        element: <RoleManagement />,
      },
      {
        path: "admin/role-permission",
        element: <RolePermission />,
      },
      {
        path: "admin/site-setup",
        element: <SiteSetup />,
      },
      {
        path: "admin/site-database",
        element: <SiteDatabase />,
      },
      {
        path: "admin/site-meta",
        element: <SiteMeta />,
      },
      {
        path: "admin/site-logo",
        element: <SiteLogo />,
      },
      {
        path: "admin/brand/create",
        element: <BrandCreate />,
      },
      {
        path: "admin/brand/edit",
        element: <BrandEdit />,
      },
      {
        path: "admin/category/edit",
        element: <CategoryEdit />,
      },
      {
        path: "admin/category/create",
        element: <CategoryAdd />,
      },
      {
        path: "admin/category/sub",
        element: <SubCategory />,
      },
      {
        path: "admin/category/sub/create",
        element: <SubCategoryAdd />,
      },
      {
        path: "admin/category/child",
        element: <ChildCategory />,
      },
      {
        path: "admin/category/child/create",
        element: <ChildCategoryAdd />,
      },
      {
        path: "admin/allproduct/create",
        element: <ProductCreate />,
      },
      // Add more routes as needed
    ],
  },
]);

export default router;
