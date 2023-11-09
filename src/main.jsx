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
import AddBlog from "./Pages/AddBlog/AddBlog";
import UpdateBlog from "./Pages/UpdateBlog/UpdateBlog";
import Featured from "./Pages/Featured/Featured";
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
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch("http://localhost:5000/blog"),
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        // loader: async({params}) => await fetch(`http://localhost:5000/blog/${params.id}`)
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
       
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
        loader: () =>fetch('http://localhost:5000/topTen')
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
