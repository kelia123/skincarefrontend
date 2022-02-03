import React from 'react';
import "./order.css"
import HomeLayout from '../Components/HomeLayout';
import CardSlider from "../Components/CardSlider"






const Order=()=> {
  return (
    <HomeLayout>
  <div className="OrderUnderliner"></div>
  <div className=" OrderPage">
      <p>Sign In To View Your Cart</p>
      <div className="signin-Order">
          <a href="/signIn"><button> Sign In</button></a>
      </div>
      <div className="shop-Order">
          <a href="/shopAll"><button> Shop Now</button></a>
      </div><br/>
         <p style={{padding:"30px",color: "black",marginbottom:"5px",marginRight:"10px"}}> You might like to fill your Cart with this: </p>
     
   
      
      
      <CardSlider/>
      
  </div>
  </HomeLayout>
    );
}

export default Order;
