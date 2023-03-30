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
            <button
              class="btn category_btn category_btn_ani"
              onClick={() => {
                navigate("/UploadPage");
              }}
            >
              # 미개봉상품 <br /> # 무료나눔<br></br>
            </button>
            <button
              class="btn category_btn category_btn_ani"
              onClick={() => {
                navigate("/UploadPage2");
              }}
            >
              # 중고상품 <br /> # 물물교환
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
