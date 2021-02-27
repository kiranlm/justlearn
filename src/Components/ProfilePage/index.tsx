import React, { useContext, useState } from 'react';
import { Form, Input, InputNumber, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UserContext } from '../../Providers/UserProvider';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ProfilePage = () => {
  const auth = useContext(UserContext);
  const { userState } = auth;
  const [fields, setFields] = useState<FieldData[]>([
    { name: ['name'], value: userState.displayName },
    { name: ['email'], value: userState.email },
  ]);

  interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }

  const onFinish = (values: any) => {
    console.log(values);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Form
        fields={fields}
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
        onFieldsChange={(_: any, newFields: any) => {
          setFields(newFields);
        }}
      >
        <Form.Item
          name='photo'
          label='Photo'
          valuePropName='fileList'
          getValueFromEvent={normFile}
          extra='Select a picture to change the current profile photo'
        >
          <div
            style={{
              background: `url(${
                userState.photoURL || 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
              })  no-repeat center center`,
              backgroundSize: 'cover',
              height: '100px',
              width: '100px',
            }}
          />
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[
            {
              type: 'string',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'age']}
          label='Age'
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label='Website'>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label='Introduction'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ProfilePage;
