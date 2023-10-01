import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/homeScreen.jsx";
import FeatureScreen from "./screens/featuresScreen.jsx";
import DocScreen from "./screens/docScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <HomeScreen /> },
      { path: "/features", element: <FeatureScreen /> },
      { path: "/docs", element: <DocScreen /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
