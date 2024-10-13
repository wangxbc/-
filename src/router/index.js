import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home/home";
import MyText1 from "../pages/texts/text1";
import { Children, Component } from "react";
import MyText2 from "../pages/texts/text2";
import MyPhoto from "../pages/photo/photo";
const routes = [
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: "/",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "texts",
        children:[
          {
            path:'text1',
            Component: MyText1,
          },
          {
            path:'text2',
            Component: MyText2,
          }
        ]
      },
      {
        path:'photo',
        Component: MyPhoto,
      }
    ],
  },
];

export default createBrowserRouter(routes);
