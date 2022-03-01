import React from "react";
import "./contact.css";


export default function(){
    return(
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="ch">
                            <h1>Let's work together!</h1>
                        </div>
                        <div className="cs">
                            <h5>FIND US ON</h5>
                            <h4>SOCIAL MEDIA</h4><br></br>
                            <div className="row icons">
                                <i class="col fa-2x fa-brands fa-instagram"></i>
                                <p className="col ">Instagram</p>
                            </div>
                            <div className="row icons">
                                <i class="col fa-2x fa-brands fa-facebook"></i>
                                <p className="col ">Facebook</p>
                            </div>
                            <div className="row icons">
                                <i class="col fa-2x fa-brands fa-twitter"></i>
                                <p className="col ">Twitter</p>
                            </div>
                            <div className="row icons">
                                <i class="col fa-2x fa-brands fa-linkedin"></i>
                                <p className="col ">LinkedIn</p>
                            </div>
                        </div>
                    </div>
                    <div className="col cr">
                        <h4>EMAIL US</h4>
                        <p>liveco@letsliveco.in</p>
                        <h4>GIVE US A CALL</h4>
                        <p>+91 853296120</p>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
}