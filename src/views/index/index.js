/**
 * @author MaZiXiao
 * @date 2022-10-07 15:46
 */
import React, {useEffect, useState} from "react";
import './index.scss'
import {Card, Tag} from "antd";
import {IndexSkeleton} from "./indexSkeleton/indexSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {getHomeStatisticsOne} from "@/store/actions/indexHome";

export const Index = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    let panels = useSelector(s => s.indexHome.panels);
    const getHomeData = async () => {
        setLoading(true)
        await dispatch(getHomeStatisticsOne())
    }
    useEffect(() => {
        getHomeData().then(r => {
            setLoading(false)
        })
    }, []);

    return loading ? (<IndexSkeleton></IndexSkeleton>) : (
        <div className='animate__animated animate__fadeIn'>
            <div className="statisticsTop">
                {panels.map(item => (<Card hoverable key={item.value}
                                           size={'small'}
                                           title={item.title}
                                           extra={<Tag color={'processing'}>{item.unit}</Tag>}
                >
                    <h2 className='mt-4'>12</h2>
                    <p className='d-flex justify-content-between p-1 mt-2'>
                        <span>总支付订单</span>
                        <span>52</span>
                    </p>
                </Card>))}
            </div>
            <div className="statisticsMiddle">
                <div className='statisticsMiddleBox'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (<Card hoverable key={item}>
                        {item}
                    </Card>))}
                </div>
            </div>
            <div className="statisticsBottom">
                <div className="statisticsBottomBox">
                    <Card hoverable className='skeletonChartBox'>
                        1
                    </Card>
                    <div className='statisticsBottom-right'>
                        <Card hoverable>
                            1
                        </Card>
                        <Card hoverable>
                            1
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
