import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./SliderTest.css";

const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 500, itemsToShow: 3 },
];

function SliderTest() {
  return (
    <>
      {/* <h3 style={{ textAlign: "center" }}> You might fill your cart with :</h3> <br/><br/> */}
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <div className="Card-wrapper">
          <Item>
          <img src="https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            style={{width:"83%",height:"45vh"}}alt=""/>
          </Item>
          <h4 style={{textAlign:"center"}}> Aloe vera soap </h4>
          <h4 style={{textAlign:"center"}}> 4000RWF</h4>
          </div>
           <div className="Card-wrapper">
          <Item>
          
          <img src="https://cdn.shopify.com/s/files/1/2420/2177/products/IMG-20180307-WA0000_1200x1200.jpg?v=1536801512" 
             style={{width:"80%",height:"45vh"}}alt=""/>  
          </Item>
              <h4 style={{textAlign:"center"}}>Mango butter </h4>
              <h4 style={{textAlign:"center"}}>6000 RWF</h4>
              </div>
            <div className="Card-wrapper">
              
          <Item>
          <img src="https://lovelygreens.com/wp-content/uploads/turmeric-soap.jpg" 
            style={{width:"80%",height:"45vh"}}alt=""/>
          </Item>
              <h4 style={{textAlign:"center"}}> Turmeric soap </h4>
              <h4 style={{textAlign:"center"}}> 3500 RWF</h4>
            </div>
            <div className="Card-wrapper">
          <Item>
          <img src="https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            style={{width:"80%",height:"45vh"}}alt=""/>
          </Item>
               <h4 style={{textAlign:"center"}}> Aloe vera soap </h4>
               <h4 style={{textAlign:"center"}}> 4000RWF</h4>
          </div>
          <div className="Card-wrapper">
          <Item>
          <img src="https://www.shahebbibi.com/wp-content/uploads/2021/01/asldd144f1.jpg"
            style={{width:"80%",height:"45vh"}}alt=""/>
          </Item>
               <h4 style={{textAlign:"center"}}>Almond Butter </h4>
               <h4 style={{textAlign:"center"}}>5500 RWF</h4>
          </div>
          <div className="Card-wrapper">
          <Item>
          <img src="https://www.arabiaweddings.com/sites/default/files/articles/2020/04/diy-sugar-body-scrub.jpg" 
            style={{width:"80%",height:"45vh"}}alt=""/>
          </Item>
              <h4 style={{textAlign:"center"}}>Sugar body scrub </h4> 
              <h4 style={{textAlign:"center"}}>4500 RWF</h4>
          </div> 
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<SliderTest />, rootElement);
export default SliderTest;