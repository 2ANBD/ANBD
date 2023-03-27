import React from "react";
import Banner from "./Banner";
import Section1 from "./Section1";
import Banner2 from "./Banner2";
import Section2 from "./Section2";

import "../scss/Style.scss";

/* test */
import Testsection from "./Testsection";
import Testsection2 from "./Testsection2";
import Testsection3 from "./Testsection3";
import Testsection4 from "./Testsection4";

function MainPage() {
  return (
    <>
      <Banner />
      <Section1 />
      <Banner2 />
      <Section2 />
      <Testsection />
      <Testsection2 />
      <Testsection3 />
      <Testsection4 />
    </>
  );
}

export default MainPage;
