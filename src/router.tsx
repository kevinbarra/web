import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Products from "@pages/products/Products";
import ProductDetail from "@pages/products/productdetail";
import Me from "@pages/Me";
import Pay from "@pages/Pay";
import Success from "@pages/cart/Success";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/me",
        element: <Me />
    },
    {
        path: "/products/:productId",
        element: <ProductDetail />
    },
    {
        path: "/cart/pay",
        element: <Pay />
    },
    {
        path: "/cart/success",
        element: <Success />
    }
]);
