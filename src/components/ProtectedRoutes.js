import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const adminAuth = () => {
  const adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  return adminDetails;
};

const ProtectedRoutes = () => {
  const isAuth = adminAuth();

  return isAuth ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoutes;
