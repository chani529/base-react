import React from "react";
import HeaderLayout from "./HeaderLayout";
import SideLayout from "./SideLayout";
import { Outlet } from "react-router";
import { LayoutDefaultProps } from "@type/index";

const DefaultLayout = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <HeaderLayout />
      <div className="wrapper">
        <SideLayout />
        <div className="content-wrapper">
          {/* children이 있을경우는 children을 없을 경우에는 Outlet을 나타내준다 */}
          {children || <Outlet />}
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
