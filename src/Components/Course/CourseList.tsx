import React, { FC } from 'react';
import { Table, Tag, Space } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const CourseList: FC = ({ history }: any) => {
  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 4 ? 'geekblue' : 'green';
            if (tag.length > 7) {
              color = 'pink';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size='middle'>
          <a>Edit - {record.code}</a>
          <a>Delete</a>
        </Space>
      )
    }
  ];

  const data = [
    {
      key: '1',
      name: 'Introduction to Python',
      code: 32,
      category: 'Programming backend',
      tags: ['python', 'pandas']
    },
    {
      key: '2',
      name: 'Java with Springboot',
      code: 42,
      category: 'Programming backend',
      tags: ['java', 'spring']
    },
    {
      key: '3',
      name: "You don't know javascript",
      code: 55,
      category: 'Front end',
      tags: ['javascript', 'ES6']
    }
  ];

  return (
    <Table
      onRow={(record, rowIndex) => ({
        onClick: event => {
          //   console.log(record);
          history.push(`/course/${record.key}`);
        }
      })}
      columns={columns}
      dataSource={data}
    />
  );
};
export default withRouter(CourseList);
