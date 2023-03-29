import React, { useState } from "react";
import { Form, Divider, Upload, message, Input, InputNumber, Button, Select } from "antd";
import "../scss/Style.scss";
import { motion } from "framer-motion";

import axios from "axios";
import { API_URL } from "../config/constants";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };
  const { TextArea } = Input;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const onFinish = (val) => {
    console.log(val);

    axios
      .post(`${API_URL}/products`, {
        category: val.category,
        name: val.name,
        brand: val.brand,
        size: val.size,
        price: val.price,
        description: val.description,
        imageUrl: imageUrl,
        seller: val.seller,
      })
      .then((result) => {
        // console.log(result);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        message.error(`error!`);
      });
  };
  const onChangeImage = function (info) {
    if (info.file.status === "uploading") {
      return;
    } else if (info.file.status === "done") {
      const reponse = info.file.response;
      // const imageUrl = reponse.image;
      const imageUrl = reponse.imageUrl; /* 0324변경 */
      console.log(imageUrl);
      setImageUrl(imageUrl);
    }
  };
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="upload-container">
      <div id="container">
        <motion.div variants={list} initial="hidden" animate="visible" className="inner">
          <motion.Form variants={item} name="uploadForm" onFinish={onFinish}>
            {/* 이미지업로드 */}
            <Form.Item name="upload" valuePropName="image">
              <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
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
            <motion.div variants={item}>
            <Form.Item className="category" label={<span className="upload_label">상품 카테고리</span>} name="category" rules={[{ required: true, message: "상품 카테고리는 필수 선택 사항입니다." }]}>
              {/* category */}

              <Select
                showSearch
                placeholder="상품 카테고리를 선택해주세요"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                options={[
                  { value: "A", label: "A(미개봉 상품 및 A급 물건)" },
                  { value: "N", label: "N(무료 나눔)" },
                ]}
              />
            </Form.Item>
            </motion.div>
            <Divider></Divider>

            {/* 상품명*/}
            <motion.div variants={item}>
            <Form.Item label={<span className="upload_label">상품명</span>} name="name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
              <Input className="upload_name" placeholder="상품명을 입력해주세요" size="large" />
            </Form.Item>
            <Divider></Divider>
            </motion.div>
            {/* 브랜드 */}
            <motion.div variants={item}>
            <Form.Item label={<span className="upload_label">브랜드명</span>} name="brand">
              <Input className="upload_name" placeholder="브랜드명을 입력해주세요" size="large" />
            </Form.Item>
            <Divider></Divider>
            </motion.div>
            <motion.div variants={item}>
            {/* 사이즈 */}
            <Form.Item label={<span className="upload_size">사이즈</span>} name="size">
              <Input className="upload_size" placeholder="사이즈를 입력해주세요" size="large" />
            </Form.Item>
            <Divider></Divider>
            </motion.div>
            {/* 상품가격 */}
            <motion.div variants={item}>
            <Form.Item label={<span className="upload_price">판매가</span>} name="price">
              {/* err initioalvalue=0 */}
              <InputNumber className="upload_price" size="large" min={0} defaultValue={0} />
            </Form.Item>
            <Divider></Divider>
            </motion.div>
            {/* 상품설명 */}
            <Form.Item label={<span className="upload-label">상품설명</span>} name="description" rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
              <TextArea size="large" id="description" showCount maxLength={300} placeholder="상품설명을 작성해주세요"></TextArea>
            </Form.Item>
            <Divider></Divider>
            <motion.div variants={item}>
            {/* 판매자명 */}
            <Form.Item label={<span className="upload-seller">판매자명</span>} name="seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
              <Input className="upload-name" placeholder="판매자명을 입력해주세요" size="large" />
            </Form.Item>
            <Divider></Divider>
            </motion.div>
            <Form.Item>
              {/* button과 use연결 */}
              {contextHolder}
              <motion.div variants={item}>
              <Button id="submit-button" htmlType="submit" onClick={info}>
                상품등록하기
              </Button>
              </motion.div>
            </Form.Item>
          </motion.Form>
        </motion.div>
      </div>
    </div>
  );
};
export default UploadPage;
