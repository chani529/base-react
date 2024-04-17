import React from "react";
import { Outlet } from "react-router";
import { LayoutDefaultProps } from "@type/index";
import { menuList } from "@route/MenuList";
import SidebarComponent from "./sidebar/SidebarComponent";

const DefaultLayout = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <div className="wrapper">
        <SidebarComponent menuList={menuList} />
        <div>
          <div>TEST</div>
          <div className="content-wrapper">
            {/* children이 있을경우는 children을 없을 경우에는 Outlet을 나타내준다 */}
            {children || <Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
