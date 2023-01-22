import React from 'react'
import { Navigate } from "react-router-dom";

const AdminPrivateRoutes =({children}) => {

const adminToken = JSON.parse(localStorage.getItem("admintoken")) || "" ;

if(adminToken === undefined) {
    return <Navigate to="/admin/login"/>
}

return <Navigate to="/admin/dashboard"/>
};
      
   
  


export default AdminPrivateRoutes
