import React from "react";
import "./signup.css" ;
//import {UserOutlined} from "@ant-design/icons";
const SignUp=()=>{
    return(
        <>
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
      </>
    )
}
export default SignUp;
