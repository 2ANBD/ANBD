import React from "react";
import "../scss/Style.scss";
import { Carousel } from "antd";
// const contentStyle = {
//   margin: "0px",
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79"
// };
const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 className="contentStyle">1</h3>
      </div>
      <div>
        <h3 className="contentStyle">1</h3>
      </div>
      <div>
        <h3 className="contentStyle"></h3>
      </div>
      <div>
        <h3 className="contentStyle"></h3>
      </div>
    </Carousel>
  );
};
export default Banner;
