import React, { useEffect, useState } from "react";
import "../css/Category.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/category-products/${id}`);
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="card-container my-card ">
      {data.slice(0, 5).map((category) => (
        <div
          className="card "
          style={{ marginBottom: "33px" }}
          key={category.id}
          onClick={() => handleClick(category.id)}
        >
          <img
            src={category.image}
            alt={category.name}
            className="category-image"
          />

          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
