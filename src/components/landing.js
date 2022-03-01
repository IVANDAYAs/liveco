import React from "react";
import "./landing.css";
import landingimg from "./images/landing.JPG";
import landinglogo from "./images/logo.png";

export default function(){
    return(
            <div className="landing">
                <img className="landbg" src={landingimg}></img>
                    <div className="landingtext">
                        <img className="landlogo" src={landinglogo}></img>
                        <h4><b>make living sustainable</b></h4>
                        <br />
                        <h2>Sign up for free trial,we are your well wishers</h2>
                        <h5>STAND A CHANCE TO GET AN EXCLUSIVE LIVECO NFT</h5>
                        <button  type="button" class="btn  lbtn"><a className="nav-link" href="#fourl">know more</a></button>
                    </div>  
            </div>
    );
}