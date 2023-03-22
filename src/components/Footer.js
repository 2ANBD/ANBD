import React from "react";
import "../scss/Style.scss";
import { Button, Space } from "antd";
import { FacebookFilled, InstagramOutlined, TwitterOutlined, GoogleOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <>
      <footer>
        <div id="container">
          <div className="inner">
            <img src="/images/icons/img_footer_logo.png" alt="" className="logo" />
            <p className="info">
              (주)ANBD | 대표: 호문섭건 | 개인정보관리자: 기명섭
              <br />
              사업자등록번호: 123-45-78900
              <br />
              통신판매업신고번호: 2023-서울강남-12345호
              <br />
              주소: 서울 강남구 강남대로 123, 4층 (리액트빌딩)
              <br />
              대표번호: 1234-5678 ㅣ 메일: was7894@gmail.com
            </p>
            <Space size={30}>
              <Button ghost size="middle" shape="circle" icon={<FacebookFilled />}></Button>
              <Button ghost size="middle" shape="circle" icon={<InstagramOutlined />}></Button>
              <Button ghost size="middle" shape="circle" icon={<TwitterOutlined />}></Button>
              <Button ghost size="middle" shape="circle" icon={<GoogleOutlined />}></Button>
            </Space>
            <p className="copyright">Copyrightⓒ ANBD Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
