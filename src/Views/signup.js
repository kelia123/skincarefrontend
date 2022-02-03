import React from "react";
import "./signup.css";
import HomeLayout from "../Components/HomeLayout";

const SignUp = () => {

  return (
    <>
      <HomeLayout>
        <div className="signupcontainer">

        <div className="signup">

            <h1> Sign Up </h1>
            <div className="firstname">
            <input type="text" placeholder="Name" name="Name" required></input>
            <input type="email" placeholder="Email" name="Email" required></input>
            <input type="password" placeholder="Password" name="Password" required></input>
            <input type="tel" placeholder="Phone number" id="phone" name="phone" required></input>
            <div className="checkbox">
              <input type="checkbox"></input>
              <h2> I read and agree to the terms and conditions </h2>
              </div>
            
            
            </div>

            <button type="submit"> <a href="/home">CREATE ACCOUNT</a></button><br /><br />
            <div className="pleasesignin">
            <a href="/signin">Already have an account please? signin</a>
            </div>

          </div>
        </div>
      </HomeLayout>
    </>
  )

import "./signup.css" ;
import HomeLayout from "../Components/HomeLayout";
//import {UserOutlined} from "@ant-design/icons";
const SignUp=()=>{
    return(
        <HomeLayout>
          {/* <div className="signup form"> */}
      <h1 style={{textAlign:'center'}}> 
       SignUp Form
       </h1>
      <div className="signup">
         
      <input type ="text" placeholder="Lastname" name="Lastname" required></input> 
      <input type="text" placeholder="Firstname" name="Firstname" required></input>
      <input type="text" placeholder="Email" name="Email" required></input>
      <input type="text" placeholder="Address" name="Address" required></input>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
      <input type="tel" placeholder="Phone number" id="phone" name="phone"required></input>
     
       <button type="submit"> <a href="/home">CREATE ACCOUNT</a></button><br/><br/>
      <a href="/signin">Already have an account please? signin</a>
      
      </div>
      {/* </div> */}
      </HomeLayout>
    )

}
export default SignUp;
