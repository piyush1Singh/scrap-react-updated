import { useState, useEffect } from "react";
import "../assets/App.css";
import Index from "./Index";
import "../index.css";
import CategoryProvider from "../CategoryContext";
import CategoryProduct from "./CategoryProduct";
import { Routes, Route, Outlet } from "react-router-dom"; // Import Routes, Route, and Outlet
import ProductDescription from "../component/ProductDescription";
import CartProvider from "../CartContext";
import Checkout from "../component/Checkout";

const UserDashboard = () => {
  return (
    <CartProvider>
      <CategoryProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/:id" element={<CategoryProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
        <Outlet /> {/* This renders nested child routes if needed */}
      </CategoryProvider>
    </CartProvider>
  );
};

export default UserDashboard;
