import React from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { Publish, Subscribe } from './Broadcast';
import Conference from './Conference';

const ClassRoom = () => {
  const { TabPane } = Tabs;
  const { type }: any = useParams();

  const getComponent = (compType: string): JSX.Element => {
    switch (compType) {
      case 'instructor':
        return <Publish />;
      case 'candidate':
        return <Subscribe />;
      case 'conference':
        return <Conference />;
      default:
        return <div>Access Denied !</div>;
    }
  };

  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab='Class Video' key='1'>
        {getComponent(type)}
      </TabPane>
      <TabPane tab='Additional Notes' key='2'>
        To do
      </TabPane>
    </Tabs>
  );
};

export default ClassRoom;
