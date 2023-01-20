import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../error-page";
import Home from "../routes/App";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
