import React from "react";
import Home from "../Views/home";
import SignUp from"../Views/signup";
import SignIn from "../Views/signin";
// import ReactDOM  from 'react-dom';
import {Routes, Route} from "react-router-dom";


const Index=()=>{
    return(
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
        </Routes>
    )
}
export default Index;