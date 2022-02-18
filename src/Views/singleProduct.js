import React from "react";

import "./singleProguct.css"

const SingleProduct = ({data}) => {
  return (
    <div className="drawer-container">
      <div className="imageSection">
          <h1>{data.name}</h1>
        <img src={data.picture}/>
      </div>
      <div className="content">
      <p> Briefly: {data.description}</p>
      <p>Price:{data.price}</p>
         <h2> Instructions</h2>
        <p>{data.instruction}</p>
        <h2> Side effects</h2>
        <p>{data.effects}</p>
        <button className="button"> add to cart</button>
        <br></br>
      
      </div>
        
    </div>
  );
};

export default SingleProduct;
