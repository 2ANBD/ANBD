import menu from './img/menu.png';
import logo from './img/main-logo.png';
import alarm from './img/alarm.png';
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "../scss/Style.scss";

function Header() {
  return (
    <section className="header">
      <div className="header_gnb">
      <div className="header_gnb_menu">
        <img src={menu} alt=""></img>
      </div>
      <div className="header_gnb_logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="header_gnb_alarm">
      <img src={alarm} alt=""></img>
       </div>
      </div>
      <div className="header_search">
        <input type="search" value="원하시는 상품을 검색해보세요"></input>
      </div>
    </section>
  );
}
export default Header;

