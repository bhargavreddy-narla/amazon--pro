import React, { useState } from "react";
import "./CustomCarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import carouselimg1 from "../Images/carouselimg1.jpg";
import carouselimg2 from "../Images/carouselimg2.jpg";
import carouselimg3 from "../Images/carouselimg3.jpg";

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="customCarousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselimg1}
                  alt="First slide"
                  style={{ height: "500px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselimg2}
                  alt="Second slide"
                  style={{ height: "500px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carouselimg3}
                  alt="Third slide"
                  style={{ height: "500px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
