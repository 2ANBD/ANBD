import { Button, Space } from "antd";
import React from "react";
// import { Link } from "react-router-dom";
import "../scss/Style.scss";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header id="header">
      <div id="container">
        <div className="inner">
          <div className="content_wrap">
            <Button size="large">
              <BellOutlined />
            </Button>
            <img src="/images/icons/img_header_logo.png" alt="" className="logo" />
            <Button size="large">
              <SearchOutlined />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
