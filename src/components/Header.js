import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = () => {
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
   
    return (
        <div className="flex justify-between bg-yellow-200 shadow-xl m-2">
            <div className="w-20 h-20">
                <Link to="/"><img src={LOGO_URL} alt="logo" /></Link>
            </div>  
            <div className="flex items-center font-serif">
                <ul className="flex px-10">
                    <li className="px-4 py-6 font-normal text-xl">Online status: {onlineStatus ? <>&#x2713;</>: <>&times;</>}</li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl"><Link to="/">Home</Link></li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl"><Link to="/about">About Us</Link></li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl"><Link to="/cart">Cart-({cartItems.length} Items)</Link></li>
                    <li className="px-4 py-6 font-normal hover:font-bold text-xl">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;