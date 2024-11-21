import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const  {resData} = props;
 
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData ;
     return (
         <div data-testid="resCard" className="m-4 p-4 w-[250px] h-[410px] bg-slate-100 hover:bg-slate-300 rounded-md">
             <img className="res-img h-52 w-56 rounded-md" src={CDN_URL+ cloudinaryImageId } alt="" />
             <h3 className="font-bold m-1 text-lg">{name}</h3>
             <h4 >{cuisines.join(", ")}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{sla.deliveryTime} minutes</h4>
         </div>
     );
 }


 export default RestaurantCard;