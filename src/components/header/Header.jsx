// src/components/header/Header.jsx
import React, { useState } from "react";
import Logo from "./Logo";
import Navlink from "./Navlink";
import Icons from "./Icons";
import "../../css/Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="my-header-container">
      <Logo />
      <SearchBar />
      <Navlink menuOpen={menuOpen} />
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <Icons />
    </div>
  );
};

export default Header;
