import React, { useEffect, useRef, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

function ProductDetails() {
  const scrollRef = useRef(null);
  const id = useParams();
  const [productDetails, setProductDetails] = useState({});
  console.log(
    "🚀 ~ file: ProductDetails.jsx:10 ~ ProductDetails ~ productDetails:",
    productDetails
  );
  const {
    image,
    name,
    price,
    longDescription,
    rating,
    color,
    size,
    availability,
  } = productDetails;
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const response = await axios(`http://localhost:3005/api/products/${id.id}`);
    setProductDetails(response?.data);
  };
  if (productDetails.length == 1) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-detail-contatiner" ref={scrollRef}>
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <div className="product-details">
          <div className="prd-detail">
            <h2>{name}</h2>
          </div>
          <div className="prd-detail">
            <p>{availability}</p>
          </div>
          <div className="prd-detail">
            <h4>₹{price}</h4>
          </div>
          <div className="prd-detail">
            <p>{longDescription}</p>
          </div>

          <div className="prd-detail">
            <p className="avail-size">Color </p>
            <h4>{color}</h4>
          </div>
          <div className="prd-detail">
            <p className="avail-size">Rating</p>
            <h4>
              <span>
                <AiFillStar />
                {rating}
              </span>
            </h4>
          </div>
          <div className="prd-detail">
            <p className="avail-size">Available Size </p>
            <h4>{size?.join(", ")}</h4>
          </div>
          <div className="action-button">
            <button className="cart">
              Add to cart <BsFillCartCheckFill />
            </button>
            <button className="buy-now">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
