import React,{useState,useEffect} from "react";
import DashLayout from "../../Components/DashboardLayout";
// import ProductContent from "../../Assets/constants/product.json";
import {Space,Table,Drawer} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import"antd/dist/antd.css";
import skinhealApis from "../../services/skinhealApi";


 

const Products=()=>{
    const [allproductsData,setAllproductsData]=useState([]);
    const [products, setProducts]=useState({});  
    const [isDrawerVisible,setIsDrawerVisible]=useState(false);

    useEffect(()=> {
        skinhealApis.getAllproducts().then((res)=>{
            console.log(res);
            setAllproductsData(res.data.data)
        })
    },[]);
    const columnOne=[
        {
            title:"Product Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"price/U",
            dataIndex:"price",
            key:"price"
        },
        
    {
        title:"Status",
        dataIndex:"Status",
        render: (text, record)=>(
            <Space size="middle">
                <a >Available</a>
                <a style={{color:'red'}}>Run out</a>
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
                    setProducts(record);
                    setIsDrawerVisible(true);
                }}style={{color:'blue'}}><EyeOutlined/></a>
                <a><EditOutlined/></a>
                <a><DeleteOutlined/></a>
            </Space>
        )
    },
    ]
    
    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}> Products </h2>
        <Table 
        style={{
            width:'80%',
            marginLeft:'250px',
            height:'80vh'}} 
            columns={columnOne} dataSource={ allproductsData}/>
        <Drawer 
        placement="right"
        onClose={()=>setIsDrawerVisible(false)}
        visible={isDrawerVisible}>
         <Space>
             <h4>
                 {products?.productPicture}  <br/>
                 Product Name: {products?.name} <br/>
                 Product Name: {products?.description}<br/>
                 Price/Unity:{products?.price}<br/>{" "}</h4>
             </Space>   
         
        </Drawer>
        </DashLayout>
    )
    }

  export default Products;