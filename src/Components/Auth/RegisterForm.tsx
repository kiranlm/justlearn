import React, { useContext } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import './styles.css';
import { UserContext } from '../../Providers/UserProvider';
import { IUserFields } from './IUserFields';

const RegisterForm = ({ history }: RouteComponentProps) => {
  const auth = useContext(UserContext);
  const onFinish = async ({ email, password }: IUserFields) => {
    try {
      const { user } = await auth.signUp(email, password);
      history.push('/login');
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <Row justify='space-around' align='middle'>
      <Col span={12}>
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
            Or <Link to='/'>login here!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default withRouter(RegisterForm);
