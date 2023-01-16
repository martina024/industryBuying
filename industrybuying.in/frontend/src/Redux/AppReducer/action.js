import axios from "axios";
import * as types from "./actionType";

const getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

const getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

const getProductsFailure = () => {
  return { type: types.GET_PRODUCTS_FAILURE };
};