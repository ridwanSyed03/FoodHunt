import { CON_URL } from "../utils/constants";

const RestrauntCard = (props) =>{
    const {resData}=props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla:{deliveryTime}}=resData?.card?.card?.info;
    return(
        <div className="m-2 p-2 w-[236px] h-98 rounded-lg bg-gray-100  hover:bg-gray-200">
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
};

//input-RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute m-2 p-2 bg-gray-400 text-white rounded-lg">Promoted</label>
                <RestrauntCard {...props}/>
            </div>
        )
    }
}

export default RestrauntCard;