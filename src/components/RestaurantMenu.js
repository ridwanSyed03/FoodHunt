import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu =()=>{

    const[resInfo, setResInfo]=useState(null);
    const{resId}=useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();

        setResInfo(json);
    }

    if(resInfo==null) return <Shimmer />

    const{name, cuisines, costForTwoMessage,avgRating}=resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{avgRating} Stars</p>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - Rs  {item.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
};

export default RestaurantMenu;