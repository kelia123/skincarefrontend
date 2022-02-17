import React from "react"
import { Slider } from "../Assets/imageData"
import "./OrderSlider.css"
// import { Carousel } from 'antd';

const OrderSlider = () => {
    let SliderCopy = [...Slider]
    const SliderList = SliderCopy.map(el => (
        <div key={el.position} className="OrderSlider-SingleSlider">
            <img className="OrderSlider-img" src={el.img} alt={el.ProductName} style={{ height: "30vh" }} />
            <div className="OrderSlider-bottom">
                <div className="OrderSlider-bottom-ProductName">{el.ProductName}</div>
                <div className="OrderSlider-bottom-ProductName">{el.ProductName}</div>
                <div className="OrderSlider-bottom-Price">{el.price}</div>
            </div>
        </div>
    ))
    return (
        <div className="OrderSlider">
            <div className="OrderSlider-container">
                <div className="OrderSlider-back">Back</div>
                <div className="OrderSlider-Slider">

                    {SliderList}</div>
                <div className="OrderSlider-forward">forward</div>
            </div>
        </div>
    )
}
export default OrderSlider;