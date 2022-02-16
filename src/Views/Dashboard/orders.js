import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import dashOrders from "../../Assets/constants/DashOrder.json";
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import  {Table,Space} from "antd";
import "antd/dist/antd.css";

const Column = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Products',
        dataIndex: 'products',
        key: 'products',
    },
    {
        title: 'Price (RWF)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Telephone',
        dataIndex: 'telephone',
        key: 'seats',
    },
   
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a> <EyeOutlined /> </a>
                <a> <EditOutlined /> </a>
                <a> <DeleteOutlined /> </a>
            </Space>
        ),
    }
];


const DashOrder = () => {
    return (
        <>
        <DashLayout>
            <div className="Dashorder-container">
            <h1>Latest orders</h1>
            <Table columns={Column} dataSource={dashOrders} />
            </div>
            </DashLayout>
        </>
    )
}

export default DashOrder;