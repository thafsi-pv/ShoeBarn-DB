import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./ProductList.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [productList, setProductList] = useState([{}]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await axios("http://localhost:3005/api/products/");
    console.log("🚀 ~ file: ProductList.jsx:13 ~ getAllProducts ~ data:", data);
    setProductList(data?.data);
  };

  return (
    <div className="productList">
      {productList.map((item) => (
        <Link className="link" to={`/product/${item._id}`}>
          <Card  key={item.id} details={item} />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
