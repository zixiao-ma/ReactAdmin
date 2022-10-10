/**
 * @author MaZiXiao
 * @date 2022-10-07 15:46
 */
import React, {useState} from "react";
import './indexSkeleton.scss'
import {Card, Skeleton} from "antd";
import {DotChartOutlined} from "@ant-design/icons";

function SkeletonBtmTop({loading}) {
    return (<div className='Skeleton-btm-top'>

                            <span>
                                <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                            </span>
        <span>
                               <Skeleton.Button active={loading} size={'small'} shape={'default'} className='ms-1'/>
                            <Skeleton.Button active={loading} size={'small'} shape={'default'} className='ms-1'/>
                            <Skeleton.Button active={loading} size={'small'} shape={'default'} className='ms-1'/>
                           </span>
    </div>)
}

export const IndexSkeleton = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <div className="statisticsTop">
                {[1, 2, 3, 4].map(item => (<Card hoverable key={item}>
                    <div className="SkeletonTop">
                        <Skeleton.Input active={loading} size={'small'} shape={'default'} block/>
                        <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                        <Skeleton.Input active={loading} size={'small'} shape={'default'} block/>
                    </div>

                </Card>))}
            </div>
            <div className="statisticsMiddle">
                <div className='statisticsMiddleBox'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (<Card hoverable key={item}>
                        <div className="SkeletonMiddle">
                            <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                            <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                        </div>
                    </Card>))}
                </div>
            </div>
            <div className="statisticsBottom">
                <div className="statisticsBottomBox">
                    <Card hoverable className='skeletonChartBox'>
                        <SkeletonBtmTop loading={loading}></SkeletonBtmTop>
                        <div className="skeletonChart">
                            <Skeleton.Node active={loading} className='SkeletonNode'>
                                <DotChartOutlined
                                    style={{
                                        fontSize: 40,
                                        color: '#bfbfbf',
                                    }}
                                />
                            </Skeleton.Node>
                        </div>
                    </Card>
                    <div className='statisticsBottom-right'>
                        <Card hoverable>
                            <SkeletonBtmTop loading={loading}></SkeletonBtmTop>
                            <div className="statisticsBottom-right-btm">
                                {[1, 2, 3, 4].map(item => (<div className="right-btm-box-item" key={item}>
                                    <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                                    <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                                </div>))}
                            </div>
                        </Card>
                        <Card hoverable>
                            <SkeletonBtmTop loading={loading}></SkeletonBtmTop>
                            <div className="statisticsBottom-right-btm">
                                {[1, 2, 3, 4].map(item => (<div className="right-btm-box-item" key={item}>
                                    <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                                    <Skeleton.Button active={loading} size={'small'} shape={'default'}/>
                                </div>))}
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
