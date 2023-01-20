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
  useEffect(() => {
    let queryParams;
    if (location.search || products.length === 0) {
      queryParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getProducts(queryParams));
  }, [location.search, dispatch, products.length, searchParams]);
  return (
    <>
      {products.length > 0 &&
        products.map((preeti) => {
          return (
            <div key={preeti.id} style={{ width: "310px" }}>
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

