import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ toggleDrawer }) => {
  const [open, setOpen] = useState(true); // State for drawer open/close

  // Function to handle toggling the drawer and logo/text behavior
  const handleToggle = () => {
    setOpen(!open);
    toggleDrawer(); // Call the passed function to toggle the drawer
  };

  return (
    <div className="navbar shadow bg-white border">
      {/* Header Content */}
      <div
        className={`flex gap-x-4 items-center ps-3 duration-500 logo-container ${
          open ? "w-72" : "w-24"
        }`}
      >
        {/* Logo */}
        <img
          src="/public/assets/logo-main.png"
          alt="Logo"
          className={`cursor-pointer duration-500 ${
            open ? "rotate-[360deg]" : "rotate-0"
          }`} // Rotate logo when open is true
        />
        {/* Text - N-Mart */}
        <h1
          className={`site-text origin-left font-medium text-xl transition-all duration-200 logo-title ${
            !open ? "scale-0" : ""
          }`} // Hide text when open is false
        >
          N-Mart
        </h1>
      </div>

      {/* Toggler Button */}
      <div className="navbar-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
          onClick={handleToggle} // Toggle the drawer and handle logo/text effect
        >
          <RxHamburgerMenu size={20} />
        </div>
      </div>

      {/* Navbar End */}

      <div className="navbar-end">
        {/* Profile */}
        <div className="flex items-center pe-0 pe-lg-9">
          <div className="w-10 rounded-full">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div className="ps-3 profile-info">
            <p className="font-semibold mb-0 profile-title">
              Cameron Williamson
            </p>
            <p className="profile-designation">Super Admin</p>
          </div>
        </div>

        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M2 5.27246H16M9 2.27246V5.27246M13 5.27246C11.6667 10.6058 8.66667 14.2725 4 16.2725M6 9.27246C7.33333 11.9391 9.33333 13.9391 12 15.2725M13 22.2725L18 11.2725L23 22.2725M21.6 19.2725H14.4"
              stroke="#4C5564"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="33"
                viewBox="0 0 22 33"
                fill="none"
              >
                <path
                  d="M21.7877 25.0749L19.2994 16.1063C18.768 14.1878 17.6102 12.5022 16.0102 11.3177C14.4103 10.1331 12.46 9.51784 10.47 9.56968C8.47993 9.62151 6.5644 10.3375 5.02825 11.6037C3.4921 12.8699 2.42362 14.6135 1.99285 16.5571L0.0682031 25.2185C-0.0249259 25.6381 -0.0226543 26.0733 0.0748502 26.4919C0.172355 26.9105 0.362604 27.3019 0.631562 27.6372C0.90052 27.9725 1.24132 28.2431 1.62883 28.4291C2.01633 28.6151 2.44065 28.7117 2.87048 28.7118H6.32259C6.54225 29.7935 7.12914 30.7661 7.9838 31.4646C8.83847 32.1632 9.90836 32.5448 11.0122 32.5448C12.116 32.5448 13.1859 32.1632 14.0406 31.4646C14.8952 30.7661 15.4821 29.7935 15.7018 28.7118H19.0228C19.4651 28.7116 19.9013 28.6092 20.2975 28.4126C20.6937 28.2161 21.0391 27.9307 21.3068 27.5787C21.5746 27.2266 21.7573 26.8175 21.8409 26.3832C21.9245 25.9489 21.9057 25.5012 21.7877 25.0749ZM11.0122 30.6259C10.4205 30.6234 9.84397 30.4382 9.36155 30.0956C8.87912 29.753 8.51434 29.2696 8.31711 28.7118H13.7073C13.51 29.2696 13.1453 29.753 12.6628 30.0956C12.1804 30.4382 11.6039 30.6234 11.0122 30.6259ZM19.7837 26.4196C19.6944 26.538 19.5786 26.6338 19.4457 26.6995C19.3127 26.7651 19.1663 26.7987 19.018 26.7976H2.87048C2.72717 26.7976 2.58569 26.7654 2.4565 26.7034C2.3273 26.6414 2.21368 26.5512 2.12402 26.4394C2.03436 26.3276 1.97095 26.1971 1.93848 26.0575C1.906 25.9179 1.90529 25.7728 1.93639 25.6329L3.86103 16.9715C4.20017 15.4461 5.03947 14.0779 6.24551 13.0844C7.45155 12.0908 8.95511 11.5289 10.5172 11.4879C12.0792 11.447 13.6102 11.9294 14.8666 12.8585C16.123 13.7876 17.0328 15.11 17.4513 16.6155L19.9397 25.5841C19.9803 25.7259 19.9873 25.8752 19.9603 26.0203C19.9332 26.1653 19.8727 26.302 19.7837 26.4196Z"
                  fill="#4C5564"
                />
                <circle cx="10.5274" cy="2.87118" r="2.87118" fill="#FF7143" />
              </svg>
              {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-0 z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
              >
                <path
                  d="M19.0767 10.53H5.67788C4.40921 10.5315 3.19293 11.0362 2.29584 11.9333C1.39875 12.8304 0.894098 14.0467 0.892578 15.3153L0.892578 26.8001C0.894098 28.0687 1.39875 29.285 2.29584 30.1821C3.19293 31.0792 4.40921 31.5838 5.67788 31.5854H19.0767C20.3454 31.5838 21.5617 31.0792 22.4588 30.1821C23.3559 29.285 23.8605 28.0687 23.862 26.8001V15.3153C23.8605 14.0467 23.3559 12.8304 22.4588 11.9333C21.5617 11.0362 20.3454 10.5315 19.0767 10.53ZM5.67788 12.4442H19.0767C19.6498 12.4453 20.2094 12.6179 20.6836 12.9397C21.1577 13.2616 21.5247 13.7179 21.7374 14.2501L14.4082 21.5803C13.8688 22.1175 13.1386 22.4191 12.3773 22.4191C11.616 22.4191 10.8858 22.1175 10.3464 21.5803L3.01725 14.2501C3.22986 13.7179 3.59686 13.2616 4.07102 12.9397C4.54518 12.6179 5.10481 12.4453 5.67788 12.4442ZM19.0767 29.6712H5.67788C4.9164 29.6712 4.1861 29.3687 3.64765 28.8303C3.1092 28.2918 2.8067 27.5615 2.8067 26.8001V16.7509L8.99314 22.9335C9.89146 23.8296 11.1085 24.3328 12.3773 24.3328C13.6461 24.3328 14.8631 23.8296 15.7615 22.9335L21.9479 16.7509V26.8001C21.9479 27.5615 21.6454 28.2918 21.107 28.8303C20.5685 29.3687 19.8382 29.6712 19.0767 29.6712Z"
                  fill="#4C5564"
                />
                <circle cx="12.377" cy="3.83065" r="2.87118" fill="#FF7143" />
              </svg>
              {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-0 z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
