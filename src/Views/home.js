import React from "react";
import "./home.css"
import HomeLayout from "../Components/HomeLayout";
import bestSellers from "../Assets/constants/home.json"





const Home = () => {
    return (
    
        <HomeLayout>
            <div className="homepage">
                <div className="modeldiv0">
                    <div className="modeldiv">
                        <div className="firstimage"></div>
                        <div className="secondimage"></div>
                        <div className="model"></div>
                    </div>
                    <div className="shopourproducts">
                        <h1><a href="/shopAll">Shop our products</a></h1>
                    </div>
                </div>
                <div className="divtwo">
                    <div className="words">
                        <h1> Our dedications </h1>
                        <p> Skin heal is dedicated to help you glow in and out.
                            We have  natural vegan products which  nourish, smoothens and remove dead cells buildups. Indeed,
                            We are big believers that if you focus on skincare you won’t really need make up.
                            Skin heal is dedicated to help you glow in and out.
                            We have  natural vegan products which  nourish, smoothens and remove dead cells buildups. Indeed,
                            We are big believers that if you focus on skincare you won’t really need make up.</p>
                    </div>
                    <div className="photos">
                        <div className="photo1"></div>
                        <div className="photo2"></div>
                        <div className="photo3"></div>
                    </div>
                </div>
                <div className="bestsellers">
                <h1>Our Bestsellers</h1>
                <div className="bestcontainer">
                    {bestSellers.map((bestSellers) => (
                        <>
                    
                    <div className="bestsellerscontainer">
                        <img src={bestSellers.photo}></img>
                        <p>{bestSellers.name}</p>
                        <p>{bestSellers.price}</p>
                    </div>
                   

                    </>))}
                    </div>
                    
                </div>
                
                
            </div>
        </HomeLayout>
        
    );

}
export default Home;