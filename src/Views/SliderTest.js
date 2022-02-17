import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./SliderTest.css";
// import {useCart} from "react-use-cart";
// import Item from "../Assets/constants/slider.json"

const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 500, itemsToShow: 3 },
];

function SliderTest(props) {
  // const {addItem}={useCart}
  return (
    <>
     
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
        <div className="Card-wrapper">
          <Item>

          <img  src="https://beautycrafter.com/wp-content/uploads/2021/01/diy-coffee-scrub-1.jpg" 
            style={{width:"69%",height:"40vh"}} alt="" />
            </Item>
          <h4 style={{textAlign:"center"}}> Cofee body scrub </h4>
          <h4 style={{textAlign:"center"}}> 5500 RWF</h4>
          <button className="orderButton" ><a href="/Cart"> add to cart</a></button>
          </div>
           <div className="Card-wrapper">
          <Item>
          
          <img  src="https://cdn.shopify.com/s/files/1/2420/2177/products/IMG-20180307-WA0000_1200x1200.jpg?v=1536801512" 
             style={{width:"95%",height:"40vh"}} alt=""/>  
          </Item>
              <h4 style={{textAlign:"center"}}>Mango butter </h4>
              <h4 style={{textAlign:"center"}}>6000 RWF</h4>
              <button className="orderButton"><a href="/Cart"> add to cart</a></button>
              </div>
            <div className="Card-wrapper">
              
          <Item>
          <img  src="https://lovelygreens.com/wp-content/uploads/turmeric-soap.jpg" 
            style={{width:"65%",height:"40vh"}}alt=""/>
          </Item>
              <h4 style={{textAlign:"center"}}> Turmeric soap </h4>
              <h4 style={{textAlign:"center"}}> 3500 RWF</h4>
              <button className="orderButton"> <a href="/Cart"> add to cart</a></button>
            </div>
            <div className="Card-wrapper">
          <Item>
          <img  src="https://media.istockphoto.com/photos/coconut-handmade-soap-spa-and-body-care-concept-picture-id1128678734?k=20&m=1128678734&s=612x612&w=0&h=Ny6JUKhFJkgnT6j0pRkzGJjBX70YS0c7R-FmRv_hCUw=" 
            style={{height:"40vh"}}alt=""/>
          </Item>
               <h4 style={{textAlign:"center"}}> Cocoa Soap </h4>
               <h4 style={{textAlign:"center"}}> 3500RWF</h4>
               <button className="orderButton"> <a href="/Cart"> add to cart</a></button>
          </div>
          <div className="Card-wrapper">
          <Item>
          <img  src="https://www.shahebbibi.com/wp-content/uploads/2021/01/asldd144f1.jpg"
            style={{width:"95%",height:"40vh"}}alt=""/>
          </Item>
               <h4 style={{textAlign:"center"}}>Almond Butter </h4>
               <h4 style={{textAlign:"center"}}>5500 RWF</h4>
               <button className="orderButton"> <a href="/Cart"> add to cart</a></button>
          </div>
          <div className="Card-wrapper">
             <Item>
              <img src="https://www.imaxshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/burro-di-karite.jpeg.pagespeed.ce.0632cS99cK.jpg" 
              style={{width:"80%",height:"40vh"}}alt=""/>
             </Item>
              <h4 style={{textAlign:"center"}}>Shea butter </h4> 
              <h4 style={{textAlign:"center"}}> 5000 RWF</h4>
              <button className="orderButton"> <a href="/Cart"> add to cart</a></button> 
            </div>
            
         </Carousel>
       </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SliderTest />, rootElement);

export default SliderTest;