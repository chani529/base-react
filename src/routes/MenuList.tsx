import { Menu } from "@components/layouts/sidebar/utils/sidebarInterfaces";
import React from "react";

export const menuList: Menu[] = [
  {
    title: "Test Menu",
    link: "",
    child: [
      {
        title: "Development",
        link: "/",
        child: [],
      },
    ],
  },
  {
    title: "포폴용",
    link: "",
    child: [
      {
        title: "Basic",
        link: "",
        child: [
          {
            title: "test1",
            link: "/test1",
            linkedPage: [],
            child: [],
          },
        ],
      },
      {
        title: "test2",
        link: "/test2",
        child: [],
      },
    ],
  },
];
