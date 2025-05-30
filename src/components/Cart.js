import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link, useOutletContext } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [darkMode] = useOutletContext() || [false];

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.card.info.price || item.card.info.defaultPrice) / 100,
    0
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 inline-block transform hover:scale-105">
              Browse Restaurants
            </Link>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</h2>
              <button 
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300 transform hover:scale-105"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <ItemList items={cartItems} darkMode={darkMode} />
            </div>
            
            <div className="p-6 bg-gray-100 dark:bg-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-lg font-bold">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Delivery Fee:</span>
                <span className="text-lg font-bold">₹40.00</span>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-xl font-bold">₹{(totalPrice + 40).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
