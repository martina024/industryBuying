import React from 'react'
import { Navigate } from "react-router-dom";

const AdminPrivateRoutes =({children}) => {

    let adminToken = JSON.parse(localStorage.getItem("adminToken")) || "" ;
    let GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "" ;

    console.log(adminToken, "private route")
    
    if(!adminToken && !GSTIN){
        // console.log(adminToken, "private route11")
        // return navigate("/login")
       return <Navigate to="/admin/login"/>
    }

    return children
}

export default AdminPrivateRoutes
