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
      <div className="inner">
    <Carousel afterChange={onChange}>
      <div>
        <a href="">
          <img className="contentStyle5" src='../images/banner/Banner_img_5.png'/>
        </a>
      </div>
      <a href="">
        <div>
          <img className="contentStyle6" src='../images/banner/Banner_img_6.png'/>
        </div>
      </a>
      <a href="">
        <div>
          <img className="contentStyle7" src='../images/banner/Banner_img_7.png'/>
        </div>
      </a>
      <a href="">
        <div>
          <img className="contentStyle8" src='../images/banner/Banner_img_8.png'/>
        </div>
      </a>
    </Carousel>
    </div>
    </div>
  </div>
  );
};
export default Banner2;
