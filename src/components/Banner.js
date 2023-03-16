import React from "react";
import "../scss/Style.scss";
import { Carousel } from 'antd';


const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
  <div id="banner_content">
    <div id="container">
      <div className="inner1">
    <Carousel afterChange={onChange} className= "Carousel">
      <div>
        <a href="">
          <h3 className="contentStyle1" style={{backgroundImage: "url('../images/banner/Banner_img_1.png')"}}> </h3>
        </a>
      </div>
      <a href="">
        <div>
          <h3 className="contentStyle2" style={{backgroundImage: "url('../images/banner/Banner_img_2.png')"}}> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle3" style={{backgroundImage: "url('../images/banner/Banner_img_3.png')"}}> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle4" style={{backgroundImage: "url('../images/banner/Banner_img_4.png')"}}> </h3>
        </div>
      </a>
    </Carousel>
    </div>
    </div>
  </div>
  );
};
export default Banner;
