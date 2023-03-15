import React from "react";
import "../scss/Style.scss";
import { Carousel } from 'antd';


const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div id="container">
          <div className="banner_content">
    <Carousel afterChange={onChange}>
      <div>
        <a href="">
          <h3 className="contentStyle1"> </h3>
        </a>
      </div>
      <a href="">
        <div>
          <h3 className="contentStyle2"> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle3"> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle4"> </h3>
        </div>
      </a>
    </Carousel>
    </div>
    </div>
  );
};
export default Banner;
