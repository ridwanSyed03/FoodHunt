import RestrauntCard, {withPromotedLabel} from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Briyani from "../../assets/Briyani.png";
import Burger from "../../assets/Burger.png";
import Pavbaji from "../../assets/Pavbaji.png";
import Dosa from "../../assets/Dosa.png";
import Noodles from "../../assets/Noodles.png";
import Pizza from "../../assets/Pizza.png";
import Rolls from "../../assets/Rolls.png";
import SouthIndian from "../../assets/SouthIndian.png";
import Parota from "../../assets/Parota.png"


const Body = () =>{
    const[listOfRestraunts, setListOfRestraunts]= useState([]);
    const[searchText, setSearchText]= useState("");
    const[filteredList, setFilteredList]= useState([]);
    const[url, setUrl]= useState("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const onlineStatus =useOnlineStatus();

    const RestaurantCardPromoted=withPromotedLabel(RestrauntCard);

    useEffect(()=>{
        fetchData();
    },[url]);

    const fetchData= async()=>{
        const data=await fetch(url);
        const json=await data.json();

        setListOfRestraunts(json?.data?.cards.slice(3));
        setFilteredList(json?.data?.cards.slice(3));
    }

    if(!onlineStatus) return <h1>Look's like you're offline!! pls check your internet connection.</h1>

    const handleChange=(event)=>{
        setSearchText(event.target.value);
    }

    const handelUrl=(url)=>{
        setUrl(url);
    }

    return listOfRestraunts.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="flex my-3 mx-9 p-2 bg-gray-50 shadow-sm">
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Briyani} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Burger} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80362&tags=layout_PavBhaji_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Pavbaji} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Dosa} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Noodles} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Pizza} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83669&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Rolls} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={SouthIndian} />
                <img className="w-32 h-32 cursor-pointer" onClick={()=>handelUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80477&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")} src={Parota} />
            </div>
            <div className="filter flex items-center">
                <div className="search m-2 p-2">
                <input value={searchText} onChange={handleChange} className="border border-solid border-black rounded-lg" />
                <button className="px-4 py-1 m-4 bg-gray-100 rounded-lg cursor-pointer"
                onClick={()=>{
                    const filteredRestraunt=filteredList.filter((res)=> res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setListOfRestraunts(filteredRestraunt);
                }}>Search</button>
                </div>

                <div>
                    <button className="px-4 py-1 bg-gray-100 rounded-lg cursor-pointer"
                    onClick={()=>{
                    let filteredList=listOfRestraunts.filter((resData)=>resData?.card?.card?.info?.avgRating>4.0);
                    setListOfRestraunts(filteredList);
                }} >
                    Top Rated Restraunts
               </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    listOfRestraunts.map((restraunt)=>(
                    <Link to={"/ResMenu/"+restraunt?.card?.card?.info?.id} 
                        key={restraunt?.card?.card?.info?.id} >
                        {restraunt?.card?.card?.info?.promoted?(<RestaurantCardPromoted resData={restraunt}/>):(<RestrauntCard resData={restraunt} />)}
                    </Link>))
                }
            </div>
        </div>
    )
}

export default Body;