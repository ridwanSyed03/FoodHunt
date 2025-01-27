import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [listOfRestraunts, setListOfRestraunts]= useState(resList);
    return(
        <div className="body">
            <div className="filer-btn">
               <button onClick={()=>{
                    let filteredList=resList.filter((resData)=>resData?.card?.card?.info?.avgRating>4.0);
                    setListOfRestraunts(filteredList);
                }} >
                    Top Rated Restraunts
               </button>
            </div>
            <div className="res-container">
                {
                    listOfRestraunts.map((restraunt)=>(<RestrauntCard key={restraunt?.card?.card?.info?.id} resData={restraunt} />))
                }
            </div>
        </div>
    )
}

export default Body;