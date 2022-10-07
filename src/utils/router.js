/**
 * @author MaZiXiao
 * @date 2022-10-07 15:52
 */

import React from "react";
import {Index} from "../views/index";
import GoodList from "../views/goods";
import CategoryList from "../views/category";
import SkuList from "../views/skus";
import CouponList from "../views/coupon";
import UserList from "../views/user";
import LevelList from "../views/level";
import OrderList from "../views/order";
import CommentList from "../views/comment";
import ManagerList from "../views/manager";
import AccessList from "../views/access";
import RoleList from "../views/role";
import BaseList from "../views/setting/base";
import BuyList from "../views/setting/buy";
import ShipList from "../views/setting/ship";
import DistributionSetting from "../views/distribution/setting/setting";
import DistributionIndex from "../views/distribution/index";
import ImageList from "../views/image";
import NoticeList from "../views/notice";

export const router = [
    {
        path: '/',
        element: <Index/>
    },
    {
        path: '/goods/list',
        element: <GoodList/>,
    },
    {
        path: '/category/list',
        element: <CategoryList/>,
    },
    {
        path: '/skus/list',
        element: <SkuList/>,
    },
    {
        path: '/coupon/list',
        element: <CouponList/>,
    },
    {
        path: '/user/list',
        element: <UserList/>,
    },
    {
        path: '/level/list',
        element: <LevelList/>,
    },
    {
        path: '/order/list',
        element: <OrderList/>,
    },
    {
        path: '/comment/list',
        element: <CommentList/>,
    },
    {
        path: '/manager/list',
        element: <ManagerList/>,
    },
    {
        path: '/access/list',
        element: <AccessList/>,
    },
    {
        path: '/role/list',
        element: <RoleList/>,
    },
    {
        path: '/setting/base',
        element: <BaseList/>,
    },
    {
        path: '/setting/buy',
        element: <BuyList/>,
    },
    {
        path: '/setting/ship',
        element: <ShipList/>,
    },
    {
        path: '/distribution/index',
        element: <DistributionIndex/>,
    },
    {
        path: '/distribution/setting',
        element: <DistributionSetting/>,
    },
    {
        path: '/image/list',
        element: <ImageList/>,
    },
    {
        path: '/notice/list',
        element: <NoticeList/>,
    }
]
