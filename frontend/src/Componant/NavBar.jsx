import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/NavBar.css";
import logo from "../Images/logoo.png";

const NavBar = () => {
    return (
        <div>
            <ul className="nav justify-content-center bg-dark">
                <div className="justify-content-center">
                    <li>
                        <h1 className="head"><img className="rotateImage" src={logo} /> CodeFlow</h1>
                    </li>
                    <h4 className="tagline">DIGITAL SOLUTIONS AT ITS FINEST </h4>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;