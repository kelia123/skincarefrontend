import React from "react";
import HomeLayout from "../Components/HomeLayout";
import "./ourStory.css"
import girl from "../Assets/img/images/ourstory.png"
import reviews from "../Assets/constants/reviews.json"

const OurStory = () => {

    return (
        <HomeLayout>
            <div className="ourStory-container">

                <div className="background">
                    <img src={girl} alt="special" />

                    <div className="description">
                        <p> Skin heal is dedicated to help you glow in and out.
                            We have  natural vegan products which  nourish, smoothens and remove dead cells buildups. Indeed,
                            We are big believers that if you focus on skincare you won’t really need make up.
                        </p> <br></br>
                        <p>Sparkle like diamond!</p>
                    </div>

                </div>
                <div className="reviews">
                    <h1>Reviews</h1>
                    <div className="review-container">
                        {reviews.map((reviews) => (
                            <div className="single-review">
                                <img src={reviews.image} alt="special"></img>
                                <div className="message">
                                    <p>{reviews.message}</p>
                                    <p>{reviews.products}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default OurStory;