import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import "./products.css";
import ProductContent from "../../Assets/constants/products.json";
import {Space,Table} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import"antd/dist/antd.css";
const columnOne=[
    {
        title:"Product Name",
        dataIndex:"Product Name",
        key:"Product Name"
    },

    {
        title:"price/U",
        dataIndex:"price/U",
        key:"price/U"
    },
    {
    title:"Product Number",
    dataIndex:"Product Number",
    key:"Product Number"
},

{
    title:"Status",
    dataIndex:"Status",
    render: (text, record)=>(
        <Space size="middle">
            <a style={{color:'black'}}>Available</a>
            <a style={{color:'black'}}>Run out</a>
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
const Products=()=>{
    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}>Products</h2>
        <Table style={{width:'80%',marginLeft:'250px',height:'90vh'}} columns={columnOne} dataSource={ ProductContent}/>
        </DashLayout>
    )

    }

  export default Products;