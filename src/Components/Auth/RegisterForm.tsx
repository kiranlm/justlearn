import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import './styles.css';
import { auth } from '.';

const RegisterForm = ({ history }: any) => {
  const onFinish = async ({ email, password }: any) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      history.push('/login');
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Email' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        rules={[
          {
            required: true,
            message: 'Please confirm your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='confirmPassword'
          placeholder='Confirm Password'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Register
        </Button>
        Or <a href=''>login here!</a>
      </Form.Item>
    </Form>
  );
};

export default withRouter(RegisterForm);
