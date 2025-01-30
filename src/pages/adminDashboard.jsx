import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "../assets/App.css";
import Dashboard from "../admin/Dashboard";
import Login from "../admin/Login";
import Product from "../admin/Product";
import Category from "../admin/Category";
import Banner from "../admin/Banner";
import FeaturedCollection from "../admin/FeaturedCollection";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function AdminDashboard() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/collection" element={<FeaturedCollection />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AdminDashboard;
