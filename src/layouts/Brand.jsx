import React from "react";
import BrandHeader from "../components/brand/BrandHeader";
import BrandSidebar from "../components/brand/BrandSidebar";
import { Navigate, Outlet } from "react-router-dom";
export const BrandLayout = () => {
  const user = localStorage.getItem("user");
  if (user !== "brand") {
    if (user === "admin") {
      return <Navigate to="/admin" />;
    }
    return <Navigate to="/login" />;
  }
  return (
    <div className="grid grid-cols-[250px_1fr] h-full max-h-[100%]">
      <BrandSidebar />
      <div className="bg-teal-500">
        <BrandHeader />
        <Outlet />
      </div>
    </div>
  );
};
export default BrandLayout;
