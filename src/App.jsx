import React, { useState } from "react";
import MyRoute from "./MyRoute";

import "./css/App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      {/* <Home />
      <Foot /> */}

      <MyRoute />
      <ToastContainer />
    </>
  );
};

export default App;
