import React from "react";
import "../scss/Style.scss";
import { FloatButton } from "antd";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";

/* 플로팅버튼 */
function FloatBtn() {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          bottom: 90,
          right: 25,
        }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </>
  );
}
export default FloatBtn;
