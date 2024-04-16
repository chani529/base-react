import React from "react";
import { useRoutes } from "react-router-dom";
import { DefaultLayout } from "@components/layouts/index";
import Home from "@pages/Home";
import IssuePage from "@pages/IssuePage";
import StationPage from "@pages/StationPage";
import TestPage from "@pages/TestPage";
import Testpage2 from "@pages/TestPage2";

const Routes = () => {
  const routesConfig = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "iss", element: <IssuePage /> },
        { path: "station", element: <StationPage /> },
        { path: "test1", element: <TestPage /> },
        { path: "test2", element: <Testpage2 /> },
      ],
    },
  ]);

  return routesConfig;
};

export default Routes;