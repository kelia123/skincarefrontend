import React,{useState} from "react";
import "./EmptyCart.css";
import {Drawer,Space} from "antd";
import "antd/dist/antd.css";


const EmptyCart=()=> {

    return (
    
      <div className="OrderCart">
        
         
          <h3 style={{textAlign:"center"}}> Your Cart is Empty!!</h3>
           <br/>
          <div className="Shop-now-Order">
           <a href="/order"><button> Shop Our Products </button></a>
           </div>
           <br/><br/>
           
        </div>
        
    );
}
export default EmptyCart;