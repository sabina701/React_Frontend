import React from "react";
import "../css/Rating.css";
const Ratings = () => {
  return (
    <div>
      <div className="rating-icons">
        <i class="bi bi-star-fill "></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>

        <span className="ms-2">19687 (ratings)</span>
      </div>
    </div>
  );
};

export default Ratings;
