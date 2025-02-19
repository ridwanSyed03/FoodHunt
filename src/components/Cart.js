import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();

    const handleOrder=()=>{
        handleClearCart();
    }
    
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    const totalPrice = useMemo(() => {
        if (cartItems.length === 0) return 0;
        return cartItems.reduce((total, item) => 
            total + ((item.card.info.price || item.card.info.defaultPrice) / 100), 0 // Initial value: 0
        );
    }, [cartItems]);

    return(
        <div className="text-center m-4 p-4">
            <div className="font-bold text-2xl">Cart</div>
            <button className="bg-gray-400 text-white rounded-xl p-2 m-2 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-7/12 m-auto">
                <ItemList items={cartItems} />
                {cartItems.length==0&&<h1>Cart is Empty. Please add Items to the Cart</h1>}
                {cartItems.length>0&&
                <div className="flex">
                    <div className="w-2/12 m-2">
                        <h2 className="font-bold">Billing Details:</h2>
                        <h2>Item Total:</h2>
                        <h2 className="">Delivery Fee:</h2>
                        <h2 className="font-bold">Total Payment:</h2>
                    </div>
                    <div className="w-2/12 m-2">
                        <br></br>
                        <h2>₹{totalPrice}</h2>
                        <h2 className="">₹{48}</h2>
                        <h2 className="font-bold">₹{totalPrice+48}</h2>
                    </div>
                    <div className="w-4/12"></div>
                    <div className="m-2">
                            <button className="my-8 p-2 border border-green-300 rounded-xl bg-green-600 text-white cursor-pointer"
                            onClick={handleOrder}
                            >Place Order</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
export default Cart;