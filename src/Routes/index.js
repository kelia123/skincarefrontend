import React from "react";

import Home from "../Views/Home";
import SignUp from"../Views/signup";
import SignIn from "../Views/signin";
// import ReactDOM  from 'react-dom';
import {Routes, Route} from "react-router-dom";
import ShopAll from "../Views/shopAll";
import OurStory from "../Views/ourStory";
import RegisterProduct from "../Views/Dashboard/registerProduct";


const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/shopAll" element={<ShopAll/>}/>
            <Route path="/ourStory" element={<OurStory/>}/>                                
            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
            <Route exact path="/dashboard" element={<RegisterProduct/>}/>
            
        </Routes>
    )
}
export default Index;