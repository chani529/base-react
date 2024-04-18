import React from "react";
import { Outlet } from "react-router";
import { LayoutDefaultProps } from "@type/index";
import { menuList } from "@route/MenuList";
import SidebarComponent from "./sidebar/SidebarComponent";
import Header from "./Header";

const DefaultLayout = ({ children }: LayoutDefaultProps) => (
    <>
        <div className="wrapper">
            <SidebarComponent menuList={menuList} />
            <div className="main-wrapper">
                <Header props={menuList} />
                <div className="content-wrapper">
                    {/* children이 있을경우는 children을 없을 경우에는 Outlet을 나타내준다 */}
                    {children || <Outlet />}
                </div>
            </div>
        </div>
    </>
);

export default DefaultLayout;
