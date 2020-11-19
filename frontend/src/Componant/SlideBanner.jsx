import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage1 from "../Images/banner1.png";
import bannerImage2 from "../Images/banner2.png";
import bannerImage3 from "../Images/banner3.png";
import {Jumbotron , Button ,Carousel} from 'react-bootstrap'
import "../CSS/SlideBanner.css";

class SlideBanner extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bannerImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {bannerImage2}
                alt="Third slide"
              />
          
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bannerImage3}
                alt="Third slide"
              />
          
            
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default SlideBanner;