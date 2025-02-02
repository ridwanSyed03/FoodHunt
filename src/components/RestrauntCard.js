import { CON_URL } from "../utils/constants";


const styleCard ={
    backgroundColor:"#f0f0f0"
}

const RestrauntCard = (props) =>{
    const {resData}=props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla:{deliveryTime}}=resData?.card?.card?.info;
    return(
        <div className="m-2 p-2 w-[236px] h-97 rounded-lg bg-gray-100  hover:bg-gray-200">
            <img 
            className="rounded-lg h-48 w-56"
            alt="res-logo"
            src={CON_URL+cloudinaryImageId}/>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 >{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestrauntCard;