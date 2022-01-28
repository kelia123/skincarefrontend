import React from "react";

import Home from "../Views/home";
import SignUp from"../Views/signup";
import SignIn from "../Views/signin";
import Home from "../Views/Home";
// import ReactDOM  from 'react-dom';
import {Routes, Route} from "react-router-dom";
import ShopAll from "../Views/shopAll";


const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/shopAll" element={<ShopAll/>}/>

            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
        </Routes>
    )
}
export default Index;