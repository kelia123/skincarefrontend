<<<<<<< HEAD
import React from "react"
import "./signin.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";
import { Form, Input, Button, Checkbox } from 'antd';
=======
    
import "./signin.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";

import { Form, Input, Button, Checkbox } from 'antd';

>>>>>>> fae237c (cart)
const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
<<<<<<< HEAD
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
=======

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

>>>>>>> fae237c (cart)
  return (
    <HomeLayout>
      <div className="signincontainer">
        <div className="signin">
          <h1> Login</h1>
    <Form
<<<<<<< HEAD
=======
      
>>>>>>> fae237c (cart)
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
<<<<<<< HEAD
        <Input style={{marginLeft:"22px", width:"258px"}}/>
      </Form.Item>
=======
        <Input />
      </Form.Item>

>>>>>>> fae237c (cart)
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
<<<<<<< HEAD
      <Form.Item
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
      >
        <Button type="primary" htmlType="submit" className="button">
=======

      <Form.Item
      
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        
      >
        <Button type="primary" htmlType="submit">
>>>>>>> fae237c (cart)
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </HomeLayout>
  );
};
<<<<<<< HEAD
export default SignIn;
=======

export default SignIn;
>>>>>>> fae237c (cart)
