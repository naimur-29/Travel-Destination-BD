import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./Context/AuthContext";
import { StateContextProvider } from "./Context/StateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { PageRoutes } from "./Router/PageRouter";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StateContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={PageRoutes} />
        </QueryClientProvider>
      </StateContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
