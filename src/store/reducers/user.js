/**
 * @author MaZiXiao
 * @date 2022-10-06 20:30
 */
// 登录功能，只需要存储 token 即可，所以，状态默认值为：''
import {getItem} from "../../utils/storage";
import {TOKEN_KEY} from "../../utils/config";

const initialState = {
    token: getItem(TOKEN_KEY) || '',
}

const user = (state = initialState, action) => {
    console.log(action, 'action')
    switch (action.type) {
        case 'user/login':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

export default user
