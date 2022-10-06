/**
 * @author MaZiXiao
 * @date 2022-10-06 20:21
 */
import {useSelector} from "react-redux";

function Layout() {
    const token = useSelector(state => state.user.token)
    return (
        <div className="Layout">
            Layout-{token}
        </div>
    );
}

export default Layout;
