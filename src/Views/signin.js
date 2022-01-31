import React from "react";
import "./signin.css";
import HomeLayout from "../Components/HomeLayout";
  //import {MailOutlined} from "@ant-design/icons"
// import {MailOutli} from '@ant-design/icons';

const SignIn=()=>{
    return(
        <HomeLayout>
          <div className="signin">
          
        <h1>Sign In </h1>
{/*         
          <input type="text"  placeholder="Email" name="Email" required > </input> */}
          <input type="text"placeholder="Email"name="Email"required></input>
        <input type="pasword"placeholder="password" name="pwd" required></input>
          
       <label>
         {/* <input type="checkbox"  name="remember" id="remember me"> Remember me
         </input> */}
         </label>
        <button type="submit">SIGN IN</button><br/><br/>
      <a href="/signup">If you do not have an account please? CREATE ACCOUNT</a>

          </div>

    </HomeLayout>
    )
   
}
export default SignIn;