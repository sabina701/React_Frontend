import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { ProductContext } from "../components/context/ProductContext";
import { Placeholder } from "../components/Placeholder";

const Products = () => {
  const { data, loading } = useContext(ProductContext);

  const [more, setMore] = useState(13);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = data.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.title?.toLowerCase().includes(searchText) ||
      product.description?.toLowerCase().includes(searchText) ||
      product.category?.name?.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="ms-5 mt-5">
          {search ? `Search results for "${search}"` : "Products"}
        </h2>

        <p style={{ color: "orange" }} className="px-5 py-1 fs-4">
          On Sale Now
        </p>

        <div className="row row-cols-lg-4 px-5 py-5">
          {loading ? (
            Array.from({ length: more }).map((_, index) => (
              <Placeholder key={index} />
            ))
          ) : filteredProducts.length === 0 ? (
            <p className="text-center fs-4">No products found for "{search}"</p>
          ) : (
            filteredProducts
              .slice(1, more)
              .map((product) => <Card key={product.id} product={product} />)
          )}
        </div>

        {!loading && filteredProducts.length > more && (
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-primary m-5 h-50 w-50"
              onClick={() => setMore((prev) => prev + 4)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
