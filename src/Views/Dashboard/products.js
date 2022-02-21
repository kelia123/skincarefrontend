import React,{useState,useEffect} from "react";
import DashLayout from "../../Components/DashboardLayout";
import "./products.css";
// import ProductContent from "../../Assets/constants/products.json";
import {Drawer, Skeleton, Space,Table,notification,Card} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import SkinHealApis from "../../services/skinhealApi";
import"antd/dist/antd.css";

const AllProducts = () => {
    const[products,setProducts]=useState({});
    const [isDrawerVisible, setIsDrawerVisible]= useState(false);
    const [AllProductsData, setAllProductsData] = useState([]);
    

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
            <a href="#"
            onClick={()=>{
                setProducts(record);
                setIsDrawerVisible(true);
            }}><EyeOutlined/></a>
            <a><EditOutlined/></a>
            <a><DeleteOutlined/></a>
        </Space>
    )
},
]
useEffect(() => {
    SkinHealApis.getAllproducts().then((res)=>{
      console.log(">>>>>>", res);
      if (!res) {
        return notification.error({
          message: "Server is not running!",
        });
      }
      if (res.status === 200) {
        setAllProductsData(res?.data.data);
      } else {
        return notification.error({
          message: "failed to get data from backend",
      });
  }
});
}, []);
    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}>Products</h2>
         {AllProductsData.length === 0 ?(
             <Skeleton active></Skeleton>
         ) : (
        <Table
         style={{
             width:'80%',
             marginLeft:'250px',
             height:'90vh'}} columns={columnOne} dataSource={ AllProductsData}/>)}
             <Drawer placement="left"
             onClose={() =>setIsDrawerVisible(false)}
             visible={isDrawerVisible}
             width="50%"
             >
                 <Card className="dashCard"> 
                     <Space>
                     <h4>
                     <img src={products?.productPicture} /> <br/>
                     Product Name: {products?.name} <br/> <br/>
                     Description: {products?.description}<br/>  <br/>
                     price/U:{products?.price}{" "}
                        </h4>
                   </Space>
                     </Card>
                 </Drawer>
        </DashLayout>
    )

    } 

  export default AllProducts;