import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import './styles.css';
import { UserContext } from '../../Providers/UserProvider';
import { IUserFields } from './IUserFields';

const LoginForm = ({ history }: RouteComponentProps) => {
  const auth = useContext(UserContext);
  const onFinish = ({ email, password }: IUserFields) => {
    try {
      const { user } = auth.signIn(email, password);
      console.log(user);
      history.push('/home');
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
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            Or <Link to='/register'>register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default withRouter(LoginForm);
