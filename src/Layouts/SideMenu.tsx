import React, { FC } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu: FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <Sider className='site-layout-background' width={200} collapsed={collapsed} trigger={null} collapsible>
      <Button type='primary' onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu defaultSelectedKeys={['1']} theme='dark'>
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
