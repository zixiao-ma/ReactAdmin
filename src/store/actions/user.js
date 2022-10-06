/**
 * @author MaZiXiao
 * @date 2022-10-06 20:51
 */
import userAPI from "../../api/user";
import {setItem} from "../../utils/storage";
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
