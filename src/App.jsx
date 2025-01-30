import { useState, useEffect } from "react";
import "./assets/App.css";
import Index from "./pages/Index";
import "./index.css";
import CategoryProvider from "./CategoryContext";
import CategoryProduct from "./pages/CategoryProduct";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./component/ProductDescription";
import CartProvider from "./CartContext";
import Checkout from "./component/Checkout";

const App = () => {
  return (
    <CartProvider>
      <CategoryProvider>
        <Routes>
          {/* This `Route` component defines a path "/categories/:id", where
          ":id" represents a dynamic parameter. It associates this path with the
          `CategoryProduct` component, which will be rendered when the path
          matches. */}
          <Route path="/categories/:id" element={<CategoryProduct />} />

          <Route path="/" element={<Index />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/product/:id" element={<ProductDescription />} />
          {/*  This `Route` component defines a path "/product/:id", where ":id"
          represents a dynamic parameter. It associates this path with the
          `ProductDescription` component, which will be rendered when the path
          matches. */}
        </Routes>
      </CategoryProvider>
    </CartProvider>
  );
};

export default App;
