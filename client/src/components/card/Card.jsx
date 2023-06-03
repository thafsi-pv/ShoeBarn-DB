import React from "react";
import "./Card.css";

function Card({ details }) {
  const { brand, description, image, price, name, mrp} = details;
  return (
    <div className="product-card">
      <div className="badge">New</div>
      <div className="product-tumb">
        <img src={image}alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{brand}</span>
        <h4>
          <a href="">{name}</a>
        </h4>
        <p>{description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>₹{mrp}</small>₹{price}
          </div>
          <div className="product-links">
            <a href="">
              <i className="fa fa-heart"></i>
            </a>
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
