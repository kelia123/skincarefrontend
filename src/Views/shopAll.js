import React, { useState } from "react";
import "./shopAll.css";
import { Drawer } from "antd";
import HomeLayout from "../Components/HomeLayout";
import wallpaper from "../Assets/img/images/crop.jpg";
import products from "../Assets/constants/shop.json";
import SingleProduct from "./singleProduct";

const ShopAll = ({ data }) => {
  const [productData, setProductData] = useState({name:"ben"});
  const [drawerVisble, setDrawervisble] = useState(false);
  const handleclickDrawerVisible = () => {
    // setProductData(product);
    setDrawervisble(true);
  };

  const closeDrawervisble = () => {
    setDrawervisble(false);
  };

  return (
    <>
      <Drawer
        placement="left"
        visible={drawerVisble}
        width={650}
        onClose={closeDrawervisble}
      >
        <SingleProduct data={productData} />
      </Drawer>
      <div className="shop-container">
        <HomeLayout>
          <div className="wallpaper">
            <img src={wallpaper} alt="special one" />
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
                      <div className="overlay">
                        <img className="image" src={product.picture} />
                        <div className="middle">
                          <div
                            onClick={() =>{  handleclickDrawerVisible();setProductData(product)}}
                            className="text"
                          >
                            {" "}
                            add to cart
                          </div>
                        </div>
                      </div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>{product.price}</p>
                    
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </HomeLayout>
      </div>
    </>
  );
};

export default ShopAll;
