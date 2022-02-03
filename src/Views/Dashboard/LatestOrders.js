
import React from "react";
import {Table} from "antd"
import UserOrders from "../../Assets/constants/orders.json"
import {EyeOutlined, EditOutlined,DeleteOutlined} from "@ant-design/icons";
import {Space} from "antd";

const column =[
    
    {
        title: "LastName",
        dataIndex: "Lastname",
        key: "Lastname",  
    },
    {
        title: "Products",
        dataIndex: "name",
        key: "name",  
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: "Email",  
    },    
    {
        title: " Tel",
        dataIndex: "phone",
        key: "phone",  
    },
    {
        title: " Status",
        dataIndex: "Status",
        key: "Status",  
    },
    {
        title: "Actions",
        key: " actions", 
        
        
        render:()=>(
            <Space>
                 <a> <EyeOutlined/></a><a> <EditOutlined/></a><a> <DeleteOutlined/></a>
            </Space>

        ) 
    }
];

 const LatestOrdersView=()=>{
     
     return (
         <>
        
        <Table columns={column} dataSource={UserOrders}/></> 

        
     )
        
 }
 export default LatestOrdersView;
 