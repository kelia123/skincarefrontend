import React from "react";
import Home from "../Views/Home";
// import ReactDOM  from 'react-dom';
import {Routes, Route} from "react-router-dom";

const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
        </Routes>
    )
}
export default Index;