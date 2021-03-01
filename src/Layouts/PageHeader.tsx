import React, { FC, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserContext } from '../Providers/UserProvider';

const { Header } = Layout;

const PageHeader: FC = ({ history }: any) => {
  const auth = useContext(UserContext);
  const { signOut } = auth;

  return (
    <Header className='page-header'>
      <div className='logo'>
        <img src='/logo.png' className='logo' alt='Logo' />
      </div>
      <Menu theme='dark' className='page-menu' mode='horizontal'>
        <Menu.Item
          key='1'
          onClick={() => {
            history.push('/courses');
          }}
        >
          Courses
        </Menu.Item>
        <Menu.Item
          key='2'
          onClick={() => {
            history.push('/profile');
          }}
        >
          Profile
        </Menu.Item>
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

export default withRouter(PageHeader);
