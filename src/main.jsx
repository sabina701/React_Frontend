import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./components/context/ProductContext.jsx";
import { BtnProvider } from "./components/context/BtnContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <BtnProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </BtnProvider>
    </ProductProvider>
  </StrictMode>,
);
