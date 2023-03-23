import React, { useState } from "react";
import { Form, Divider, Upload, message, Input, InputNumber, Button, Select } from "antd";
import "../scss/Style.scss";
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
        /* name: val.name,
        description: val.description,
        price: val.price,
        seller: val.seller,
        imageUrl: imageUrl, */
        product_id: val.category,
        name: val.name,
        brand: val.brand,
        kind: val.size,
        price: val.price,
        description: val.description,
        image: imageUrl,
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
      const imageUrl = reponse.imageUrl;
      console.log(imageUrl);
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="uploadForm" onFinish={onFinish}>
        {/* 이미지업로드 */}
        <Form.Item name="upload" valuePropName="image">
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
        {/* 카테고리 */}
        {/* <Form.Item label={<span className="upload_label">카테고리</span>} name="category" rules={[{ required: true, message: "카테고리는 필수 선택 사항입니다." }]}>
          <Input className="upload_category" placeholder="카테고리를 선택하세요" size="large" />
        </Form.Item> */}

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
              { value: "B", label: "B(물물교환)" },
              { value: "D", label: "D(사용감있는 중고상품)" },
            ]}
          />
        </Form.Item>
        <Divider></Divider>

        {/* 상품명*/}
        <Form.Item label={<span className="upload_label">상품명</span>} name="name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
          <Input className="upload_name" placeholder="상품명을 입력해주세요" size="large" />
        </Form.Item>
        <Divider></Divider>
        {/* 브랜드 */}
        <Form.Item label={<span className="upload_label">브랜드명</span>} name="brand" rules={[{ required: true, message: "브랜드명은 필수 입력 사항입니다." }]}>
          <Input className="upload_name" placeholder="브랜드명을 입력해주세요" size="large" />
        </Form.Item>
        <Divider></Divider>
        {/* 사이즈 */}
        {/* <Form.Item label={<span className="upload_label">사이즈</span>} name="size" rules={[{ required: true, message: "사이즈는 필수 입력 사항입니다." }]}>
          <Input className="upload_name" placeholder="사이즈를 입력해주세요" size="large" />
        </Form.Item> */}

        <Form.Item className="upload_size" label={<span className="upload-label">사이즈</span>} name="size" /* rules={[{ required: true, message: "상품 카테고리는 필수 선택 사항입니다." }]} */>
          {/* category */}

          <Select
            showSearch
            placeholder="상품 카테고리를 선택해주세요"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
            options={[
              { value: "S", label: "S" },
              { value: "M", label: "M" },
              { value: "L", label: "L" },
              { value: "XL", label: "XL" },
            ]}
          />
        </Form.Item>
        <Divider></Divider>
        {/* 상품가격 */}
        <Form.Item label={<span className="upload_price">판매가</span>} name="price" rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]}>
          {/* err initioalvalue=0 */}
          <InputNumber className="upload_price" size="large" min={0} defaultValue={0} />
        </Form.Item>
        <Divider></Divider>
        {/* 상품설명 */}
        <Form.Item label={<span className="upload-label">상품설명</span>} name="description" rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
          <TextArea size="large" id="description" showCount maxLength={300} placeholder="상품설명을 작성해주세요"></TextArea>
        </Form.Item>
        <Divider></Divider>
        {/* 판매자명 */}
        <Form.Item label={<span className="upload-seller">판매자명</span>} name="seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다." }]}>
          <Input className="upload-name" placeholder="판매자명을 입력해주세요" size="large" />
          {/*   <TextArea size="large" id="description" showCount maxLength={300} placeholder="판매자명을 작성해주세요"></TextArea> */}
        </Form.Item>
        <Divider></Divider>
        <Form.Item>
          {/* button과 use연결 */}
          {contextHolder}
          <Button id="submit-button" htmlType="submit" onClick={info}>
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UploadPage;
