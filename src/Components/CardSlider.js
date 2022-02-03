import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




const CardSlider =()=> {
  let settings = {
    dot: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToscroll: 1,
    cssEase: "linear"
  }

  return (
  <Slider {...settings}>
    <div className="card-wrapper">
      <div className="card">
          <div className="card-images">
            <img src="https://www.arabiaweddings.com/sites/default/files/articles/2020/04/diy-sugar-body-scrub.jpg" 
            style={{width:"50%",height:"40vh"}}/>
          </div>
          <div className="details">
              <h4>Product:Sugar body scrub </h4> 
              <h4>Price:4500 RWF</h4>
          </div>
       </div>
    </div>
    <div className="card-wrapper">
      <div className="card">
          <div className="card-images">
            <img src="https://cdn.shopify.com/s/files/1/2420/2177/products/IMG-20180307-WA0000_1200x1200.jpg?v=1536801512" 
            style={{width:"50%",height:"40vh"}}/>
          </div>
          <div className="details">
              <h4>Product:Mango butter </h4>
              <h4>Price:6000 RWF</h4>
          </div>
       </div>
    </div>
    <div className="card-wrapper">
      <div className="card">
          <div className="card-images">
            <img src="https://lovelygreens.com/wp-content/uploads/turmeric-soap.jpg" 
            style={{width:"50%",height:"40vh"}}/>
          </div>
          <ul className="AddToCard">
              <a href="#"><i className="AddTo"></i></a>
          </ul>
          <div className="details">
              <h4> Product:Turmeric soap </h4>
              <h4>Price:3500 RWF</h4>
          </div>
       </div>
    </div>
    <div className="card-wrapper">
      <div className="card">
          <div className="card-images">
            <img src="https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            style={{width:"50%",height:"40vh"}}/>
          </div>
          
          <div className="details">
              <h4> Product:Aloe vera soap </h4>
               <h4>Price: 4000RWF</h4>
          </div>
       </div>
    </div>
    <div className="card-wrapper">
      <div className="card">
          <div className="card-images">
            <img src="https://www.shahebbibi.com/wp-content/uploads/2021/01/asldd144f1.jpg"
            style={{width:"50%",height:"40vh"}}/>
          </div>
          <ul className="AddToCard">
              <a href="#"><i className="AddTo"></i></a>
          </ul>
          <div className="details">
              <h4>Almond Butter </h4>
               <h4>5500 RWF</h4>
          </div>
       </div>
    </div>
  </Slider>
  )
  }
export default CardSlider;