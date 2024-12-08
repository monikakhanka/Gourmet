import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h3 className="font-serif font-bold">
        Looks like you're offline!! Please check your internet connection
      </h3>
    );

  // if true will continue

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body font-serif">
      <div className="filter flex justify-between mt-8">
        <div className="search mx-10 p-4">
          <input
            type="text"
            className="border border-solid rounded-md w-56 h-10 border-black mr-4"
            value={searchText}
            data-testid="searchInput"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-slate-200 text-gray-800 px-4 py-2 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="search mr-12 flex items-center">
          <button
            className="px-5 py-2 bg-slate-200 text-gray-800 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="res-menu"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
