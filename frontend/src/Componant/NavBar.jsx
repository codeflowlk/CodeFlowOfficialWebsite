import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/NavBar.css";
import logo from "../Images/logoo.png";
import SlideBanner from './SlideBanner';

class NavBar extends Component {
    render() {
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
                <SlideBanner/>
            </div>
        );
    }
}

export default NavBar;
