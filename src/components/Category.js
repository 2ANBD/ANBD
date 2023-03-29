import "../scss/Style.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
    <div id="container">
      <div className="inner">                    
        <div className="content_box">
      <h1>업로드할 카테고리를 선택하세요</h1>
      <button  class="category_btn"
        onClick={() => {
          navigate("/UploadPage");
        }}
      >
        미개봉상품 or A급상품 <br/><br/> 무료나눔
      </button>
      <button class="category_btn"
        onClick={() => {
          navigate("/UploadPage2");
        }}
      >
        사용감 있는 중고상품<br/><br/> 물물교환 
      </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Category;
