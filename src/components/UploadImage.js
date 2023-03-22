import React from "react";
import "../scss/Style.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Form,Select,Input,Button, Modal, Upload, Divider, InputNumber } from "antd";
import { useState } from "react";
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
const UploadImage = () => {
  const onFinish = (val) => {
    console.log(val);
  };
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
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
    <div id="upload-container">
      <div id="container">
      <Divider />
      <div className="inner">
      <Form name="uploadForm" onFinish={onFinish}>
      <Form.Item
        label={<span className="upload-label">상품 이미지</span>}
        name="product-name"
        rules={[{ required: true, message: "상품 이미지는 필수 입력 사항입니다." }]}
      ></Form.Item>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
      </Modal>
      <Divider />
      <Form.Item
            label={<span className="upload-label">상품 브랜드</span>}
            name="product-name"
            rules={[
              { required: true, message: "상품 브랜드는 필수 입력 사항입니다." }
            ]}
          >
            <Input
              className="upload-name"
              placeholder="상품 브랜드를 입력해주세요"
              size="large"
            />
      </Form.Item>
      <Divider />
      <Form.Item
      label={<span className="upload-label">상품 카테고리</span>}
      name="Category"
      rules={[{ required: true, message: "상품 카테고리는 필수 선택 사항입니다." }]}
    ></Form.Item>
    
    <Select
      showSearch
      placeholder="상품 카테고리를 선택해주세요"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: "A",
          label: "A(아껴쓴 물건을 팔아보세요)"
        },
        {
          value: "N",
          label: "N(나눔을 해보세요)"
        },
        {
          value: "B",
          label: "B(바꿔서 사용해보세요)"
        },
        {
          value: "D",
          label: "D(다시 사용해보세요)"
        }
      ]}
    />
        
          <Divider></Divider>
          <Form.Item
            label={<span className="upload-label">상품명</span>}
            name="product-name"
            rules={[
              { required: true, message: "상품명은 필수 입력 사항입니다." }
            ]}
          >
            <Input
              className="upload-name"
              placeholder="상품명을 입력해주세요"
              size="large"
            />
          </Form.Item>
          <Divider></Divider>
          <Form.Item
            label={<span className="upload-price">판매가</span>}
            name="product-price"
            rules={[
              { required: true, message: "판매가는 필수 입력 사항입니다." }
            ]}
          >
            <InputNumber
              className="upload-price"
              size="large"
              min={3000}
              defaultValue={1000}
            />
          </Form.Item>
          <Divider></Divider>
          <Form.Item
            label={<span className="upload-label">상품설명</span>}
            name="product-description"
            rules={[
              { required: true, message: "상품설명은 필수 입력 사항입니다." }
            ]}
          >
            <TextArea
              size="large"
              id="product-description"
              showCount
              maxLength={1000}
              placeholder="상품설명을 작성해주세요"
            ></TextArea>
          </Form.Item>
          <Divider></Divider>
          <Form.Item>
            <Button id="submit-button" htmlType="submit">
              상품등록하기
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
      </div>
    </>
  );
};
export default UploadImage;
