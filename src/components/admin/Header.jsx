import { Link, useNavigate } from "react-router-dom";
import "../../styles/AdminHeader.css";
import { useMemo, useState } from "react";
export const AdminHeader = () => {
  const [role,setRole] = useState("admin");
  const [selectedNavs, setSelectedNavs] = useState([]);
  const navigate = useNavigate()
  const adminNav = [
    {
      title:'Home',
      href: "home",
    },
    {
      title:'Portfolio',
      href: "portfolio",
    },
    {
      title:'Contact Us',
      href: "contact",
    },
    {
      title:'Services',
      href: "services",
    },
    {
      title:'About Us',
      href: "about",
    },
  ]
  const brandNav =[
    {
      title:'Home',
      href: "home",
    },
    {
      title:'Services',
      href: "services",
    },
    {
      title:'About Us',
      href: "about",
    },
  ]
  useMemo(()=>{
    if(role === 'admin'){
      setSelectedNavs(adminNav)
    }
    else{
      setSelectedNavs(brandNav)
    }
  },[role])
  const handleSwitchRoles = ()=>{
    if(role === 'admin'){
      setRole('brand')
    }
    else{
      setRole('admin')
    }
  }
  const handleLogout = ()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('password')
    navigate('/login')
  }
  return (
    <nav className="AdminNav flex justify-between">
      <h2 className="text-white">{role === 'admin' ? 'Admin' : 'Brand'}</h2>
      <button onClick={handleSwitchRoles}>Switch to {role}</button>
      <button onClick={handleLogout}>Logout</button>
      <ul className="AdminHeader text-white flex items-center gap-4">
        {
          selectedNavs.map(nav=>(
            <Link key={nav.title} to={nav.href}>{nav.title}</Link>
          ))
        }
      </ul>
    </nav>
  );
};
export default AdminHeader;
