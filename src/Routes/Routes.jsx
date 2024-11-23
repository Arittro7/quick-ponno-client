import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import PrivateRoute from "./Private/PrivateRoute";
import Overview from "../Pages/Dashboard/Overview";
import SellerRoute from "./Private/SellerRoute";
import AddProducts from "../Pages/Dashboard/Seller/AddProducts";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import BuyerRoute from "./Private/BuyerRoute";
import MyWishlist from "../Pages/Dashboard/Buyer/MyWishlist";
import AdminRoute from "./Private/AdminRoute";
import AdminPanel from "../Pages/Dashboard/Admin/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  // Dashboard Route start from here 🔰
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      // Admin Routes
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminPanel></AdminPanel>
          </AdminRoute>
        ),        
      },
      // Buyer Routes
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <MyWishlist></MyWishlist>
          </BuyerRoute>
        ),        
      },
      // seller private routes
      {
        path: "/dashboard/add-product",
        element: <SellerRoute>
          <AddProducts></AddProducts>
        </SellerRoute>,
      },
      {
        path: "/dashboard/my-product",
        element: <MyProducts></MyProducts>
      }
    ],
  },
]);
