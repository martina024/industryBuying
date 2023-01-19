import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
// {
//   "_id": "63c7de1b68241ad103d4a7e5",
//   "title": "AgriPro 3 HP Butterfly Rice Mill Machine without Motor APRM6N",
//   "price": 11800,
//   "quantity": 0,
//   "brand": "AgriPro",
//   "category": "Agriculture Garden & Landscaping",
//   "sub_category": "Grain Processing Machine",
//   "images": [
//   {
//   "image_url": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012170997.webp"
//   },
//   {
//   "image_url": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012172103.webp"
//   },
//   {
//   "image_url": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012174141.webp"
//   },
//   {
//   "image_url": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012174720.webp"
//   }
//   ]
//   },
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