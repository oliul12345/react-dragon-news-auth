/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

            if(loading){
                return <p>Loading ......</p>
            }
   
            if(user){
                return children
            }
            return <Navigate state={location.pathname} to='/login'></Navigate>
        
   
};

export default PrivateRoutes;