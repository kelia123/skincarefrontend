import React from "react";
import "./home.css"
import { MenuOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';





const Home=()=>{
    return(
    
        <>
      
        <div className="header">
           
            <div className="menu"> <MenuOutlined /> </div>
            <div className="logo"></div>
            <div className="rightcorner">
                <div className="signupdiv"><a href="/signup">Sign up</a> </div>
                <div className="signindiv"><a href="/signin">Sign in</a> </div>
                <div className="order"> <ShoppingCartOutlined /> </div>
             
            </div>
                  
        </div>
        
    
         </>
    )
}
export default Home;