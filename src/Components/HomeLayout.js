import React from "react";
import "./HomeLayout.css";
import "../Components/Header.css";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout=({children})=>{
    return(
       <div className="homecontainer">
           <Header/>
           
           <div className="children">
               {children}
               </div>
               
               <Footer/>
       </div>
    );
}
export default HomeLayout ;