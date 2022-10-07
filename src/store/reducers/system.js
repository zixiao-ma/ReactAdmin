/**
 * @author MaZiXiao
 * @date 2022-10-07 13:08
 */
const initialState = {
    collapse: false,
    menuLoading: false,
    currentPageKey: -1
}
const system = (state = initialState, action) => {
    switch (action.type) {
        case 'system/toggleCollapse':
            return {
                ...state,
                collapse: !state.collapse
            }
        case 'system/toggleMenuLoading':
            return {
                ...state,
                menuLoading: action.payload
            }
        case 'system/setCurrentKey':
            return {
                ...state,
                currentPageKey: action.payload
            }
        default:
            return state
    }
}
export default system
