import React from 'react';
import "./order.css"
import OrderSlider  from '../Components/OrderSlider';



const Order=()=> {
  return (
  <div className=" OrderPage">
      <p>Sign In To View Your Cart</p>
      <div className="signin-Order">
          <a href="/signIn"><button> Sign In</button></a>
      </div>
      <div className="shop-Order">
          <a href="/products"><button> Shop Now</button></a>
      </div>
         <p style={{padding:"30px",color: "black",marginbottom:"5px",marginRight:"10px"}}></p>
     
      <OrderSlider/>
  </div>
    );
}

export default Order;
