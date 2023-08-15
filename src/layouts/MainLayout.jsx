import React from "react";
import { Outlet } from "react-router-dom";
import MainSidebar from "../components/common/MainSidebar";
import MainHeader from "../components/common/MainHeader";

export const MainLayout = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-full max-h-[100%]">
      <MainSidebar />
      <div className="bg-white text-black">
        <MainHeader />
        <Outlet />
      </div>
    </div>
  );
};
