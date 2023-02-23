import "@fontsource/aclonica";
import "@fontsource/cherry-swash";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/fonts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
);
