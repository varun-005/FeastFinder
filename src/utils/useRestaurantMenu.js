import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use our backend proxy endpoint
        const response = await fetch(MENU_API_URL + resId);
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setResInfo(null);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
