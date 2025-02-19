import React, { Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy, Suspense } from "react"
import UserContext from "./utils/UserContext"
import { useState } from "react"
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Register from "./components/Register"


const AppLayout = () => {
    const[userName, setUserName]= useState();

    //aunthentication like code
    useEffect(()=>{
        const data={
            name:"Ridwan",
        }
        setUserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName}} >
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
};

const About=lazy(()=>import("./components/About"));

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/ResMenu/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            }
        ],
        errorElement:<Error />
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);