import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, darkMode }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className={`w-full mx-auto my-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-md rounded-lg overflow-hidden transition-all duration-300`}>
      <div 
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        onClick={handleClick}
      >
        <div>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          {data.deliveryTime && (
            <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
              Estimated delivery: {data.deliveryTime} mins
            </span>
          )}
        </div>
        <span className="text-xl">{showItems ? '🔽' : '▶️'}</span>
      </div>

      {/* Body - conditional rendering */}
      {showItems && (
        <div className="border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
          <ItemList items={data.itemCards} darkMode={darkMode} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
