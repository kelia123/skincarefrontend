import { Form, Input, Button, Checkbox, notification } from "antd";
import "./signup.css";
import "antd/dist/antd.css";
import HomeLayout from "../Components/HomeLayout";
import skinhealApi from "../services/skinhealApi";
<<<<<<< HEAD

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);

=======
const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
>>>>>>> fae237c (cart)
    skinhealApi.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        return notification.success({
          message: "Your account has been registered successfully",
        });
      } else {
        return notification.error({ message: res.data.message });
      }
    });
  };
<<<<<<< HEAD

=======
>>>>>>> fae237c (cart)
  return (
    <HomeLayout>
      <div className="signupcontainer">
        <div className="signup">
          <h1> create account</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="fistName"
              rules={[
                {
                  required: true,
                  message: "Please input your First name!",
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last name!",
                },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input email!",
                },
              ]}
            >
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your adress!",
                },
              ]}
            >
              <Input placeholder="adress" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input telephone number!",
                },
              ]}
            >
              <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox> I agree the terms and conditions</Checkbox>
<<<<<<< HEAD
              </Form.Item>

              <a className="login-form-forgot" href=""></a>
            </Form.Item>

=======
                
              </Form.Item>
              <a className="login-form-forgot" href=""></a>
            </Form.Item>
>>>>>>> fae237c (cart)
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
<<<<<<< HEAD
               className="button">
=======
              >
>>>>>>> fae237c (cart)
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </HomeLayout>
  );
};
<<<<<<< HEAD

=======
>>>>>>> fae237c (cart)
export default SignUp;
