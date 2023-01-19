import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
const Product = (curElem) => {
  const { _id, title,brand, images, price, category } = curElem;
  return (
    <NavLink to={`/product/${_id}`}>
      <div className="card">
        <figure>
          <img src={images[0].image_url} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{brand}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
          <p>{title.slice(0,90)}</p>
        </div>
        <div className='cart-data-button'>
        <Button>Add to Cart</Button>
        <Button className='cart-data-buy'>Buy now</Button>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;