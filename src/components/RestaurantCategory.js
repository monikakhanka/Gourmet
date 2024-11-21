import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex})=>{
   
    // controlled component
    const handleClick = () => {
        setShowIndex();
    }
    
    return (
            <div className="w-6/12 my-8 p-5bg-yellow-100 shadow-2xl m-auto">
               <div className="flex justify-between cursor-pointer" onClick={handleClick}  >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className="font-thin">▼</span>
               </div>
                {  
                    showItems && <ItemList items={data.itemCards}/>
                }
            
            </div>

    )
}

export default RestaurantCategory;