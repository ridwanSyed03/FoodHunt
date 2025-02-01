import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy, Suspense } from "react"


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
        
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
            }
        ],
        errorElement:<Error />
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);