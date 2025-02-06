import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Page/Header/Header";
import Footer from "../Page/Footer/Footer";
import SidebarItem from "./MenuItems/SidebarItem";
import "./Sidebar.css";
import { Menus } from "./MenuItems/MenuData"; // Import the menu data
import Login from "../Page/Login/Login";

const Main: React.FC = () => {
  const [drawerOpen] = useState(true);
  const [open, setOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleDrawer = () => setOpen((prevState) => !prevState);

  const handleMenuClick = (menuTitle: string) => {
    setExpandedMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set user as logged in
  };

  const location = useLocation(); // Get the current route

  return (
    <> 
      {!isLoggedIn ? (
        // Show login button when user is not logged in
        <Login handleLogin={handleLogin}/>
      ) : (
        // Show Dashboard after login
        <div className="flex flex-col h-screen bg-gray-100">
          <Header toggleDrawer={toggleDrawer} />
          <div className={`drawer ${drawerOpen ? "drawer-open" : ""} flex`}>
            <div
              className={`${
                open ? "w-64" : "w-20"
              } admin-sidebar h-screen p-5 pt-5 relative duration-300 transition-all`}
            >
              <ul className="space-y-4">
                {Menus.map((Menu, index) => (
                  <SidebarItem
                    key={index}
                    menu={Menu}
                    location={location}
                    expandedMenu={expandedMenu}
                    handleMenuClick={handleMenuClick}
                    open={open}
                  />
                ))}
              </ul>
            </div>
            <div
              className="drawer-content flex-1"
              style={{ backgroundColor: "#F9FAFF" }}
            >
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
