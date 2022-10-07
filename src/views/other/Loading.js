/**
 * @author MaZiXiao
 * @date 2022-10-06 21:24
 */
import React from 'react';
import './loading.scss'
import loadingImg from '../../assets/loading.gif'

const LoadingView = () => {
    return (<div className='loadingBox'>
        <img src={loadingImg} alt=""/>
        <p>loading...</p>
    </div>)
}
export default LoadingView;
