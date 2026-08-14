// src/components/header/Header.jsx
import React from "react";
import Logo from "./Logo";
import Navlink from "./Navlink";
import Icons from "./Icons";
import "../../css/Header.css";

const Header = () => {
  return (
    <div className="my-header-container">
      <Logo />
      <Navlink />
      <Icons />
    </div>
  );
};

export default Header;
