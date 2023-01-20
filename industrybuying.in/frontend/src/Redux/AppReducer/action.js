import axios from "axios";
import * as types from "./actionType";
const getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};
const getProducts = (queryParams) =>(dispatch) => {
   dispatch(getProductsRequest());

   return axios.get('https://doubtful-wasp-cowboy-boots.cyclic.app/products',queryParams).then(r=>{
    dispatch({
        type:types.GET_PRODUCTS_SUCCESS,
        payload:r.data
    })
   }).catch((e)=>{
    dispatch({
        type: types.GET_PRODUCTS_FAILURE
    })
   })
}

export {getProducts}