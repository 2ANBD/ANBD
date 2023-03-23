import React from "react";
import "../scss/Style.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Form,Select,Input,Button, Modal, Upload, Divider, InputNumber,message } from "antd";
import { useState } from "react";
import { API_URL } from "../config/constants";



const { TextArea } = Input;
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
const UploadImage = () => {
  const onFinish = (val) => {
    console.log(val);
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
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
    <>
    <div id="upload-container">
      <div id="container">
        <Divider />
          <div className="inner">
            <Form.Item name="upload" valuePropName="image">
        {/* 모든것들은 form item 안에 있어야 한다. */}
        <Upload name="image" action="http://localhost:8080/image" listType="picture" showUploadList={true} onChange={onChangeImage}>
          {imageUrl ? (<img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />) 
          : (
            <div id="upload-img-placeholder">
              <img src="/images/icons/camera.png" alt="" />
              <span>이미지를 업로드 해주세요</span>
            </div>
            )}
        </Upload>
      </Form.Item>      
            <Form className="inner-form" name="uploadForm" onFinish={onFinish}>
                  
                <Divider />

              <Form.Item label={<span className="upload-label">상품 브랜드</span>} name="product-name" rules={[ { required: true, message: "상품 브랜드는 필수 입력 사항입니다." }]}><br/>
                <Input className="brand-name" placeholder="상품 브랜드를 입력해주세요" size="large"/>
              </Form.Item>{/* brand */}

                <Divider />

              <Form.Item className="category" label={<span className="upload-label">상품 카테고리</span>} name="Category"rules={[{ required: true, message: "상품 카테고리는 필수 선택 사항입니다." }]}>
              </Form.Item>{/* category */}

              <Select showSearch placeholder="상품 카테고리를 선택해주세요" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())} options={[{value: "A", label: "A(미개봉 상품 및 A급 물건)"},{ value: "N", label: "N(무료 나눔)"}, { value: "B", label: "B(물물교환)"},{ value: "D", label: "D(사용감있는 중고상품)"}]} />

                <Divider></Divider>

              <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}>
                <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large"/>
              </Form.Item>{/* name */}

                <Divider></Divider>

              <Form.Item label={<span className="upload-label">판매가</span>} name="product-price" rules={[{ required: true, message: "판매가는 필수 입력 사항입니다." }]}>
                <InputNumber className="upload-price" size="large" min={3000} defaultValue={1000}/>
              </Form.Item>{/*price */}

                <Divider></Divider>

              <Form.Item label={<span className="upload-label">상품설명</span>} name="product-description" rules={[{ required: true, message: "상품설명은 필수 입력 사항입니다." }]}>
                <TextArea size="large" id="product-description" showCount maxLength={1000} placeholder="상품설명을 작성해주세요">
                </TextArea>
              </Form.Item>{/*explain */}

                <Divider></Divider>

              <Form.Item>
                <Button id="submit-button" htmlType="submit">상품등록하기
                </Button>
              </Form.Item>{/*commit */}

            </Form>
          </div>
      </div>
    </div>
    </>
  );
};
export default UploadImage;