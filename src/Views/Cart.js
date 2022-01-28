import React from 'react';
import "./Cart.css"

const Cart=()=> {
  return( 
  <div className="Cart-container">
       
     <div className="ItemSummary">
         <h3 style={{textAlign:"center"}}> Item Summary </h3>
         <div className="ItemSummary-container">
             <h6>Item</h6>
             <h6>Price</h6>
             <h6>Total</h6>
         </div>
         <div className="ItemSummary-underliner"></div>
         <div className='Itemimage'>
         <div className="ItemImg"></div>
         <div className='price'>
             <h1> 5000 FRW </h1></div>
         <div className='total'>
             <h1> 5000 FRW </h1>
         </div>
         </div>
         <h4> Acne Serum </h4>
     </div>
     <div className="Order-Summary">
         <h3 style={{textAlign:"center"}}> Order Summary</h3> <br/>
         <div className="subtotal">
         <p>SubTotal</p>
         <p> 5000Rwf</p>
         </div><br/>
         
             <button style={{textAlign:"center",width:"70%",height:"7vh",margin:"15px",backgroundColor:"rgba(210, 160, 122, 1)",borderRadius:"10px",border:"none"}}>CHECKOUT SECURELY NOW</button>
         
     </div>
  </div>
  );
}

export default Cart;
