import React from "react";
import "./Header.css"
import { MenuOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';

const Header=()=>{
    return(
        <>
        <div className="headerdiv">
        <div className="header">
            <div className="menu"> <MenuOutlined /> </div>
            <div className="logo"></div>
            <div className="rightcorner">
                <div className="signupdiv"><a href="/signup">Sign up</a> </div>
                <div className="signindiv"><a href="/signin">Sign in</a> </div>
                <div className="order"> <ShoppingOutlined /> </div>
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