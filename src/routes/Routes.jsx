import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import NewsDetails from "../newsCard/NewsDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/news.json')
            },
            {
                path:"/aNews/:id",
                element:<PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }    
]);

export default router;