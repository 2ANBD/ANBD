import React from "react";
import Banner from "./Banner";
import Section1 from "./Section1";
import Banner2 from "./Banner2";
import Section2 from "./Section2";
import "../scss/Style.scss";


function MainPage() {
  return (
    <>
      <Banner />
      <Section1 />
      <Banner2 />
      <Section2 />
    </>
  );
}
export default MainPage;