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
        <div className="flex justify-between bg-white shadow-xl m-2">
            <div className="w-20 h-20">
                <Link to="/"><img src={LOGO_URL} alt="logo" /></Link>
            </div>  
            <div className="flex justify-evenly items-center font-serif text-lg">
                <ul className="flex px-10">
                    <li className="px-4 py-6 font-normal ">Online status: {onlineStatus ? <>&#x2713;</>: <>&times;</>}</li>
                    <li className="px-4 py-6 font-normal hover:text-orange-500"><Link to="/">Home</Link></li>
                    <li className="px-4 py-6 font-normal hover:text-orange-500"><Link to="/about">About Us</Link></li>
                    <li className="px-4 py-6 font-normal hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 py-6 font-normal hover:text-orange-500"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 py-6 font-normal hover:text-orange-500"><Link to="/cart">Cart-({cartItems.length} Items)</Link></li>
                    <li className="px-4 py-6 font-norma  hover:text-orange-500">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;