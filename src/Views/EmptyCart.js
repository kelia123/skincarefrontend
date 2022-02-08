import React,{useState} from "react";
import "./EmptyCart.css";
import {Modal} from "antd";
import "antd/dist/antd.css";


const EmptyCart=()=> {

    const [visible,setVisible]= useState(true);

    return (
    
      <div className="OrderCart">
          
          <Modal className="EmptyCartModel"
          visible={visible}
          onOk={() =>setVisible(true)}
          onCancel={()=> setVisible(false)}
          >
          <h3 style={{textAlign:"center"}}> Your Cart is Empty!!</h3>
           <br/>
          <div className="Shop-now-Order">
           <a href="/order"><button> Shop Our Products </button></a>
           </div>
           <br/><br/>
           </Modal>
           
        </div>
        
    );
}
export default EmptyCart;