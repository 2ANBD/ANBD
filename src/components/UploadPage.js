import React, { useState } from "react";
import { Form, Divider, Upload } from "antd";
import "../scss/Style.scss";
import "./UploadPage.css";
import axios from "axios";
import { API_URL } from "../config/constants";
const UploadPage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeImage = function (info) {
    if (info.file.status === "uploading") {
      return;
    } else if (info.file.status === "done") {
      const reponse = info.file.response;
      const imageUrl = reponse.imageUrl;
      console.log(imageUrl);
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form.Item name="upload" valuePropName="image">
        {/* 모든것들은 form item 안에 있어야 한다. */}
        <Upload name="image" action="http://localhost:8080/image" listType="picture" showUploadList={false} onChange={onChangeImage}>
          {imageUrl ? (
            <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
          ) : (
            <div id="upload-img-placeholder">
              <img src="/images/icons/camera.png" alt="" />
              <span>이미지를 업로드 해주세요</span>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Divider></Divider>
    </div>
  );
};
export default UploadPage;
