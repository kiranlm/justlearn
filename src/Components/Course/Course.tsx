import React, { FC } from 'react';
import { Descriptions, Badge, Button } from 'antd';
import { useParams, withRouter } from 'react-router-dom';

const Course: FC = ({ history }: any) => {
  const { id } = useParams<any>();
  console.log(id);
  return (
    <Descriptions title='User Info' layout='vertical' bordered>
      <Descriptions.Item label='Code'>{id}</Descriptions.Item>
      <Descriptions.Item label='Course Name'>Jest with Enzyme</Descriptions.Item>
      <Descriptions.Item label='Certificate'>YES</Descriptions.Item>
      <Descriptions.Item label='Start Date'>2018-04-24 18:00:00</Descriptions.Item>
      <Descriptions.Item label='Duration'>2 Months</Descriptions.Item>
      <Descriptions.Item label='Status'>
        <Badge status='processing' text='Testing mode' />
      </Descriptions.Item>
      <Descriptions.Item label='Join as Instructor'>
        <Button
          onClick={() => {
            history.push(`/classroom/session-${id}/instructor`);
          }}
        >
          Test Instructor
        </Button>
      </Descriptions.Item>
      <Descriptions.Item label='Join as Candidate'>
        <Button
          onClick={() => {
            history.push(`/classroom/session-${id}/candidate`);
          }}
        >
          Test student
        </Button>
      </Descriptions.Item>
      <Descriptions.Item label='One to one conference'>
        <Button
          onClick={() => {
            history.push(`/classroom/session-${id}/conference`);
          }}
        >
          Test one to one
        </Button>
      </Descriptions.Item>
      <Descriptions.Item label='Config Info'>
        Introduction
        <br />
        Jest Overview
        <br />
        Test Descriptions
        <br />
        Other Descriptions
        <br />
        test test
        <br />
        Assessment
        <br />
      </Descriptions.Item>
    </Descriptions>
  );
};
export default withRouter(Course);
