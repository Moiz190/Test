import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const MainSidebar = () => {
  const navigate = useNavigate();
  const activeRole = localStorage.getItem("user");
  const [selectedNavs, setSelectedNavs] = useState([]);
  const adminNav = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Portfolio",
      href: "portfolio",
    },
    {
      title: "Contact Us",
      href: "contact",
    },
    {
      title: "Services",
      href: "services",
    },
    {
      title: "About Us",
      href: "about",
    },
  ];
  const brandNav = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Services",
      href: "services",
    },
    {
      title: "About Us",
      href: "about",
    },
  ];
  useMemo(() => {
    if (activeRole === "admin") {
      setSelectedNavs(adminNav);
    } else {
      setSelectedNavs(brandNav);
    }
  }, [activeRole]);
  const role = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    navigate("/login");
  };
  return (
    <div className="flex flex-col min-h-screen">
      <ul className="AdminHeader p-2 flex flex-col gap-2">
        {selectedNavs.map((nav) => (
          <Link key={nav.title} to={nav.href}>
            <div className="hover:bg-red-500 transition duration-500 hover:text-white rounded-lg p-2">
              {nav.title}
            </div>
          </Link>
        ))}
      </ul>
      <div className="mt-auto">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
export default MainSidebar;
