import React, {useEffect, useState} from "react";
import {Header} from "antd/es/layout/layout";

import {
    FullscreenExitOutlined,
    FullscreenOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SyncOutlined
} from "@ant-design/icons";
import {Avatar, Dropdown, Menu, message, Space, Tooltip} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/actions/user";
import {exitFullScreen, isFullscreenElement, requestFullScreen} from "../../utils/fullScreen";

/**
 * @author MaZiXiao
 * @date 2022-10-07 12:05
 */

const AppHeader = () => {
    const dispatch = useDispatch()
    const collapse = useSelector(state => state.system.collapse)
    const userInfo = useSelector(state => state.user.userInfo)
    const [fullScreen, setFullScreen] = useState(false);
    const [originResizeFunc, setOriginResizeFunc] = useState(null);
    const handleCollapse = () => {
        dispatch({type: 'system/toggleCollapse'})
    }
    const handleRefresh = () => {
        window.location.reload()
    }
    useEffect(() => {
        // 监听 键盘ESC 退出全屏(可以使用屏幕大小监听，触发对应的事件)
        if (window.addEventListener) {
            window.addEventListener("resize", onEscCancelFull, false);
        } else {
            setOriginResizeFunc(window.onresize);
            window.onresize = onEscCancelFull;
        }
        // 销毁清除事件
        return () => {
            if (window.removeEventListener) {
                window.removeEventListener("resize", onEscCancelFull, false);
            } else {
                window.onresize = originResizeFunc;
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    function onEscCancelFull() {
        // 用于反显状态
        setFullScreen(isFullscreenElement());
    }

    const handleClickMenu = ({key}) => {
        switch (key) {
            case 'logout':
                dispatch(logout())
                break
            case 'editPassword':
                message.info('该功能暂未开放！')
                break
            default:
                break
        }

    }

    const menu = (
        <Menu
            onClick={handleClickMenu}
            items={[
                {
                    label: '修改密码',
                    key: 'editPassword'
                },
                {
                    type: 'divider',
                },
                {
                    label: <span>退出登录</span>,
                    key: 'logout',
                },
            ]}
        />
    )

    function handleClickFullScreen() {
        fullScreen ? exitFullScreen() : requestFullScreen(document.body)
    }

    return (
        <Header className="header d-flex justify-content-between">
            <div className='d-flex'>
                <div className="logo">Admin System</div>
                <Tooltip placement="bottom" title={'收起'}>
                    <div className='ms-5  topIcon' onClick={handleCollapse}>
                        {collapse ? <MenuFoldOutlined/> : <MenuUnfoldOutlined/>}
                    </div>
                </Tooltip>
                <Tooltip placement="bottom" title={'刷新'}>
                    <div className='topIcon' onClick={handleRefresh}>
                        <SyncOutlined/>
                    </div>
                </Tooltip>
            </div>
            <div className='d-flex'>
                <Tooltip placement="bottom" title={'全屏'}>
                    <div className='topIcon' onClick={() => handleClickFullScreen()}>
                        {!fullScreen ? (<FullscreenOutlined/>) : (<FullscreenExitOutlined/>)}

                    </div>
                </Tooltip>
                <div className='ms-2 userInfo'>
                    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                        <span onClick={(e) => e.preventDefault()}>
                            <Space>
                                 <Avatar src={userInfo.avatar}/>
                                <span className='ms-1'>{userInfo.username}</span>
                            </Space>
                        </span>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}
export default AppHeader
