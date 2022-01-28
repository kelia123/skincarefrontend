import React from "react";
import "./EmptyCart.css"

const EmptyCart=()=> {
    return (
      <div className="OrderCart">
          <p> Your Cart is Empty!!</p>
    
          <div className="Shop-now-Order">
           <a href="/products"><button> Shop Our Products </button></a>
           </div>
    
        </div>
    );
}
export default EmptyCart;