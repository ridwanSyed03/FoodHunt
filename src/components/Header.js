import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnName, setBtnName]= useState("Login");
    const onlineStatus= useOnlineStatus();
    
    return(
        <div className="flex justify-between bg-gray-50 sticky top-0">
            <div className="logo-container">
                <img className="w-25 m-2 rounded-xl" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnName=="Login"?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;