import React from "react";
import Home from "../Views/home";
import {Routes, Route} from "react-router-dom";
import Order from "../Views/order";
import EmptyCart from "../Views/EmptyCart"
import Cart from "../Views/Cart"
import SignUp from"../Views/signup";
import DashLayout from "../Components/DashLayout";
import ShopAll from "../Views/shopAll";
import LatestOrdersView from "../Views/Dashboard/LatestOrders";
import Customers from "../Views/Dashboard/UsersDash";






const Index=()=>{
    
    return(
        <>
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/Order" element={<Order/>}/>
            <Route exact path="/EmptyCart" element={<EmptyCart/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
            <Route exact path="/shopAll" element={<ShopAll/>}/>
            <Route exact path="/signup" element={<SignUp/>}></Route>
            
            

        </Routes>
    
        {
   
        <DashLayout>
            <Routes>
                <Route path="/dash/LatestOrdersView" element={<LatestOrdersView/>}></Route>
                <Route path="/dash/Customers" element={<Customers/>}></Route>
                
            </Routes>
        </DashLayout>  
  
    }
    </>

        
        
    )
}
export default Index;