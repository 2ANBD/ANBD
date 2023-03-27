import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>업로드할 카테고리를 선택하세요</h1>
      <Button
        size="large"
        onClick={() => {
          navigate("/UploadPage");
        }}
      >
        미개봉상품 or A급상품
      </Button>
      <br />

      <Button
        size="large"
        onClick={() => {
          navigate("/UploadPage2");
        }}
      >
        무료나눔
      </Button>
      <br />
      <Button
        size="large"
        onClick={() => {
          navigate("/UploadPage3");
        }}
      >
        물물교환
      </Button>
      <br />
      <Button
        size="large"
        onClick={() => {
          navigate("/UploadPage4");
        }}
      >
        사용감 있는 중고상품
      </Button>
    </>
  );
};

export default Category;
