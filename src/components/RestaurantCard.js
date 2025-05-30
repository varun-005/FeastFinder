import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData, darkMode }) => {
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime =
    resData?.info?.sla?.deliveryTime || resData?.info?.deliveryTime;

  return (
    <div
      className={`group h-full ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 border border-gray-100"
      } rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 overflow-hidden`}
      data-testid="resCard"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {avgRating >= 4.0 && (
          <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg z-20">
            ⭐ Top Rated
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1 group-hover:text-orange-500 transition-colors duration-200">
          {name}
        </h3>
        <p
          className={`text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-3 line-clamp-1`}
        >
          {cuisines.join(", ")}
        </p>

        <div className="flex items-center justify-between mb-2 text-sm">
          <span
            className={`flex items-center gap-1 font-medium px-2 py-1 rounded-md ${
              avgRating >= 4.0
                ? "text-green-600 bg-green-50"
                : avgRating >= 3.0
                ? "text-orange-600 bg-orange-50"
                : "text-red-600 bg-red-50"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {avgRating}
          </span>
          <span className={`${darkMode ? "text-gray-400" : "text-gray-300"}`}>
            •
          </span>
          <span
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } font-medium`}
          >
            {deliveryTime} mins
          </span>
          <span className={`${darkMode ? "text-gray-400" : "text-gray-300"}`}>
            •
          </span>
          <span
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } font-medium`}
          >
            {costForTwo}
          </span>
        </div>

        {loggedInUser && (
          <p
            className={`mt-2 text-xs ${
              darkMode
                ? "text-gray-400 border-gray-700"
                : "text-gray-500 border-gray-100"
            } border-t pt-2`}
          >
            Logged in as: {loggedInUser}
          </p>
        )}
      </div>
    </div>
  );
};

// Higher Order Component - takes a component and returns a component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-20 transform -rotate-2">
          🔥 Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
