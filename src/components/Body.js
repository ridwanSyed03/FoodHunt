import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const[listOfRestraunts, setListOfRestraunts]= useState([]);
    const[searchText, setSearchText]= useState("");
    const[filteredList, setFilteredList]= useState([]);
    const onlineStatus =useOnlineStatus();

    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4673154&lng=78.8242089&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json=await data.json();

        setListOfRestraunts(json?.data?.cards.slice(3));
        setFilteredList(json?.data?.cards.slice(3));
    }

    if(!onlineStatus) return <h1>Look's like you're offline!! pls check your internet connection.</h1>

    const handleChange=(event)=>{
        setSearchText(event.target.value);
    }

    return listOfRestraunts.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
            <div className="Search-bar">
                <input value={searchText} onChange={handleChange} className="search-box" />
                <button onClick={()=>{
                    const filteredRestraunt=filteredList.filter((res)=> res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setListOfRestraunts(filteredRestraunt);
                }}>Search</button>
            </div>
            <div className="filer-btn">
               <button onClick={()=>{
                    let filteredList=listOfRestraunts.filter((resData)=>resData?.card?.card?.info?.avgRating>4.0);
                    setListOfRestraunts(filteredList);
                }} >
                    Top Rated Restraunts
               </button>
            </div>
            </div>
            <div className="res-container">
                {
                    listOfRestraunts.map((restraunt)=>(
                    <Link to={"/ResMenu/"+restraunt?.card?.card?.info?.id} key={restraunt?.card?.card?.info?.id} ><RestrauntCard resData={restraunt} /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;