import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => { 
    // subscribe to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center my-6 py-4">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="m-auto w-6/12 ">
                  {
                    cartItems.length === 0 ? <h3 className="text-xl">Your cart is empty. Please add items to the cart</h3> : <button className="p-3 m-4 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
          
                }
                <ItemList items={cartItems}/>  

            </div>
        </div>
        
    )
}

export default Cart;