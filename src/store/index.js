/**
 * @author MaZiXiao
 * @date 2022-10-06 20:28
 */
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middlewares = applyMiddleware(thunk)
const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    middlewares
    // other store enhancers if any
)
const store = createStore(rootReducer, composedEnhancer)
export default store
