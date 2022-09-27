import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/water.jpg";
//import img2 from "./images/education.jpg";
//import img3 from "./images/env.jpg";
import img2 from "./images/road1.jpg";
import img3 from "./images/electricity.jpg";
import img4 from "./images/drainage.jpg";

import "./css_slider.css";

function Imageslider() {
  return (
    <div className=" box ">
      {/* <h3>Welcome to *****e-Complaint*****</h3> */}
      <div>
        {/* <h1>Image slider bootstrap</h1>
        <hr /> */}
        <Carousel>
          <Carousel.Item>
            <h3>Water Supply Department</h3>
            <a href="#">
              <img src={img1} alt="img1" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <h3>Road Department</h3>
            <a href="#">
              <img src={img2} alt="img1" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Electricity Department</h3>

            <a href="#">
              <img src={img3} alt="img1" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Drainage Service Department</h3>
            <a href="#">
              <img src={img4} alt="img1" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Imageslider;
