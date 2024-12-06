import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/productdetail/ProductDetail";
import ContactUs from "../pages/contactus/ContactUs";
import AboutUs from "../pages/aboutus/AboutUs";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import BuyNowForm from "../pages/buynow/BuyNowForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/buy-now/:id",
        element: <BuyNowForm />,
      },
    ],
  },
]);

export default router;
