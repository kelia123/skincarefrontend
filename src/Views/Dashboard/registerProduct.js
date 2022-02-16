import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import "./registerProduct.css"
import {Button, Upload,Input} from "antd"
import {UploadOutlined} from "@ant-design/icons"

const RegisterProduct =()=>{
 return(

    <div className="register-container">
<DashLayout>
 
 <div className="registering">
 <h1>Register product</h1>
 <label for="product" className="labels">Product:</label>
 <input className="inputs" style={{ marginLeft:"76.91px"}}></input>

 {/* <label for="image link" className="labels">Image link:</label> */}
 {/* <input className="inputs"></input> */}

 <label for="description" className="labels">Description:</label>
 <Input.TextArea className="inputs" style={{marginLeft:"46px",width:"80.5%", marginTop:"30px"}}/>
<br></br>
 <label for="price" className="labels">Price:</label>
 <input className="inputs" style={{ marginLeft:"92px"}}></input>
 <br></br>
 <label for="price" className="labels">Available:</label>
 <input className="inputs" style={{ marginLeft:" 65px"}} ></input>
 <br></br>  <br></br> 
 <Upload><Button icon={<UploadOutlined />} style={{ width:160, height: "4.5vh", marginLeft:"157px", marginTop:"60px"}}>Upload Image</Button></Upload>
 <button className="submit">Submit</button>
 </div>
 






</DashLayout>


    </div>


 )
}
export default RegisterProduct;