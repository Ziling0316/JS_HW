import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/root";
import ErrorPage from "./error-page";

import "./index.css";
import Week1 from "./routes/Week1";
import Week2 from "./routes/Week2";

const weekComponents = [<Week1 />, <Week1 />, <Week2 />];

function generateChildren() {
  const children = [];
  for (let i = 1; i <= 19; i++) {
    children.push({
      path: `/week${i}`,
      element: weekComponents[i],
    });
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: generateChildren(),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
