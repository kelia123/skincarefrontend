import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import "./Customers.css";
import UserContent from "../../Assets/constants/users.json";
import {Space,Table} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import"antd/dist/antd.css";

    const column=[
        {
            title:"First Name",
            dataIndex:"First-Name",
            key:"First-Name"
        },

        {
            title:"Last Name",
            dataIndex:"Last-Name",
            key:"Last-Name"
        },
        {
        title:"Email adress",
        dataIndex:"Email adress",
        key:"Email adress"
    },
    {
        title:"Address",
        dataIndex:"Address",
        key:"Address"
    },
    {
        title:"Telephone",
        dataIndex:"Telephone",
        key:"Telephone"
    },
    {
        title:"Status",
        dataIndex:"Status",
        render: (text, record)=>(
            <Space size="middle">
                <a style={{color:'black'}}>Activate</a>
                <a style={{color:'black'}}>Disactivate</a>
            </Space>
        )
    },
    {
        title:"action",
        dataIndex:"action",
        render: (text, record)=>(
            <Space size="middle">
                <a ><EyeOutlined/></a>
                <a><EditOutlined/></a>
                <a><DeleteOutlined/></a>
            </Space>
        )
    },
]
const Customers=()=>{
    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}>users</h2>
        <Table style={{width:'80%',marginLeft:'250px',height:'90vh'}} columns={column} dataSource={ UserContent}/>
        </DashLayout>
    )

    }
  export default Customers ;
