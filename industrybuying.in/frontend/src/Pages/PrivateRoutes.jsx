import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const PrivateRoutes =({children}) => {

    const navigate = useNavigate()

let token = JSON.parse(localStorage.getItem("token")) || "" ;

console.log(token, "private route")

if(token == "" || token == undefined) {
    console.log(token, "private route11")
    // return navigate("/login")
   return <Navigate to="/login"/>
}

return children
};
      
   
  


export default PrivateRoutes
