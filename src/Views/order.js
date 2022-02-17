import React from 'react';
import "./order.css"
import SliderTest from "./SliderTest"
// import { Carousel } from 'antd';
import HomeLayout from '../Components/HomeLayout';



const Order=()=> {
  return (
      <HomeLayout>

          <div className="OrderUnderline"></div>
  <div className=" OrderPage">
      <p style={{ fontSize:"20px"}}>Sign In To View Your Card </p>

      <div className="signin-Order">
          <a href="/signIn"><button> Sign In</button></a>
      </div>
      <div className="shop-Order">
          <a href="/shopAll"><button> Shop Now</button></a>
      </div>
         <p 
         style={{
             padding:"30px",
             color: "black",
             marginbottom:"5px",
             marginRight:"10px",
             fontSize:"20px"}}> You might fill your cart with :</p>
         <SliderTest/>
  </div>
  
  </HomeLayout>

    );
}

export default Order;
