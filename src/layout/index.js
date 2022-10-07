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
                    padding: '0 24px 24px',
                }}
            >
                <TagsView></TagsView>
                <AppMain></AppMain>
            </Layout>
        </Layout>
    </Layout>
);

export default HomeLayout;
