import React,{useState,useEffect}from "react";
import DashLayout from "../../Components/DashboardLayout";
import "./Customers.css";
// import UserContent from "../../Assets/constants/users.json";
import {Space,Table,Drawer} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import"antd/dist/antd.css";
import skinhealApi from "../../services/skinhealApi";

const Customers=()=>{
    const [allCustomersData,setAllCustomersData]=useState([]);
    const [Customers, setCustomers]=useState({});  
    const [isDrawerVisible,setIsDrawerVisible]=useState(false);

    useEffect(()=> {
        skinhealApi.getAllCustomers().then((res)=>{
            console.log(res);
            setAllCustomersData(res.data.data)
        })
    },[]);
    const column=[
        {
            title:"First Name",
            dataIndex:"fistName",
            key:"fistName"
        },
        {
            title:"Last Name",
            dataIndex:"lastName",
            key:"lastName"
        },
        {
        title:"Email adress",
        dataIndex:"email",
        key:"email"
    },
    {
        title:"Address",
        dataIndex:" address",
        key:" address"
    },
    {
        title:"Telephone",
        dataIndex:" phone",
        key:" phone"
    },
    {
        title:"Status",
        dataIndex:"status",
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
                <a href="#"
                onClick={() => {
                    setCustomers(record);
                    setIsDrawerVisible(true);
                }}><EyeOutlined/></a>
                <a><EditOutlined/></a>
                <a><DeleteOutlined/></a>
            </Space>
        )
    },
]

    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}>users</h2>
        <Table style={{width:'80%',marginLeft:'250px',height:'90vh'}} 
        columns={column} dataSource={allCustomersData}/>
        <Drawer 
        placement="right"
        onClose={()=>setIsDrawerVisible(false)}
        visible={isDrawerVisible}>
         <Space>
             <h4>
                 First Name: {Customers?.fistName} <br/>
                 Last Name: {Customers?.lastName}<br/>
                 Telephone:{Customers?. phone}<br/>
                 Email adress:{Customers?.  email}<br/>
                 Password:{Customers?. password}<br/>
                 Address:{Customers?.address}<br/>
                 Role:{Customers?. role}<br/>
                 Status:{Customers?. status}<br/>{" "}</h4>
                 
             </Space>   
         
        </Drawer>
        </DashLayout>
        
    )
    } 
  export default Customers;