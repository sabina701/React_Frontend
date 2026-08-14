import React, { useMemo } from "react";
import Ratings from "../components/Ratings";
import "../css/Productdetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [noItem, setNoItem] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  function expensive(n) {
    let r = 0;
    setNoItem((prev) => prev + 1);
    for (let i = 0; i <= 100000000; i++) {
      r = i + n;
    }
    return r;
  }
  const n = 10;
  const value = useMemo(
    function expensive() {
      let r = 0;
      for (let i = 0; i <= 1000000; i++) {
        r = n + i;
      }
      return r;
    },
    [n],
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="detail-img col-4">
            <img
              src={data.images?.[0]}
              alt={data.title}
              className="detail-image"
            />
          </div>

          <div className="detail-center col-4">
            <h2 className="heading2">{data.title}</h2>
            <Ratings />
            <div>
              <span className="price">Rs. {data.price}</span>
              <p className="strike-price">Rs.{data.price} +100</p>
            </div>
            <div>
              <p className="text-dark">Color:</p>
              <button className="btn btn-dark w-50 fs-4 ">Black</button>
              <button className="btn btn-success ms-3 fs-4">Gray</button>
            </div>
            <div className="increase-decrease">
              <button
                className="my-btns"
                onClick={() => {
                  if (noItem > 1) {
                    setNoItem((prev) => prev - 1);
                  }
                }}
              >
                -
              </button>
              <span className="mx-2">{noItem}</span>
              <button
                className="my-btns"
                onClick={() => {
                  return setNoItem((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="details-btns">
              <button className="detail-buy-btn">Buy Now</button>
              <button className="detail-cart-btn">Add to cart</button>
            </div>
          </div>

          <div className="detail-right col-4">
            <div className="delivery">
              <div className="ps-3">
                <h2>Delivery Options</h2>
                <p className="text-dark">Kathmandu, Bagmati</p>
                <p className="text-dark">Standard Delivery: Rs. 170</p>
                <p className="text-dark">Cash on Delivery Available</p>
              </div>
            </div>
            <div className="return-warranty">
              <div className="ps-2">
                <h2>Return & Warrantly</h2>
                <p className="text-dark">14 Days Free Returns</p>
                <p className="text-dark">No Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
