import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import './index.css';
import Carousel from './Carousel';

const { Content } = Layout;

const PublicLayout: FC = ({ children }) => (
  <Layout className='public-layout'>
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <Layout className='public-content-wrapper' style={{ padding: '24px 0' }}>
        <Carousel />
        <Content style={{ minHeight: 280 }}>{children}</Content>
      </Layout>
    </Content>
    <Footer />
  </Layout>
);

export default PublicLayout;
