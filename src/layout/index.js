import {Layout} from 'antd';
import React from 'react';
import './index.scss'
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import TagsView from "./AppMain/tagsView";
import {AppMain} from "./AppMain";

const HomeLayout = () => (
    <Layout>
        <AppHeader></AppHeader>
        <Layout>
            <AppSider></AppSider>
            <Layout
                style={{
                    padding: '0 24px 0px',
                }}
            >
                <TagsView></TagsView>
                <AppMain></AppMain>
                <div className='author'><span>Author：Developed By mazixiao6688@163.com</span></div>
            </Layout>
        </Layout>
    </Layout>
);

export default HomeLayout;
