import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
// import App from './App';
import Login from "./Pages/Sign_In_Up/Login";
import Register from "./Pages/Sign_In_Up/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import WishList from "./Pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
// import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBlogs",
        element: (
          <PrivateRoute>
            <AllBlogs></AllBlogs>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/blog"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
        // loader: () =>fetch('http://localhost:5000/blog')
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        // loader: () =>fetch('http://localhost:5000/blog')
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
