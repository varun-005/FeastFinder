import Shimmer from "./Shimmer";
import { useParams, useOutletContext } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import constants from "../utils/constants";



const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [darkMode] = useOutletContext() || [false];
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className={`max-w-6xl mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <img
             src={CDN_URL + cloudinaryImageId} 
             alt={name}
            // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
            // alt={name}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            {cuisines.join(", ")}
          </p>
          <p className="text-lg font-semibold">{costForTwoMessage}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
