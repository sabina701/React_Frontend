import React from "react";
import Btn from "./Btn";
import "../css/App.css";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/productdetail/${product.id}`);
  }

  return (
    <div className="card main-card" onClick={handleClick}>
      <img src={product.images[0]} alt={product.title} />

      <div className="card-body">
        <h5 className="card-title">
          {product.title.length > 15
            ? product.title.slice(0, 15) + "..."
            : product.title}
        </h5>

        <p className="card-text">
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>

        <p className="price text-dark">
          <b>Rs.</b> {product.price}
        </p>

        <div className="btns">
          <Btn className="cart-btn btn" product={product} type="ADD_TO_CART">
            Add to cart
          </Btn>

          <Btn
            className="wishlist-btn btn"
            product={product}
            type="ADD_TO_WISHLIST"
          >
            Add to wishlist
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Card;
