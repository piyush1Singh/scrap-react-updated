import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import UserDashboard from "./pages/userDashboard"; // Assuming you still want a default user dashboard
import AdminDashboard from "./pages/adminDashboard"; // Import AdminDashboard for /admin routes
import Product from "./admin/Product"; 
import Banner from "./admin/Banner"; 
import Category from "./admin/Category"; 
import Login from "./admin/Login"; 
import FeaturedCollection from "./admin/FeaturedCollection"; 
import AuthRoute from "./pages/AuthRoute"; // Import AuthRoute

function App() {
  return (
    <Routes>
      {/* Admin routes with authentication check */}
      <Route path="/admin/*" element={<AuthRoute><AdminDashboard /></AuthRoute>} />
      <Route path="/admin/product" element={<AuthRoute><Product /></AuthRoute>} />
      <Route path="/admin/banner" element={<AuthRoute><Banner /></AuthRoute>} />
      <Route path="/admin/category" element={<AuthRoute><Category /></AuthRoute>} />
      <Route path="/admin/collection" element={<AuthRoute><FeaturedCollection /></AuthRoute>} />
      <Route path="/admin/login" element={<Login />} />

      {/* User routes (default dashboard, etc.) */}
      <Route path="*" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
