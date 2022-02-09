import React from "react";
import "./signin.css";
import HomeLayout from "../Components/HomeLayout";
  //import {MailOutlined} from "@ant-design/icons"
// import {MailOutli} from '@ant-design/icons';

const SignIn=()=>{
    return(

        
       

          
      <div className="SignIn-container">

        <HomeLayout>
        
          <div className="signin">
          
        <h1>Sign In </h1>
{/*         
          <input type="text"  placeholder="Email" name="Email" required > </input> */}
          <input type="text"placeholder="E-mail"name="Email"required></input>
        <input type="pasword"placeholder="Password" name="pwd" required></input>
          
       <label>
         {/* <input type="checkbox"  name="remember" id="remember me"> Remember me
         </input> */}
         </label>
        <button type="submit">Sign in</button><br/><br/>
      <a href="/signup">Do not have an account? Sign up</a>
      
      
          </div>
         
          </HomeLayout>

          </div>
   



    



    )
   
}
export default SignIn;