import {  GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"

const getDataRequest = ()=>
{
    return {
        type:GET_DATA_REQUEST
    }
}
const getDataSuccess = (payload)=>
{
    return {
        type:GET_DATA_SUCCESS,
        payload
    }
}
const getDataFailure = ()=>
{
    return {
        type:GET_DATA_FAILURE
    }
}




export { getDataFailure, getDataRequest,getDataSuccess}