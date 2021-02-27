import React, { FC } from 'react';
import { Layout, Breadcrumb } from 'antd';
import SideMenu from './SideMenu';
import PageHeader from './PageHeader';
import Footer from './Footer';
import './index.css';

const { Content } = Layout;

const ContentLayout: FC = ({ children }) => (
  <Layout>
    <PageHeader />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
        <SideMenu />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
      </Layout>
    </Content>
    <Footer />
  </Layout>
);

export default ContentLayout;
