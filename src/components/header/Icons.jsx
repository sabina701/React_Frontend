import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loginregister from "../Loginregister";

const Icons = () => {
  const [showLoginRegister, setShowLoginRegister] = useState(false);

  return (
    <ul className="icons">
      <li style={{ position: "relative" }}>
        <i
          className="bi bi-person"
          style={{ cursor: "pointer" }}
          onClick={() => setShowLoginRegister((prev) => !prev)}
        ></i>

        {showLoginRegister && (
          <Loginregister closeMenu={() => setShowLoginRegister(false)} />
        )}
      </li>

      <li>
        <Link to="/cart">
          <i className="bi bi-cart"></i>
        </Link>
      </li>

      <li>
        <Link to="/wishlist">
          <i className="bi bi-heart"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Icons;
