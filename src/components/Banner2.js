import "../scss/Style.scss";
import React from "react";
import { Carousel } from 'antd';


const Banner2 = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div id="banner_content">
    <div id="container">
      <div className="inner1">
    <Carousel afterChange={onChange}>
      <div>
        <a href="">
          <h3 className="contentStyle5"> </h3>
        </a>
      </div>
      <a href="">
        <div>
          <h3 className="contentStyle6"> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle7"> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle8"> </h3>
        </div>
      </a>
    </Carousel>
    </div>
    </div>
  </div>
  );
};
export default Banner2;
