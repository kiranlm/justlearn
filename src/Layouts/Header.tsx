import React, { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Header: HeaderLayout } = Layout;

const Header: FC = () => (
  <HeaderLayout className='top-header'>
    <div className='logo'>
      <img src='/logo.png' className='logo' alt='Logo' />
    </div>
    <Menu theme='light' className='top-menu' mode='horizontal'>
      <Menu.Item key='1'>Company</Menu.Item>
      <Menu.Item key='2'>Contact Us</Menu.Item>
      <Menu.Item key='3'>Our Mission</Menu.Item>
    </Menu>
  </HeaderLayout>
);

export default Header;
