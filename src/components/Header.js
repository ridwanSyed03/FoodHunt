import { useState, useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [btnName, setBtnName]= useState("Login");
    const onlineStatus= useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);

    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    
    return(
        <div className="flex justify-between bg-gray-50 sticky top-0 z-1">
            <div className="logo-container">
                <img className="w-25 m-2 rounded-xl" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <div className="relative inline-block">
                        <li className="px-4 font-bold"><Link to="/cart">🛒 Cart</Link></li>
                        <span className="absolute top-0 right-0 -mt-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                           {cart.length}
                        </span>
                    </div>
                    <Link to="/login">
                    <button className="login px-4 py-1 mx-2 cursor-pointer bg-gray-400 text-white rounded-xl font-bold" onClick={()=>{
                    }}>{btnName}</button>
                    </Link>
                    {/* <li className="px-4 py-1 font-bold">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
};

export default Header;