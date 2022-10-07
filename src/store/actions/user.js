/**
 * @author MaZiXiao
 * @date 2022-10-06 20:51
 */
import userAPI from "../../api/user";
import {removeItem, setItem} from "../../utils/storage";
import {TOKEN_KEY} from "../../utils/config";
import {message} from "antd";

export const login = (params) => {
    return async (dispatch) => {
        const {token} = await userAPI.login(params)
        setItem(TOKEN_KEY, token)
        token && message.success('登录成功')
        dispatch({
            type: 'user/login',
            payload: token
        })
    }
}
export const getUserInfo = (params) => {
    return async dispatch => {
        dispatch({type: 'system/toggleMenuLoading', payload: true})
        const response = await userAPI.getUserInfo()
        dispatch({type: 'system/toggleMenuLoading', payload: false})
        dispatch({type: 'user/saveUserInfo', payload: response})
    }
}
export const logout = () => {
    return async dispatch => {
        await userAPI.logout()
        removeItem(TOKEN_KEY)
        //  removeItem(TAGSVIEW_KEY)
        dispatch({
            type: 'user/logout'
        })
    }
}
