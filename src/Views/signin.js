
import React from "react"
import "./signin.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";
import { Form, Input, Button, Checkbox } from 'antd';

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <HomeLayout>
      <div className="signincontainer">
        <div className="signin">
          <h1> Login</h1>
    <Form

      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >

        <Input />
      </Form.Item>


      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        
      >
        <Button type="primary" htmlType="submit">

          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </HomeLayout>
  );
};

export default SignIn;

