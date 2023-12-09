import React from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MyApp_HomePage from "../pages/homePage/HomePage";
import MyApp_LoginPage from "../pages/loginPage/LoginPage";
import PrivateRoutes from "./privateRoutes";

type Props = {};

const MyApp_ReactRouterBrowser = (props: Props) => {
  const listRoutes = [
    {
      path: "/",
      element: (
        <PrivateRoutes>
          <MyApp_HomePage />
        </PrivateRoutes>
      ),
    },
    {
      path: "/login",
      element: <MyApp_LoginPage />,
    },
  ];
  const router = createBrowserRouter(listRoutes as RouteObject[]);
  return <RouterProvider router={router} />;
};

export default MyApp_ReactRouterBrowser;
