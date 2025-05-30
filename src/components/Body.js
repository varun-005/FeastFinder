import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useOutletContext } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Import the new constant
import { RESTAURANT_API_URL } from "../utils/constants";

const Body = () => {
  // Local State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode] = useOutletContext() || [false];

  // Custom Hook
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Use our backend proxy endpoint
      const response = await fetch(RESTAURANT_API_URL);
      const json = await response.json();
      console.log("API Response:", json);
      
      // Process API response
      let restaurants = [];
      
      // Try different known paths to find restaurant data
      if (json?.data?.cards) {
        // Look through all cards to find restaurant data
        for (let i = 0; i < json.data.cards.length; i++) {
          const card = json.data.cards[i];
          
          // Check for restaurants in this card
          const resData = 
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
            card?.data?.cards ||
            card?.card?.gridElements?.infoWithStyle?.restaurants ||
            card?.card?.restaurants ||
            [];
          
          if (resData && resData.length > 0) {
            console.log(`Found restaurants in card ${i}:`, resData);
            restaurants = resData;
            break;
          }
        }
      }
      
      // If we still don't have restaurants, use properly structured mock data
      if (restaurants.length === 0) {
        console.log("Using mock restaurant data");
        restaurants = [
          {
            info: {
              id: "mock1",
              name: "Delicious Restaurant",
              cloudinaryImageId: "rzvxew1gvbkrba5vimjd",
              cuisines: ["North Indian", "Chinese"],
              avgRating: 4.2,
              costForTwo: "₹300 for two",
              deliveryTime: 25,
            },
          },
          {
            info: {
              id: "mock2",
              name: "Tasty Bites",
              cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              cuisines: ["South Indian", "Fast Food"],
              avgRating: 4.5,
              costForTwo: "₹250 for two",
              deliveryTime: 20,
            },
          },
          {
            info: {
              id: "mock3",
              name: "Pizza Paradise",
              cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
              cuisines: ["Italian", "Fast Food"],
              avgRating: 4.1,
              costForTwo: "₹400 for two",
              deliveryTime: 30,
            },
          },
          {
            info: {
              id: "mock4",
              name: "Burger Junction",
              cloudinaryImageId: "ww1vrk2bhfauqarqszbt",
              cuisines: ["American", "Fast Food"],
              avgRating: 3.9,
              costForTwo: "₹350 for two",
              deliveryTime: 22,
            },
          },
        ];
      }
      
      console.log("Final restaurants data:", restaurants);
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Provide fallback data in case of API failure with proper structure
      const fallbackRestaurants = [
        {
          info: {
            id: "fallback1",
            name: "API Error - Fallback Restaurant",
            cloudinaryImageId: "rzvxew1gvbkrba5vimjd",
            cuisines: ["Various", "Cuisines"],
            avgRating: 4.0,
            costForTwo: "₹300 for two",
            deliveryTime: 25,
          },
        },
      ];
      setListOfRestaurants(fallbackRestaurants);
      setFilteredRestaurants(fallbackRestaurants);
    }
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering
  if (!onlineStatus) {
    return (
      <div className="offline-container flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Looks like you're offline!</h1>
        <p className="text-gray-600 dark:text-gray-400">Please check your internet connection and try again.</p>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full sm:w-96 relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              data-testid="searchInput"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          
          <div className="flex gap-4 flex-shrink-0">
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Search
            </button>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              onClick={() => setFilteredRestaurants(listOfRestaurants)}
            >
              Show All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/main/restaurants/" + restaurant.info.id}
              className="block h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              {restaurant.info.avgRating > 4.0 ? (
                <RestaurantCardPromoted resData={restaurant} darkMode={darkMode} />
              ) : (
                <RestaurantCard resData={restaurant} darkMode={darkMode} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
