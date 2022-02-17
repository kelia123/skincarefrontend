import React from "react";
import "./shopAll.css";
import HomeLayout from "../Components/HomeLayout";
import wallpaper from "../Assets/img/images/crop.jpg"
import products from "../Assets/constants/shop.json"


const ShopAll = () => {

    return (
        <div className="shop-container">
            <HomeLayout>
                <div className="wallpaper">
                    <img src={wallpaper} />
                </div>
                <div className="products">
                    <h1> Our collections</h1>
                    {products.map((category) => (
                        <>
                            <h2 className="titles">{category.title}</h2>
                            <div className="bodyScrubs">
                                {category.products.map((product) => (
                                    <div className="container">
                                        {/* <h1>{category.title}</h1> */}
                                        <img src={product.picture} />
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                        <button> add to cart</button>
                                    </div>
                                ))}

                            </div></>))}

                </div>

            </HomeLayout>

        </div>

    )
}

export default ShopAll;