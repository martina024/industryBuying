import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
const Product = (curElem) => {
  const { _id, title,brand, images, price, category } = curElem;
  return (
    <NavLink to={`/product/${_id}`}>
      <div className="card">
        <figure>
          <img src={images[0].image_url} alt={title} />
          <figcaption className="caption">{category.slice(0, 10)}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{brand}</h3>
            <p className="card-data--price">{price}</p>
          </div>
          <p>{title.slice(0,40)}</p>
        </div>
        <div className='cart-data-button'>
        <Link to="/cart"><Button>Add to Cart</Button></Link>
        <Link to="/payment"><Button className='cart-data-buy'>Buy now</Button></Link>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;