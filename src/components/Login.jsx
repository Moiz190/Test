import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Input } from "@mui/material";
export default function Login() {
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
    isAuthenticated: false,
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [error, setError] = useState(false);
  const handleLogin = () => {
    const { email, password } = loginCreds;
    setError(false);
    if (email && password) {
      setLoginCreds((oldVal) => ({ ...oldVal, isAuthenticated: true }));
      if (email === "admin@gmail.com" && password === "123") {
        localStorage.setItem("user", "admin");
        setTimeout(() => {
          navigate("/admin/home");
        }, 300);
      } else if (email === "brand@gmail.com" && password === "123") {
        localStorage.setItem("user", "brand");
        setTimeout(() => {
          navigate("/brand/home");
        }, 300);
      } else {
        setLoginCreds((oldVal) => ({ ...oldVal, isAuthenticated: false }));
        setTimeout(() => {
          setError(true);
        }, 300);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && loginCreds.email && loginCreds.password) {
        console.log("okau");
        handleLogin();
      }
    });
  }, []);
  return (
    <div className="grid grid-cols-1 bg-[url('/assets/login.jpg')] bg-center bg-cover lg:grid-cols-2 justify-center items-center h-full p-2">
      <div className="hidden lg:block"></div>
      <Card
        variant="outlined"
        className="flex flex-col shadow-lg rounded-lg min-w-[300px] mx-auto w-full max-w-[400px]"
      >
        <CardContent className="flex flex-col gap-1">
          <div className="mb-6 text-center font-semibold text-3xl">
            <span>Welcome Here</span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="userName">Email</label>
            <Input
              variant="outlined"
              id="userName"
              placeholder="Email"
              error={validation.email}
              onChange={(e) => {
                setLoginCreds((oldVal) => ({
                  ...oldVal,
                  email: e.target.value,
                }));
                if (!emailRegex.test(e.target.value) || !e.target.value) {
                  setValidation((oldVal) => ({ ...oldVal, email: true }));
                } else {
                  setValidation((oldVal) => ({ ...oldVal, email: false }));
                }
              }}
            />
          </div>
          <div className="flex mb-6 flex-col gap-1">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              error={validation.password}
              onChange={(e) => {
                setLoginCreds((oldVal) => ({
                  ...oldVal,
                  password: e.target.value,
                }));
                if (!e.target.value) {
                  setValidation((oldVal) => ({ ...oldVal, password: true }));
                } else {
                  setValidation((oldVal) => ({ ...oldVal, password: false }));
                }
              }}
            />
          </div>
          <Button
            disabled={!loginCreds.password || !loginCreds.email}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          {error && (
            <div className="text-center text-red-500">
              Email or Password is not correct.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
