import React from "react";
import { Form, Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const UploadDemo = () => (
  <>
    <Form.Item
      label={<span className="upload-label">상품 카테고리</span>}
      name="Category"
      rules={[{ required: true, message: "상품명은 필수 입력 사항입니다." }]}
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
          label: "A"
        },
        {
          value: "N",
          label: "N"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "D",
          label: "D"
        }
      ]}
    />
  </>
);
export default UploadDemo;
