import { Link, useNavigate } from "react-router-dom";
// import { useMemo, useState } from "react";
import '../../styles/MainHeader.css'
export const MainHeader = () => {
  const activeRole = localStorage.getItem('user')
  return (
    <nav className="AdminNav flex justify-between">
      <h2 className="text-white">{activeRole === 'admin' ? 'Admin' : 'Brand'}</h2>
    </nav>
  );
};
export default MainHeader