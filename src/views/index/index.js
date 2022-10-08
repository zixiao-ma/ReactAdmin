/**
 * @author MaZiXiao
 * @date 2022-10-07 15:46
 */
import React from "react";
import './index.scss'
import {Card} from "antd";

export const Index = () => {
    return (
        <div>
            <div className="statisticsTop">
                {[1, 2, 3, 4].map(item => (<Card hoverable key={item}>{item}</Card>))}
            </div>
            <div className="statisticsMiddle">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (<Card hoverable key={item}>{item}</Card>))}
            </div>
            <div className="statisticsBottom">
                <Card hoverable>1</Card>
                <Card hoverable>2</Card>
            </div>
        </div>
    )
}
