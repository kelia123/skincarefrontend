import React from "react";
import "./DashboardLayout.css";
import { MenuOutlined,ShoppingCartOutlined, TeamOutlined,AppstoreOutlined,MessageOutlined,BarChartOutlined,FolderOpenOutlined,ImportOutlined  } from '@ant-design/icons';
import photo from "../Assets/img/logo.png"


const DashLayout=({children})=>{
    return(
        <div className="dash-container">

<div className="header">
    <div className="menu"> <MenuOutlined /> </div>
<<<<<<< HEAD
    <div className="logo-division"> <img src={photo} alt=""></img></div>
    <div className="logout">log out</div>
=======
    <div className="logo-division"> <img src={photo}></img></div>
    <div className="logout"><a href="/home">log out</a> </div>
>>>>>>> a5d634a (fetching apis)
    </div>
    <div className="menuSection">
    <ul className="icons">
    <li><AppstoreOutlined /> </li>
    <li><FolderOpenOutlined /> </li>
    <li><ImportOutlined /></li>
    <li><ShoppingCartOutlined></ShoppingCartOutlined></li>
    <li>  <TeamOutlined /> </li>
    {/* <li><MessageOutlined /></li> */}
    <li><BarChartOutlined /></li>
</ul>

<ul className="list">
    <li> <a>Dashboard</a></li>
    <li> <a href="/manageProducts"> Manage product</a></li>
    <li> <a href="/registerProducts">Register product</a></li>
    <li><a href="/dashOrders">Orders</a></li>
    <li> <a href="/users"> Customers</a></li>
    {/* <li><a href="/review">Reviews</a></li> */}
    <li><a href="/statistics">Statistics</a></li>
</ul>

    </div>
    {children}
    </div>
    )
}

export default DashLayout;