/**
 * @author MaZiXiao
 * @date 2022-10-11 00:17
 */
const initState = {
    panels: []
}
const indexHome = (state = initState, action) => {
    switch (action.type) {
        case 'indexHome/upDatePanels':
            state.panels = []
            return {
                ...state,
                panels: action.payload
            }
        default:
            return state
    }
}
export default indexHome
