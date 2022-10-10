/**
 * @author MaZiXiao
 * @date 2022-10-10 23:50
 */
import HomeApi from '@/api/home'

export const getHomeStatisticsOne = () => {
    return async dispatch => {
        const {panels} = await HomeApi.getStatisticsOne()
        dispatch({type: 'indexHome/upDatePanels', payload: panels})
    }
}
