import React from "react";
import "./HomeLayout.css";
import "../Components/Header.css";
import Header from "./Header";


const HomeLayout=({children})=>{
    return(
       <div className="homecontainer">
           <Header/>
           <div className="children">
               {children}
               </div>
           
       </div>
    );
}
export default HomeLayout ;