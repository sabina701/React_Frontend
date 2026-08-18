import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="main-layout">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default Layout;
