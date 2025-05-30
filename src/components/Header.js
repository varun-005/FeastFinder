import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ({ darkMode, setDarkMode }) => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-md transition-all duration-300">
        <div className="flex items-center space-x-4">
          <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,3L4,9A2,2 0 0,0 3,11V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11A2,2 0 0,0 20,9L12,3M12,5.5L18,10V19H6V10L12,5.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
            />
          </svg>
          <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
            FeastFinder
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6 font-medium">
            <li>
              <Link
                to="/main"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/main/about"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/main/contact"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/main/cart"
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                {" "}
                {cartItems.length > 0 && (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
            {loggedInUser && (
              <span className="text-orange-500 font-semibold">
                👋 {loggedInUser}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
