import React from "react";
import Home from "../Views/Home";
// import ReactDOM  from 'react-dom';
import {Routes, Route} from "react-router-dom";
import ShopAll from "../Views/shopAll";

const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/shopAll" element={<ShopAll/>}/>
        </Routes>
    )
}
export default Index;