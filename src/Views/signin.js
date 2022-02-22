import React from "react"
import "./signin.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";
import { Form, Input, Button, Checkbox ,notification} from 'antd';
import { useNavigate } from "react-router-dom";
import skinhealApi from "../services/skinhealApi";
// import store from "store";
const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    skinhealApi.signinAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        console.log(res.data.data);
        if(res.data.data.role == 'admin'){
          localStorage.setItem("userLogedIn",true);
          navigate("/dashboard");
        }
         else if(res.data.data.role =="user"){
          localStorage.setItem("userLogedIn",true);
          navigate("/shopAll");
        }
        return notification.success({
          message: "You has been loged successfully",
        });
      } else {
        return notification.error({ message: res.data.error, });
      }
    }
    );
  };
  const navigate=useNavigate();
  return (
    <HomeLayout>
      <div className="signincontainer">
        <div className="signin">
          <h1> Login</h1>
    <Form
        onFinish={onFinish}>
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
      <Form.Item
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
      >
        <Button type="primary" htmlType="submit" className="submit">
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
