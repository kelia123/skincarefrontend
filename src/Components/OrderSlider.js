import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './OrderSlider.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel autoplay>
    <div className="card-images">
    <img src="https://www.arabiaweddings.com/sites/default/files/articles/2020/04/diy-sugar-body-scrub.jpg" 
            style={{width:"50%",height:"40vh"}}/>
      <h3 style={contentStyle}>Image 1</h3>
    </div>
    <div className="card-images">
    <img src="https://cdn.shopify.com/s/files/1/2420/2177/products/IMG-20180307-WA0000_1200x1200.jpg?v=1536801512" 
            style={{width:"50%",height:"40vh"}}/>
      <h3 style={contentStyle}>Image 2</h3>
    </div>
    <div className="card-images">
      <h3 style={contentStyle}>3</h3>
    </div>
    <div className="card-images">
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);