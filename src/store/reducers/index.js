/**
 * @author MaZiXiao
 * @date 2022-10-06 20:29
 */
import user from "./user";
import system from "./system";
import {combineReducers} from "redux";
import tags from "./tagsView";

const rootReducer = combineReducers({
    user,
    system,
    tags
})
export default rootReducer
