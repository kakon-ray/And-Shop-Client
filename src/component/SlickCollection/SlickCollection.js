import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./SlickCollection.css";
import SlickCollectionItem from "./SlickCollectionItem";

const SlickCollection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid py-5" id="slick-collection">
      <div className="text-center">
        <h1>TODAY'S DEAL</h1>
        <p>See What Everyone Is Shopping from Andshop E-Commerce Today</p>
      </div>
      <Slider {...settings}>
        <div>
          <SlickCollectionItem />
        </div>
        <div>
          <SlickCollectionItem />
        </div>
        <div>
          <SlickCollectionItem />
        </div>
      </Slider>
    </div>
  );
};

export default SlickCollection;