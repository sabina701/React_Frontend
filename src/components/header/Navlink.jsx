import React from "react";
import { NavLink as Nav } from "react-router-dom";

const Navlink = () => {
  return (
    <nav>
      <ul>
        <li> <Nav to="/">Home</Nav></li>
        <li>
          <Nav to="/products">Products</Nav>
        </li>
        <li>
          <Nav to="/category">Category</Nav>
        </li>
        <li>
          <Nav to="/about">About Us</Nav>
        </li>
        <li>
          <Nav to="/contact">Contact Us</Nav>
        </li>
      </ul>
    </nav>
  );
};

export default Navlink;
