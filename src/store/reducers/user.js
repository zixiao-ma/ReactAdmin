/**
 * @author MaZiXiao
 * @date 2022-10-06 20:30
 */
// 登录功能，只需要存储 token 即可，所以，状态默认值为：''
import {getItem} from "../../utils/storage";
import {TOKEN_KEY} from "../../utils/config";

const initialState = {
    token: getItem(TOKEN_KEY) || '',
    userInfo: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'user/login':
            return {
                ...state,
                token: action.payload
            }
        case 'user/saveUserInfo':
            return {
                ...state,
                userInfo: action.payload
            }
        case 'user/logout':
            return {
                ...state,
                token: '',
                userInfo: {}
            }
        default:
            return state
    }
}

export default user
