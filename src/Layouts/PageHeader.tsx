import React, { FC, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { UserContext } from '../Providers/UserProvider';

const { Header } = Layout;

const PageHeader: FC = () => {
  const auth = useContext(UserContext);
  const { signOut } = auth;

  return (
    <Header className='page-header'>
      <div className='logo'>
        <img src='/logo.png' className='logo' alt='Logo' />
      </div>
      <Menu theme='dark' className='page-menu' mode='horizontal'>
        <Menu.Item key='1'>Courses</Menu.Item>
        <Menu.Item key='2'>Profile</Menu.Item>
        <Menu.Item key='3'>Instructors</Menu.Item>
        <Menu.Item
          key='4'
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default PageHeader;
