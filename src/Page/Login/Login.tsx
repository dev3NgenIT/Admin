import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";

const Login = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden login-container">
        <div className="flex flex-col justify-between w-1/2 p-5 text-white login-bg">
          <div className="pt-8 ps-8 text-start">
            <h1 className="self-start text-4xl font-bold text-black text-start">
              Simplify Management <br /> with our dashboard
            </h1>
            <p className="self-start mt-2 text-black">
              Login with your personal info.
            </p>
          </div>
          <div className="mt-auto person-img">
            <img
              src="../../../login-person.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-1/2 p-8 login-right-side">
          <div className="flex items-center justify-start pb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <g clipPath="url(#clip0_82798_11468)">
                  <path
                    d="M26.6751 0L26.9158 0.00220833C33.426 0.0618333 39.8986 2.40046 44.673 6.41742C49.7191 10.664 52.4994 16.4278 52.4994 22.6443C52.4994 29.161 46.1548 34.4633 38.3572 34.4633C36.432 34.4702 34.5206 34.1383 32.7105 33.4827C32.4727 33.3951 32.2603 33.25 32.0921 33.0604C31.924 32.8707 31.8054 32.6425 31.7468 32.3959C31.6882 32.1493 31.6915 31.8921 31.7564 31.6471C31.8213 31.4021 31.9457 31.177 32.1187 30.9918C33.3531 29.6358 34.0333 27.878 34.0333 26.0429C34.0333 24.2806 33.3487 22.4102 32.6641 20.8047C31.8992 18.9814 30.8064 17.3138 29.44 15.8845C26.494 12.8613 22.4594 11.3288 17.4487 11.3288C12.4358 11.3288 5.64296 12.5787 1.7585 18.5279C1.74475 18.5482 1.7315 18.5688 1.71875 18.5898C4.93408 7.83517 14.9224 0 26.6751 0Z"
                    fill="#FF7143"
                  />
                  <path
                    d="M8.04523 45.2951C5.61675 42.8589 3.69884 39.9626 2.40388 36.7758C1.10892 33.589 0.462934 30.1759 0.503776 26.7363C0.512609 26.5839 0.660567 24.0907 2.09598 21.3435C2.52882 20.5154 3.04998 19.727 3.64182 19.0027C6.2609 15.8094 10.2403 14.226 14.2749 13.78C18.2654 13.3383 22.5584 13.6828 26.0277 15.8801L26.0387 15.8867C27.9202 17.0836 29.5235 18.8724 30.5901 20.8268L30.5945 20.8334C29.3699 20.0214 27.9299 19.5952 26.4605 19.61C25.2747 19.6232 24.1352 19.9942 23.0464 20.4359C19.5838 21.847 16.8874 24.4705 15.2201 28.0635C13.5882 31.5813 13.1178 35.7109 13.8951 39.6925C14.6857 43.736 16.7417 47.3157 19.6876 49.7736C20.4649 50.4228 21.3107 50.9992 22.1962 51.4873C23.3535 52.1207 24.5798 52.6186 25.851 52.9713L25.9349 52.9955C19.1951 52.8625 12.7746 50.0988 8.04523 45.2951Z"
                    fill="#FF7143"
                  />
                  <path
                    d="M49.5039 40.8452C45.843 46.6207 40.0725 50.7392 33.4206 52.3241C32.7048 52.3587 31.9877 52.358 31.2719 52.3219C28.4541 52.1805 25.6407 51.4474 23.2203 49.9722C22.6136 49.6023 22.0349 49.1882 21.489 48.7333C18.7838 46.4742 16.8913 43.1728 16.1603 39.4363C15.436 35.7329 15.871 31.8992 17.3837 28.6397C17.9749 27.355 18.7501 26.1632 19.6848 25.102C20.0293 24.7133 20.3981 24.3445 20.7868 24C20.3247 25.0196 20.0954 26.1292 20.1154 27.2485C20.2015 31.5282 22.2332 35.5319 25.8394 38.5242C29.4169 41.4922 34.145 43.1286 39.1513 43.1286C42.7619 43.1286 46.2753 42.2673 49.3118 40.6376C49.3383 40.6243 49.409 40.5868 49.4863 40.6685C49.5635 40.7502 49.5194 40.8187 49.5039 40.8452Z"
                    fill="#FF7143"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_82798_11468">
                    <rect width="53" height="53" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="logo-title-login ps-3">e-Mart</h1>
          </div>
          <p className="pb-12 logo-para">Nice to see you again!</p>
          <form className="w-full max-w-md">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 login-label">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg input-solid focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700 login-label">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 pr-10 border-0 rounded-lg input-solid focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute text-gray-500 right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="toggle" defaultChecked />
                  <span className="label-text ps-2">Remember me</span>
                </label>
                <Link to={"/"}>
                  <p className="site-primary-text ">Forgot password?</p>
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-10">
              <button onClick={handleLogin} className="w-full login-btn">
                <div className="flex items-center">
                  Login <BiLogIn className="ms-3" size={20} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
