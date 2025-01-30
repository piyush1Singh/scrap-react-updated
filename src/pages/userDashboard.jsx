import { useState, useEffect } from "react";
import "../assets/App.css";
import Index from "./Index";
import "../index.css";
import CategoryProvider from "../CategoryContext";
import CategoryProduct from "./CategoryProduct";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "../component/ProductDescription";
import CartProvider from "../CartContext";
import Checkout from "../component/Checkout";

const userDashboard = () => {
  return (
    <CartProvider>
      <CategoryProvider>
   
          {/* This `Route` component defines a path "/categories/:id", where
          ":id" represents a dynamic parameter. It associates this path with the
          `CategoryProduct` component, which will be rendered when the path
          matches. */}
     <CategoryProduct />

       <Index />

       <Checkout />

        <ProductDescription />
          {/*  This `Route` component defines a path "/product/:id", where ":id"
          represents a dynamic parameter. It associates this path with the
          `ProductDescription` component, which will be rendered when the path
          matches. */}
        
      </CategoryProvider>
    </CartProvider>
  );
};

export default userDashboard;
