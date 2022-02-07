import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import dashOrders from "../../Assets/constants/DashOrder.json";
import { DeleteOutlined, EditOutlined,EyeOutlined } from '@ant-design/icons';

const DashOrders=()=>{

    return(
<DashLayout>
        <div className="Dashorder-contariner">
             <h1>Latest orders</h1>
             <div className="headers">
                 <h2>name</h2>
                 <h2>products</h2>
                 <h2>email</h2>
                 <h2>telephone</h2>
                 <h2>actions</h2>
             </div>
             
{dashOrders.map((order)=>(
    <>
    <div className="row">
    
    <p>{order.name}</p>
    <p>{order.products}</p>
    <p>{order.email}</p>
    <p>{order.telephone}</p>
   <div className="icon">
    <EyeOutlined/>
    <EditOutlined style={{marginLeft:"20px"}}/>
    <DeleteOutlined style={{marginLeft:"15px"}} />
    </div>
   
    </div>
    </>
    ))}



             



        </div>
        </DashLayout>
    )



}
export default DashOrders;