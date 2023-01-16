import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoutes =({children}) => {

const token = JSON.parse(localStorage.getItem("token")) || "" ;

// if(token === undefined) {
//     return <Navigate to="login"/>
// }

return children
};
      
   
  


export default PrivateRoutes
