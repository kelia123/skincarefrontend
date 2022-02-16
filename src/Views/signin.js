import React from "react"
import "./signin.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";
<<<<<<< HEAD
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
        <Input style={{marginLeft:"22px", width:"258px"}}/>
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
      <Form.Item
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
      >
        <Button type="primary" htmlType="submit" className="button">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </HomeLayout>
  );
};
=======
  //import {MailOutlined} from "@ant-design/icons"
// import {MailOutli} from '@ant-design/icons';

const SignIn=()=>{
    return(

        
       

          
      <div className="SignIn-container">

        <HomeLayout>
        
          <div className="signin">
          
        <h1>Sign In </h1>
{/*         
          <input type="text"  placeholder="Email" name="Email" required > </input> */}
          <input type="text"placeholder="E-mail"name="Email"required></input>
        <input type="pasword"placeholder="Password" name="pwd" required></input>
          
       <label>
         {/* <input type="checkbox"  name="remember" id="remember me"> Remember me
         </input> */}
         </label>
        <button type="submit">Sign in</button><br/><br/>
      <a href="/signup">Do not have an account? Sign up</a>
      
      
          </div>
         
          </HomeLayout>

          </div>
   



    



    )
   
}
>>>>>>> 36a8f55 (contents)
export default SignIn;