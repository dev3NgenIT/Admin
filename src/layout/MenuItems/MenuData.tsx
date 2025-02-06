export const Menus = [
  {
    title: "Dashboard",
    src: "admin/dashboard",
    iconSrc: "dashboard",
  },
  {
    title: "Products",
    src: "",
    iconSrc: "products",
    subMenus: [
      { title: "All Products", src: "admin/allproduct", iconSrc: "dashboard" },
      { title: "Brand", src: "admin/brand", iconSrc: "dashboard" },
      { title: "Category", src: "admin/category", iconSrc: "dashboard" },
      {
        title: "Sub Category",
        src: "admin/category/sub",
        iconSrc: "dashboard",
      },
      {
        title: "Child Category",
        src: "admin/category/child",
        iconSrc: "dashboard",
      },
    ],
  },
  {
    title: "Orders",
    src: "",
    iconSrc: "orders",
    subMenus: [
      {
        title: "Order List",
        src: "admin/orders",
        iconSrc: "dashboard",
      },
      {
        title: "Order Reports",
        src: "admin/order-reports",
        iconSrc: "dashboard",
      },
    ],
  },
  {
    title: "Users",
    src: "",
    iconSrc: "customers",
    subMenus: [
      {
        title: "User List",
        src: "admin/users",
        iconSrc: "dashboard",
      },
      {
        title: "Role Management",
        src: "admin/role-management",
        iconSrc: "dashboard",
      },
      {
        title: "Permission",
        src: "admin/role-permission",
        iconSrc: "dashboard",
      },
    ],
  },
  {
    title: "Site Contents",
    src: "",
    iconSrc: "content-management",
    subMenus: [
      { title: "About us", src: "admin/about", iconSrc: "dashboard" },
      { title: "FAQ", src: "admin/faq", iconSrc: "dashboard" },
      {
        title: "Privacy & Policies",
        src: "admin/privacy",
        iconSrc: "dashboard",
      },
      { title: "Terms & Conditions", src: "admin/terms", iconSrc: "dashboard" },
      { title: "Return Policy", src: "admin/return", iconSrc: "dashboard" },
      {
        title: "Contact Message",
        src: "admin/contact-message",
        iconSrc: "dashboard",
      },
      { title: "Newsletter", src: "admin/newsletter", iconSrc: "dashboard" },
    ],
  },
  {
    title: "Setting",
    src: "",
    iconSrc: "setting",
    subMenus: [
      {
        title: "Site Information",
        src: "admin/site-setup",
        iconSrc: "dashboard",
      },
      {
        title: "Site Logo",
        src: "admin/site-logo",
        iconSrc: "dashboard",
      },
      {
        title: "Site Meta",
        src: "admin/site-meta",
        iconSrc: "dashboard",
      },
      {
        title: "Database Backup",
        src: "admin/site-database",
        iconSrc: "dashboard",
      },
    ],
  },
];
