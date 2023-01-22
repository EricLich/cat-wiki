import { createHashRouter } from "react-router-dom";

import ErrorPage from "../error-page";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Cats from "../pages/Cats";
import Cat from "../pages/Cat";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cats",
        element: <Cats />,
      },
      {
        path: "cats/:catId",
        element: <Cat />,
      },
    ],
  },
]);
