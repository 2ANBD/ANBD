import React from "react";
import "../scss/Style.scss";
import UploadImage from "./UploadPage/UploadImage.js";
import UploadDemo from "./UploadPage/UploadDemo.js";
import UploadContents from "./UploadPage/UploadContents.js";

function UploadPage() {
    return (
     <>
      <div className="wrap">
        <div id="container">
          <UploadImage />
          <UploadDemo />
          <UploadContents />
        </div>
      </div>
     </>
    );
  }
  export default UploadPage;