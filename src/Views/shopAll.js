import React from "react";
import "./shopAll.css";
import HomeLayout from "../Components/HomeLayout";
import wallpaper from "../Assets/img/images/crop.jpg"
import products from "../Assets/constants/shop.json"



const ShopAll=()=>{

    return(
        <HomeLayout>
 <div className="shop-container">

    <div className="wallpaper"> 
    <img src={wallpaper} alt="special"/>
    </div>
    <div className="products"> 
 <h1> Our collections</h1>
 <div className="bodyScrubs">
     {/* <h2 className="titles">Body scrubs</h2> */}
{products.map ((products)=>(
     <div className="container">
         {/* <h1>{products.title}</h1> */}
         <img src={products.picture} alt="special"/>
         <h3>{products.name}</h3>
         <p>{products.description}</p>
         <p>{products.price}</p>
     </div>
))}

 </div>
    </div>


 </div> 

 </HomeLayout>
    )
}

export default ShopAll;