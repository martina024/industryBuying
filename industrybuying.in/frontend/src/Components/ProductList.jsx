/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/AppReducer/action";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const products = useSelector((store) => store.AppReducer.products);
  const location = useLocation();
  // console.log(location)
  useEffect(()=>{
      if(location || products.length === 0){
          const category = searchParams.getAll('category');
          const Params = {
              params:{
                  category:category,
                  _sort: searchParams.get('sortBy') && "price",
                  _order: searchParams.get('sortBy')
              }
          }
                
        dispatch(getProducts(Params))
      }
  },[location.search])
  console.log(products);
  return (
    <>
      {products.length > 0 &&
        products.map((preeti) => {
          return (
            <div key={preeti._id} style={{ width: "310px" }}>
                <Link to={`/product/${preeti._id}`}>
                  <Product {...preeti} />
                </Link>
              </div>
          );
        })}
    </>
  );
};

export default ProductList;

