import React from "react";
import AdminHeader from "../components/admin/Header";
import AdminSidebar from "../components/admin/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
export const AdminLayout = () => {
  const user = localStorage.getItem("user");
  if (user !== "admin") {
    if (user === "brand") {
      return <Navigate to="/brand" />;
    }
    return <Navigate to="/login" />;
  }
  return (
    <div className="grid grid-cols-[250px_1fr] h-full max-h-[100%]">
      <AdminSidebar />
      <div className="bg-white text-black">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
