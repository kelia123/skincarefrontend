import React from "react";

import Home from "../Views/home";

import {Routes, Route} from "react-router-dom";
import Order from "../Views/order";
import EmptyCart from "../Views/EmptyCart"
import Cart from "../Views/Cart"

import SignUp from"../Views/signup";
import SignIn from "../Views/signin";

// import ReactDOM  from 'react-dom';

import ShopAll from "../Views/shopAll";



const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>


            <Route exact path="/Order" element={<Order/>}/>
            <Route exact path="/EmptyCart" element={<EmptyCart/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>


            <Route exact path="/shopAll" element={<ShopAll/>}/>

            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>


        </Routes>
    )
}
export default Index;