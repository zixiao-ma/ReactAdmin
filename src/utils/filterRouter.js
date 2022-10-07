/**
 * @author MaZiXiao
 * @date 2022-10-07 16:32
 */
import {router} from "./router";

export default function filterRouter(menus = []) {
    const result = [];
    const paths = router.map(item => item.path)
    menus.forEach(item => {
        if (item.child && item.child.length > 0) {
            item.child.forEach(it => {
                if (paths.includes(it.frontpath)) {
                    let route = router.find(v => v.path === it.frontpath)
                    result.push({
                        ...route,
                        title: it.name,
                        id: it.id
                    })
                }
            })
        }
    })
    console.log(result, 'r')
    return result;
}
