import React from "react";
import "../scss/Style.scss";
import { HomeOutlined, UploadOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

function BottomNav() {
  return (
    <nav className="nav_bottom">
      <div id="container">
        <div className="inner">
          <div className="nav_btns">
            <div className="btn_nav">
              <HomeOutlined />
              <p>홈</p>
            </div>
            <div className="btn_nav">
              <UploadOutlined />
              <p>내물건팔기</p>
            </div>
            <div className="btn_nav">
              <UserOutlined />
              <p>나의정보</p>
            </div>
            <div className="btn_nav">
              <MenuOutlined />
              <p>더보기</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
