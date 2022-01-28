import React from "react";
import Home from "../Views/home";
import {Routes, Route} from "react-router-dom";
import Order from "../Views/order";
import EmptyCart from "../Views/EmptyCart"
import Cart from "../Views/Cart"

const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/Order" element={<Order/>}/>
            <Route exact path="/EmptyCart" element={<EmptyCart/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>

        </Routes>
    )
}
export default Index;