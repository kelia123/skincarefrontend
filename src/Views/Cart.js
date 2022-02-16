import React from 'react';
import "./Cart.css";
import HomeLayout from '../Components/HomeLayout';
import {Remove,Add} from "@material-ui/icons";
const Cart=()=> {
  return(
    <HomeLayout>
  <div className="ItemSummary-underliner"></div>
  <h2 style={{textAlign:"center"}}> Your Card !! </h2>
  <div className="Cart-container">
     <div className="ItemSummary">
     <h2 className="title"> Item Summary </h2>
         <table className="table">
             <tr className="tr">
                 <th>Item</th>
                 <th>Name</th>
                 <th>Price</th>
                 <th>Quantity</th>
                 <th>Total</th>
             </tr>
             <td>
                 <div className="Itemimage">
                     {/* <image src="/Assets/img/serum1.jpg" layout="fill" objectFit="cover" alt=""/> */}
                 </div>
             </td>
             <td>
                  <span className="name"> Coconut Soap </span>
             </td>
             <td>
                 <span className="Price"> 5000 FRW </span>
             </td>
             <td>
                 <span className="Quantity">
                <Remove/> 1 <Add/>
                </span>
             </td>
             <td>
                 <span className="Total"> 10000 FRW</span>
             </td>
         </table>
     </div>
     <div className="OrderSummary">
        <div className="wrapper">
            <h2 className="title"> Order Summary </h2>
            <div className="totalText">
            <b className="totalTextTitle"> SubTotal: </b> 5000Rwf
            </div>
            <div className="totalText">
            <b className="totalTextTitle"> Total: </b> 5000Rwf
            </div>
            <button className="button"> CHECKOUT NOW </button>
        </div>
     </div>
  </div>
  </HomeLayout>
  );
}
export default Cart;