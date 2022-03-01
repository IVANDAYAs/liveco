import React from "react";
import "./navbar.css";

export default function(){
    return(
        <div className="lnav container-fluid">
            <nav class="navbar navbar-dark fixed-top navbar-expand-lg  lnav" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LIVECO</a>
                    <div className="icon">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#fourl">Features</a>
                        <a class="nav-link" href="#pricing">Pricing</a>
                            <div className="credbtn">
                                <button type="button" class="btn  logbtn "><b>Login</b></button>
                                <button type="button" class="btn  logbtn"><b>Register</b></button>
                            </div>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}
