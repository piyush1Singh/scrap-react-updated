import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("Login") === "true"; // Check login state
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" />; // Redirect to login if not logged in
  }

  return children; // Render the children components if logged in
};

export default AuthRoute;
