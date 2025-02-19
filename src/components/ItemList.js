import { CON_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item)=>{
                return (
                    <div className="flex border-b-2 border-gray-400 m-2 p-2">
                        <div className="w-9/12 text-start">
                            <p className="font-bold">{item?.card?.info?.name}</p>
                            <p className="font-bold">₹{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100}</p> 
                            ⭐<span>{item?.card?.info?.ratings?.aggregatedRating?.rating}</span> ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                            <p>{item?.card?.info?.description}</p>
                            <br></br><br></br>
                        </div>
                        <div className="w-3/12 h-max relative">
                        {item.card?.info?.imageId&&<img className="rounded-xl"
                         src={CON_URL+item.card?.info?.imageId} />}
                         <button className="font-bold border border-black px-6 py-2 absolute -bottom-2 left-10 bg-white rounded-lg text-green-700 cursor-pointer"
                         onClick={()=>handleAddItem(item)}
                         >ADD</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;