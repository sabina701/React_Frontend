import React, { useState, useEffect, useContext } from "react";
import Card from "../Card";
import { ProductContext } from "../context/ProductContext";
import { Placeholder } from "../Placeholder";

const FlashSales = () => {
  const { data, loading } = useContext(ProductContext);
  const [more, setMore] = useState(4);

  return (
    <>
      <div className="container">
        <h2 className="ms-5 mt-5">Flash Sales</h2>
        <p style={{ color: "orange" }} className="px-5 py-1 fs-4 ">
          On Sale Now
        </p>
        <div className="row row-cols-lg-4 px-5 py-5 ">
          {loading
            ? Array.from({ length: more }).map((_, index) => (
                <Placeholder key={index} />
              ))
            : data.slice(0, more).map((product) => {
                return <Card key={product.id} product={product} />;
              })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-primary w-50 mb-5"
            onClick={() => setMore((prev) => prev + 4)}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
