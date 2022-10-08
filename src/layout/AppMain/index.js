/**
 * @author MaZiXiao
 * @date 2022-10-07 12:05
 */
import React from "react";
import {Content} from "antd/es/layout/layout";
import {Outlet} from "react-router-dom";

export const AppMain = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: '20px 0',
                margin: 0,
                minHeight: 300,
            }}
        >
            <Outlet></Outlet>
        </Content>
    )
}
