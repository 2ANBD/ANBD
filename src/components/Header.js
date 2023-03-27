import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../scss/Style.scss";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header id="header">
      <div id="container">
        <div className="inner">
          <div className="content_wrap">
            <Button size="large">
              <BellOutlined />
            </Button>
            <Link to="/">
              <img src="/images/icons/img_header_logo.png" alt="" className="logo" />
            </Link>
              <Button size="large">
              <UserOutlined />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
