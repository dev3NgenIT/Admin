import { Link } from "react-router-dom";

const SidebarItem = ({
  menu,
  location,
  expandedMenu,
  handleMenuClick,
  open,
}) => {
  return (
    <li>
      <div
        className={`flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm ${
          expandedMenu === menu.title && "bg-light-white"
        }`}
        onClick={() => menu.subMenus && handleMenuClick(menu.title)}
      >
        <Link
          to={`/${menu.src}`}
          className={`flex items-center gap-x-4 ${
            location.pathname === `/${menu.src}`
              ? "text-blue-500 font-semibold" // Active menu styles
              : "text-gray-300"
          }`}
        >
          <img
            src={`/public/assets/${menu.iconSrc}.svg`}
            alt={menu.title}
            className="w-8 h-8"
          />
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-200 site-text sdm-link`}
          >
            {menu.title}
          </span>
        </Link>
        {menu.subMenus && (
          <div className={`chevron-icons ${open ? "block" : "hidden"}`}>
            <svg
              className={`h-5 w-5 transform transition-transform ${
                expandedMenu === menu.title ? "rotate-down" : "rotate-left"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7 -3.0598e-07C5.61553 -3.66497e-07 4.26215 0.410542 3.11101 1.17971C1.95986 1.94888 1.06266 3.04213 0.532844 4.32122C0.00303056 5.6003 -0.135593 7.00776 0.134504 8.36563C0.4046 9.7235 1.07129 10.9708 2.05025 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99223 14.1356 8.3997 13.997 9.67878 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C13.998 5.1441 13.2599 3.36479 11.9475 2.05247C10.6352 0.74015 8.8559 0.00200707 7 -3.0598e-07ZM7 12.8333C5.84628 12.8333 4.71846 12.4912 3.75917 11.8502C2.79989 11.2093 2.05221 10.2982 1.6107 9.23232C1.16919 8.16642 1.05367 6.99353 1.27875 5.86197C1.50383 4.73042 2.0594 3.69102 2.87521 2.87521C3.69102 2.0594 4.73042 1.50383 5.86197 1.27875C6.99353 1.05367 8.16642 1.16919 9.23232 1.6107C10.2982 2.05221 11.2093 2.79989 11.8502 3.75917C12.4912 4.71846 12.8333 5.84628 12.8333 7C12.8316 8.54657 12.2165 10.0293 11.1229 11.1229C10.0293 12.2165 8.54657 12.8316 7 12.8333Z"
                fill="#4C5564"
              />
              <path
                d="M6.99979 9.33332C6.57279 9.33376 6.16043 9.1777 5.84071 8.89466C5.64996 8.72491 5.46912 8.55982 5.35071 8.44141L3.67479 6.79407C3.61653 6.74133 3.56954 6.67735 3.53662 6.60599C3.5037 6.53463 3.48554 6.45735 3.48323 6.3788C3.48092 6.30025 3.49451 6.22204 3.52318 6.14886C3.55184 6.07569 3.595 6.00907 3.65006 5.95299C3.70511 5.89691 3.77093 5.85253 3.84357 5.82252C3.9162 5.79251 3.99415 5.77749 4.07273 5.77836C4.15131 5.77922 4.22891 5.79595 4.30086 5.82755C4.37282 5.85915 4.43765 5.90496 4.49146 5.96224L6.17146 7.61249C6.28112 7.72157 6.44446 7.86974 6.61421 8.02082C6.72077 8.11482 6.85798 8.16669 7.00008 8.16669C7.14218 8.16669 7.27939 8.11482 7.38596 8.02082C7.53546 7.88968 7.68173 7.75489 7.82462 7.61657L9.50812 5.96224C9.56193 5.90496 9.62676 5.85915 9.69872 5.82755C9.77067 5.79595 9.84827 5.77922 9.92685 5.77836C10.0054 5.77749 10.0834 5.79251 10.156 5.82252C10.2286 5.85253 10.2945 5.89691 10.3495 5.95299C10.4046 6.00907 10.4477 6.07569 10.4764 6.14886C10.5051 6.22204 10.5187 6.30025 10.5163 6.3788C10.514 6.45735 10.4959 6.53463 10.463 6.60599C10.43 6.67735 10.383 6.74133 10.3248 6.79407L8.64537 8.44432C8.52871 8.56099 8.34962 8.72432 8.15946 8.89291C7.83993 9.17686 7.42725 9.33359 6.99979 9.33332Z"
                fill="#4C5564"
              />
            </svg>
          </div>
        )}
      </div>
      {menu.subMenus && expandedMenu === menu.title && (
        <ul className="ml-8 space-y-2">
          {menu.subMenus.map((subMenu: SubMenu, subIndex: number) => (
            <li key={subIndex} className="ps-4">
              <Link
                to={`/${subMenu.src}`}
                className={`block rounded-md p-2 submenu-links text-sm ${
                  location.pathname === `/${subMenu.src}`
                    ? "menu-active" // Active submenu styles
                    : "text-gray-300"
                }`}
              >
                {subMenu.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
