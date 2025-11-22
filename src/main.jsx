import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./componets/home/Home";
import Login from "./componets/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
