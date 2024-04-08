import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootPage from "./RootPage";

export const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
