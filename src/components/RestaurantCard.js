import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const  {resData} = props;
 
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData ;
     return (
         <div data-testid="resCard" className="m-4 p-4 w-[250px] h-[300px] rounded-md">
             <div className="relative">
                 <img className="res-img rounded-2xl h-36 w-56" src={CDN_URL+ cloudinaryImageId } alt="food" />
                 <div class="absolute rounded-b-2xl bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
             </div>
             <h3 className="font-bold m-1 text-lg">{name}</h3>
             <h4 className="font-semibold text-gray-700">{cuisines.join(", ")}</h4>
             <h4 className="text-gray-600 " >{avgRating} stars - {sla.deliveryTime} minutes</h4>
         </div>
     );
 }


 export default RestaurantCard;