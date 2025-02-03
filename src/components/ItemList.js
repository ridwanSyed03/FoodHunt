import { CON_URL } from "../utils/constants";

const ItemList = ({items})=>{
    return(
        <div>
            {items.map((item)=>{
                return (
                    <div className="flex border-b-2 border-gray-400 m-2 p-2">
                        <div className="w-9/12 text-start">
                            <p className="font-bold">{item?.card?.info?.name}</p>
                            <p className="font-bold">₹{item?.card?.info?.price/100}</p> 
                            ⭐<span>{item?.card?.info?.ratings?.aggregatedRating?.rating}</span> ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                            <p>{item?.card?.info?.description}</p>
                            <br></br>
                        </div>
                        <div className="w-3/12 h-max relative">
                        {item.card?.info?.imageId&&<img className="rounded-xl"
                         src={CON_URL+item.card?.info?.imageId} />}
                         <button className="border px-6 py-2 absolute -bottom-4 left-10 bg-white rounded-lg">ADD</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;