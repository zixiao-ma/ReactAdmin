/**
 * @author MaZiXiao
 * @date 2022-10-06 22:09
 */
import React from 'react';
import {TOKEN_KEY} from "./utils/config";
import {getItem} from "./utils/storage";
import {Navigate} from "react-router-dom";

export default function AuthComponent({children}) {
    const token = getItem(TOKEN_KEY)
    if (token) {
        return <>
            {children}
        </>
    } else {
        return <Navigate to="/login"/>
    }
}
