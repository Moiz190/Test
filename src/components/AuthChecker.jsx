import React from "react";
import { Navigate } from "react-router-dom";

const AuthChecker = ({ Component }) => {
  const user = localStorage.getItem("user");
  if (user === "admin") {
    return <Navigate to="/admin" />;
  }
  if (user === "brand") {
    return <Navigate to="/brand" />;
  }
  return <Navigate to="/login" />;
};

export default AuthChecker;
