import React, {useEffect, useRef, useState} from "react";
import {CloseOutlined, FileTextOutlined, LeftOutlined, RightOutlined} from "@ant-design/icons";
import './tagsView.scss'
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {useLocation, useNavigate} from "react-router-dom";

const TagsView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tagsArr = useSelector(state => state.tags.tags)
    const currentKey = useSelector(state => state.system.currentPageKey)
    const startKey = tagsArr[0]?.key || -1;
    const lastKey = tagsArr[tagsArr.length - 1].key || -1;
    const [showBtn, setShowBtn] = useState(false);
    const menuLoading = useSelector(state => state.system.menuLoading)

    function scrollToView(key) {
        const firstDomElement = document.querySelector(`#tags${key}`)
        if (firstDomElement) {
            firstDomElement.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    useEffect(() => {
        scrollToView(currentKey)
    }, [currentKey]);
    const location = useLocation()
    let url = location.pathname;

    function getClassName(key) {
        if (key === currentKey) {
            return 'item active'
        } else if (currentKey === -1) {
            const data = tagsArr.find(v => {
                return url === `/Home${v.path}`
            })
            return key === data?.key ? 'item active' : 'item'
        } else {
            return 'item'
        }
    }

    const handleClickRight = () => scrollToView(lastKey)
    const handleClickLeft = () => scrollToView(startKey)
    const handleClickTag = item => {
        navigate(`/Home${item.path}`)
        dispatch({type: 'system/setCurrentKey', payload: item.key})
    }
    const tagsDiv = useRef()
    const tagWidth = 108;
    useEffect(() => {
        function setBtnShowOrHide() {
            let divWidth = tagsDiv.current.offsetWidth || 0;
            let tagsArrLength = tagsArr.length;
            let num = Math.floor(divWidth / tagWidth)
            if (num > tagsArrLength) {
                setShowBtn(false)
            } else {
                setShowBtn(true)
            }
        }

        setBtnShowOrHide()
        window.addEventListener('resize', function (e) {
            setBtnShowOrHide()
        })
    });
    const handleClose = (e, key, index) => {
        e.stopPropagation()
        let [prevPath, prevKey] = ['', '']
        if (index > 0) {
            prevPath = tagsArr[index - 1].path;
            prevKey = tagsArr[index - 1].key

        } else if (index === 0) {
            if (tagsArr[1]) {
                prevPath = tagsArr[1].path;
                prevKey = tagsArr[1].key
            }
        }
        if (prevPath !== '' && prevKey !== '') {
            navigate(`/Home${prevPath}`)
            dispatch({type: 'system/setCurrentKey', payload: prevKey})
            dispatch({type: 'tags/del', payload: key})
        }
    }
    return !menuLoading ? (
        <div className={'tagsViewBox'} ref={tagsDiv}>
            {showBtn && <Button onClick={handleClickLeft}><LeftOutlined/></Button>}
            <div className="tagsView animate__animated animate__fadeInRight" style={{margin: showBtn ? '0 5px' : '0'}}>
                {
                    tagsArr.map((item, index) => (
                        <div className={getClassName(item.key)} key={item.key} id={`tags${item.key}`}
                             onClick={() => handleClickTag(item)}>
                        <span className='d-flex align-items-center'><FileTextOutlined/><span
                            className='ms-1 tagsLabel'>{item.label}</span></span>
                            <span className='closeIcon'
                                  onClick={(e) => handleClose(e, item.key, index)}><CloseOutlined/></span>
                        </div>
                    ))
                }
            </div>
            {showBtn && <Button onClick={handleClickRight}><RightOutlined/></Button>}
        </div>

    ) : (<div ref={tagsDiv} className={'skeleton'}>
        {tagsArr.map(item => {
            return (
                <span key={item.key}></span>
            )
        })}
    </div>)
}
export default TagsView
