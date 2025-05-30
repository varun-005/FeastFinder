import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    
    //Dispatch an Action
    dispatch(addItem(item));

  }
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.card.info.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex-grow space-y-2">
              <h3 className="text-lg font-medium">{item.card.info.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ₹{item.card.info.price/100}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:w-32">
              {item.card.info.imageId && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full h-24 object-cover rounded-lg"
                />
              )}
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
