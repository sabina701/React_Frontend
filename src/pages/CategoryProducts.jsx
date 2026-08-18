import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Placeholder from "../Placeholder";
import Card from "../components/Card";
import "../css/CategoryProducts.css";

const CategoryProducts = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [more, setMore] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Products");
        }
        const result = await response.json();

        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="container-fluid">
        <div className="container categoryProduct-container">
          {products.slice(0, more).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <div className="button-container my-btn">
          <button
            className="btn btn-primary categoryProduct-button mb-5"
            onClick={() => setMore((prev) => prev + 4)}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
