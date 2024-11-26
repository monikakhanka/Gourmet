import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
       dispatch(addItem(item));
    }
    return(
        <div>
            {
                items.map((item) => (
                    <div  key={item.card.info.id} data-testid="resItems" className="w-12/12 flex justify-between font-serif border-b-2  border-gray-400 text-left">
                        <div className="m-4 w-10/12">
                            <h3 className="font-bold text-xl text-gray-500">{item.card.info.name}</h3>
                            <h3 className="font-bold text-base">₹{item.card.info.price /100}</h3>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <img className="rounded-xl p-2 h-36" src={CDN_URL + item.card.info.imageId} alt="food pic" />
                            <button className="bg-black w-20 absolute -m-9 ml-8  rounded-lg h-8 font-bold text-green-400" onClick={() => handleAddItem(item)}>ADD+</button>
                        </div>
                    </div>    
                ))
            }
        </div>
    )
}

export default ItemList;