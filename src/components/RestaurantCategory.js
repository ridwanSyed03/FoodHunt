import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory=({data})=>{
    const[showItems, setShowItems]= useState(false);

    const handleClick=()=>{
        setShowItems(!showItems);
    }
    return(
        <div className="">
            <div className="w-7/12 mx-auto m-4 bg-gray-50 shadow-lg p-4">
                <div 
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                <div>
                    {showItems&&<ItemList items={data.itemCards} />}
                </div>
            </div>

        </div>
    )
};

export default RestaurantCategory;