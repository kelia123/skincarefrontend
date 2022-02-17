import React, { useState, useEffect } from "react";
import DashLayout from "../../Components/DashboardLayout";
import { Space, Table,Drawer,Card,Skeleton,notification } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import SkinHealApis from "../../services/skinhealApi";
import "antd/dist/antd.css";

const Customers = () => {

  const [allUsersData, setAllUsersData] = useState([]);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [user, setUser] = useState({});



  const column = [
    {
      title: "First Name",
      dataIndex: "fistName",
      key: "fistName",
    },
   
    {
      title: "Email adress",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Telephone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <Space size="middle">
          <a style={{ color: "black" }}>Activate</a>
          <a style={{ color: "black" }}>Disactivate</a>
        </Space>
      ),
    },
    {
      title: "action",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <a href="#"
              onClick={() => {
                setUser(record);
                setIsDrawerVisible(true);
              }}> 
            <EyeOutlined />
          </a>
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];



  useEffect(() => {
      SkinHealApis.getAllUsers().then((res)=>{
        console.log(">>>>>>", res);
        if (!res) {
          return notification.error({
            message: "Server is not running!",
          });
        }
        if (res.status == 200) {
          setAllUsersData(res?.data.data);
        } else {
          return notification.error({
            message: "failed to get data from backend",
        });
    }
  });
}, []);

  return (
    <DashLayout>
      <h2 style={{ textAlign: "center", fontSize: "22px", fontWeight: "400" }}>
        users
      </h2>
      {allUsersData.length == 0 ? (
          <Skeleton active></Skeleton>
        ) : (
      <Table
        style={{ width: "80%", marginLeft: "250px", height: "90vh" }}
        columns={column}
        dataSource={allUsersData}
      />)}

      <Drawer  placement="left"
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
        width="50%"
      >
        <Card>
          <Space>
            <h4>
              Names: {user?.fistName} {user?.lastName}{" "}
            </h4>
          </Space>
        </Card>
         
      </Drawer>
    </DashLayout>
  );
};
export default Customers;
