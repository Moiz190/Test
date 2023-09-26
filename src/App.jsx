import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import BrandHome from "./pages/Brand/BrandHome.jsx";
import BrandServices from "./pages/Brand/BrandServices.jsx";
import BrandAbout from "./pages/Brand/BrandAbout.jsx";
import AdminPortfolio from "./pages/Admin/AdminPortfolio.jsx";
import AdminContact from "./pages/Admin/AdminContact.jsx";
import AdminServices from "./pages/Admin/AdminServices.jsx";
import AdminAbout from "./pages/Admin/AdminAbout.jsx";
import AuthChecker from "./components/AuthChecker.jsx";
import Login from "./components/Login.jsx";
function App() {
  const Routes = createBrowserRouter([
    {
      path: "/",
    element: <AuthChecker />,
    },
    {
      path: "/admin",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },
        {
          path: "home",
          element: <AdminHome />,
        },
        {
          path: "portfolio",
          element: <AdminPortfolio />,
        },
        {
          path: "contact",
          element: <AdminContact />,
        },
        {
          path: "services",
          element: <AdminServices />,
        },
        {
          path: "about",
          element: <AdminAbout />,
        },
      ],
    },
    {
      path: "/brand",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },
        {
          path: "home",
          element: <BrandHome />,
        },
        {
          path: "services",
          element: <BrandServices />,
        },
        {
          path: "About",
          element: <BrandAbout />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return (
    <div className="h-full">
      <RouterProvider router={Routes}>
        <Route path="/admin/*" element={<ProtectedRoutes userType="admin" />} />
        <Route path="/brand/*" element={<ProtectedRoutes userType="brand" />} />
      </RouterProvider>
    </div>
  );
}

export default App;
export const ProtectedRoutes = ({ userType }) => {
  const user = localStorage.getItem("user");
  if (user === userType) {
    return <Navigate to={`/${userType}/`} />;
  } else {
    return <Navigate to={"/login"} />;
  }
};
