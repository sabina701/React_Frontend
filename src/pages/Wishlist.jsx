import React, { useState } from "react";

import { Placeholder } from "../components/Placeholder";
import Btn from "../components/Btn";
import { toast } from "react-toastify";
const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  function handleRemove(event, id) {
    // event.stopPropagation();
    const updated = data.filter((product) => product.id !== id);
    setData(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.success("Item Removed from the wilshlist");
  }

  return (
    <div className="container">
      {data.length === 0 && "Nothing in the Wishlist"}
      <h2 className="ms-5 mt-5">Wishlist</h2>
      <p style={{ color: "orange" }} className="px-5 py-1 fs-4 ">
        On Sale Now
      </p>
      <div className="row row-cols-lg-4 px-5 py-5 ">
        {loading
          ? Array.from({ length: data.length }).map((_, index) => (
              <Placeholder key={index} />
            ))
          : data.map((product) => {
              return (
                <div className="card  d-flex" key={product.id}>
                  <img
                    src={product.images[1] || product.images[0]}
                    className="card-img-top"
                    alt="{product.title}"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 50)}
                    </p>
                    <p>Rs. {product.price}</p>
                    <Btn className="cart-btn" product={product} type="cart">
                      Add to cart
                    </Btn>
                    <button
                      className="cart-btn mt-3"
                      style={{ backgroundColor: "red" }}
                      onClick={() => handleRemove(event, product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="d-flex justify-content-center align-items-center,padding:10px"></div>
    </div>
  );
};

export default Wishlist;
