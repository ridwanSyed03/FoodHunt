import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{
    const{resId}=useParams();

    const[showIndex, setShowIndex]= useState(null);

    const resInfo=useRestaurantMenu(resId);

    if(resInfo==null) return <Shimmer />

    const{name, cuisines, costForTwoMessage,avgRating}=resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



    let categories=
     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category)=>{
        return  category?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    return(
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-base">{avgRating} ⭐ - {costForTwoMessage}</p>
            <p className="font-bold text-base">{cuisines.join(", ")}</p>
            {categories.map((category, index)=>{
                    return <div key={index}>{<RestaurantCategory data={category?.card?.card} showIndex={showIndex} setShowIndex={setShowIndex} index={index} />}</div>
            })}
        </div>
    )
};

export default RestaurantMenu;