import React from "react";
import {Routes, Route} from "react-router-dom";
import Order from "../Views/order";
import Home from "../Views/home.js";
import EmptyCart from "../Views/EmptyCart";
import Cart from "../Views/Cart"
import SignUp from"../Views/signup";
import SignIn from "../Views/signin";
import ContactUs from "../Views/ContactUs ";
import ShopAll from "../Views/shopAll";
import OurStory from "../Views/ourStory";

import MessageReply from "../Views/MessageReply";
import { Carousel } from "antd";
import SliderTest from "../Views/SliderTest"

//dashboard
import RegisterProduct from "../Views/Dashboard/registerProduct";
import DashOrders from "../Views/Dashboard/orders"




const Index=()=>{
    return(
        <Routes>


            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/Order" element={<Order/>}/>
            <Route exact path="/EmptyCart" element={<EmptyCart/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
            <Route exact path="/shopAll" element={<ShopAll/>}/>
            <Route path="/ourStory" element={<OurStory/>}/>                                
            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
            <Route exact path="/ContactUs"element={<ContactUs/>}></Route>
            <Route exact path="/MessageReply"element={<MessageReply/>}></Route>



   
            <Route exact path="/registerProducts" element={<RegisterProduct/>}/>
            <Route exact path="/dashOrders" element={<DashOrders/>}/>

        </Routes>
    )
}
export default Index;