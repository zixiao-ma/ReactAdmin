/**
 * @author MaZiXiao
 * @date 2022-10-06 22:09
 */
import React from 'react';
import {TOKEN_KEY} from "./utils/config";
import {getItem} from "./utils/storage";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "./store/actions/user";

export default function Permission({children}) {
    const token = getItem(TOKEN_KEY)
    const userInfo = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()
    const hasUserInfo = JSON.stringify(userInfo) !== '{}'
    if (token) {
        if (!hasUserInfo) {
            dispatch(getUserInfo())
        }
        return <>
            {children}
        </>

    } else {
        return <Navigate to="/login"/>
    }
}
