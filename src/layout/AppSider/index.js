import React from "react";
import {Menu, Spin} from "antd";
import Sider from "antd/es/layout/Sider";
import {useDispatch, useSelector} from "react-redux";
import {menuIcon} from "./icon";
import {useNavigate} from "react-router-dom";

const AppSider = () => {
    const collapse = useSelector(state => state.system.collapse)
    const menuLoading = useSelector(state => state.system.menuLoading)
    const dispatch = useDispatch()
    const menuList = useSelector(state => state.user.userInfo.menus) || [];
    const navigate = useNavigate()
    const items2 = menuList.map((item, index) => {
        return {
            key: item.id,
            path: item.frontpath,
            icon: menuIcon[index],
            label: item.name,
            children: item.child && item.child.map((item2) => {
                return {
                    key: item2.id,
                    path: item2.frontpath,
                    label: item2.name,
                }
            })
        }
    });
    const currentKey = useSelector(state => state.system.currentPageKey)
    const menuAllChild = items2.map(item => item.children).flat()
    const handleMenuSelect = ({key}) => {
        let currentData = menuAllChild.find(v => v.key === (+key))
        navigate(`/Home${currentData.path}`)
        dispatch({type: 'tags/add', payload: currentData})
        dispatch({type: 'system/setCurrentKey', payload: currentData.key})
    }

    return (
        <Spin spinning={menuLoading}>
            <Sider width={200} className="site-layout-background" collapsed={collapse}>

                <Menu
                    onSelect={handleMenuSelect}
                    mode="inline"
                    selectedKeys={[currentKey.toString()]}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={items2}
                />


            </Sider>
        </Spin>
    )
}
export default AppSider
