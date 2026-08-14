import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category-products/:id" element={<CategoryProducts />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default MyRoute;
