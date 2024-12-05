import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import React, { Suspense } from "react";
import ErrorPage from "./pages/ErrorPage";
import { contactLoader } from "./utils/contactLoader";

const VitePage = React.lazy(() => import("./pages/VitePage.jsx"));
const NamePage = React.lazy(() => import("./pages/NamePage.jsx"));
const ContactPage = React.lazy(() => import("./pages/ContactPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <VitePage />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <ContactPage />
          </Suspense>
        ),
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={<div>Загрузка...</div>}>
                <NamePage />
              </Suspense>
            ),
            loader: contactLoader,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
