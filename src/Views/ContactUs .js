import React from "react";
import HomeLayout from "../Components/HomeLayout";
import "./ContactUs.css";
import {PhoneOutlined} from "@ant-design/icons";
import {EnvironmentOutlined} from "@ant-design/icons";
import {MailOutlined} from "@ant-design/icons";

const ContactUs=()=>{
    return(
        <HomeLayout>
            <div className="divcontiner">
            <div className="containerContactus">

         <h1 > Connect with us</h1>
         <div className="contactus">
             <div className="contact">
            <p > <PhoneOutlined /> :+250789532938</p>
             <a href="http://EnvironmentOutlined"> <p>  <EnvironmentOutlined /> :KG 549 st </p></a> 
             <a href="http://MailedOutlined.com"><p >    <MailOutlined /> :skinheal@gmail.com</p></a>

             </div>
           <div className="comments">
               <form>        
                      <label for="Names">Names:</label> <br></br>
                      <input type="name"></input>
                      <hr></hr>
                      <label  for="Email">Email:</label> <br></br>
                      <input type="Email"></input>
                      <hr></hr>
                      <labe for="Phone">Phone</labe> <br></br>
                      <input type="phone"></input>
                      <hr></hr>
                      <labe for="Type sms"> Type your Message here</labe> <br></br>
                      <input style={{height:'18vh'}} type="sms"></input>
                      <hr ></hr>
                  <button>send </button>
               </form> 
               </div>  
         </div>
         
         </div>
         </div>
         </HomeLayout>
    )
}
export default ContactUs;
