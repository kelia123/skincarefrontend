import React from "react";
import "./Home.css"
import HomeLayout from "../Components/HomeLayout";





const Home=()=>{
    return(

    
        <>
      
        <div className="header">
           
            <div className="menu"> <MenuOutlined /> </div>
            <div className="logo"></div>
            <div className="rightcorner">
                <div className="signupdiv"><a href="/signup">Sign up</a> </div>
                <div className="signindiv"><a href="/signin">Sign in</a> </div>
                <div className="order"> <ShoppingCartOutlined /> </div>
             
            </div>
                  
        </div>
        
    
         </>
    )

       <HomeLayout>
           <div className="homepage">
               <div className="modeldiv">
                   <div className="firstimage"></div>
                   <div className="secondimage"></div>
                   <div className="model"></div>
               </div>
               <div className="shopourproducts">
                   <h1>Shop our products</h1>
               </div>
               <div className=" divtwo">
                   <div className="words">
                       <h1> Lorem ipsum </h1>
                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus lorem sed venenatis malesuada. Aliquam id elit at quam ultrices lacinia quis nec nisi. Aliquam nec mattis felis. Phasellus eleifend enim sed metus imperdiet, in molestie arcu cursus. Vestibulum sed ante ac lacus hendrerit maximus et ac mi. </p>
                   </div>
                   <div className="photos">
                       <div className="photo1"></div>
                       <div className="photo2"></div>
                       <div className="photo3"></div>
                   </div>
                   

               </div>
           </div>
       </HomeLayout>
    );

}
export default Home ;