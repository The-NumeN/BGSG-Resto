import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../../Assets/c7.png";
import image2 from "../../Assets/c2.png";
import image3 from "../../Assets/cu1.png";
import image4 from "../../Assets/c4.png";

export const Home = () => {
  return (
    <div className="all">
      <div className="left">
        <p>testx</p>
      </div>
      <div className="right">
        <br />
        <br />
        <br />
        <Carousel>
          <Carousel.Item>
            <img
              className="image1"
              src={image1}
              height="50%"
              width="50%"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Here you can see the first slide</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image2"
              src={image2}
              height="50%"
              width="50%"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Here you can see the second slide</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="image3"
              src={image3}
              height="50%"
              width="50%"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Here you can see the third slide</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image4"
              src={image4}
              height="50%"
              width="50%"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <p>Here you can see the third slide</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
