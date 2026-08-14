import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import Carousel from "../components/Home/Carousel";
import FlashSales from "../components/flashsales/FlashSales";
const Home = () => {
  return (
    <>
  
      <Carousel />

      <FlashSales />
  
    </>
  );
};

export default Home;
