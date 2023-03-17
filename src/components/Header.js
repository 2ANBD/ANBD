// import menu from './img/menu.png';
// import logo from './img/main-logo.png';
// import alarm from './img/alarm.png';
import React from "react";
import "../scss/Style.scss";
import {BellOutlined , SearchOutlined} from "@ant-design/icons";

function Header() {
  return (
    <header id="header">
      <div id="container">
        <div className="inner">
          <div className="content_wrap">
            <BellOutlined />
            <img src="/images/icons/img_header_logo.png" alt=""className="logo"/>
            <SearchOutlined />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;