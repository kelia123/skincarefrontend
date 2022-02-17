import React from "react";
import "./Footer.css";
import { InstagramOutlined } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';

const Footer = () => {

    return (
        <div className="footerdiv">
            <div className="footerdivision">
            <div className="footericons">
                <div className="facebook"></div>
                <div className="instagram"><InstagramOutlined /></div>
                <div className="pinterest"></div>
                <div className="twitter"><TwitterOutlined /></div>
            </div>
            <div className="menufooter">
                <br/>
                <a href="/home">Home</a><br/><br/>
                <a href="/signup">Our Story</a><br/><br/>
                <a href="/signup">Contact Us</a><br/><br/>
                <a href="/signup">Become a SkinHeal Ambassador</a>
            </div>
            <div className="newsletter">
                <h1>Join our Newsletter</h1>
                <h2>Email*</h2><br/>
                <input type="email" placeholder="" required></input><br/>
                <button type="submit"> <a href="/emailsent">Send</a></button>

                <div className="paywith">
                    <h3>Pay with:</h3>
                    <div className="mtnlogo"></div>
                </div>
            </div>
            </div>
            <div className="copyright">
                <h1>@2022SkinHeal</h1>
            </div>
        </div>
    )

}
export default Footer;