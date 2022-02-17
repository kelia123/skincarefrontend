import React, {useState} from "react";
import "./Header.css"
import {Drawer} from "antd"
import { MenuOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import EmptyCart from "../Views/EmptyCart";



const Header=({data})=>{
    const [drawerVisible,setDrawerVisible]=useState(false);
    const handleclickDrawerVisible= ()=>{
      setDrawerVisible(true);
    }
    const closeDrawervisible=()=>{
      setDrawerVisible(false);
    }
    return(
        <>
        <Drawer placement="right" visible={drawerVisible} width={350} height={10}  onClose={()=>closeDrawervisible()}>
            <EmptyCart data={data}/>
          </Drawer>
        <div className="headerdiv">
        <div className="header" >
            <div className="menu"> <MenuOutlined /> </div>
            <div className="logo"></div>
            <div className="hiddenLinks">
                <a href="/home">Home</a>
                <a href="/ourstory">Our story</a>
                <a href="/shopall">Shop All</a>
                <a href="/contactus">Contact Us</a>
                <a href="/signup">Sign up</a>
                <a href="/signin">Sign in</a>
                <a ><ShoppingOutlined /></a>
            </div>
            <div className="rightcorner">
                <div className="signupdiv"><a href="/signup">Sign up</a> </div>
                <div className="signindiv"><a href="/signin">Sign in</a> </div>
                <div className="order"> <a onClick={()=> handleclickDrawerVisible()}><ShoppingOutlined /> </a></div>

            </div>
        </div>
        <div className="navbar">
                <div className="homediv"><a href="/home">Home</a></div>
                <div className="ourstorydiv"><a href="/ourstory">Our story</a></div>
                <div className="shopalldiv"><a href="/shopall">Shop All</a></div>
                <div className="contactusdiv"><a href="/contactus">Contact Us</a></div>
                
        </div>
        </div>
        </>
    )
}
export default Header;