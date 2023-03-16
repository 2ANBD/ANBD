import menu from './img/menu.png';
import logo from './img/main-logo.png';
import alarm from './img/alarm.png';
import logo from './img/menu.png';
import React from "react";
import "../scss/Style.scss";

function Header() {
  return (
    <section id="header">
      <div id="container">
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
        <input type="text" value="원하시는 상품을 검색해보세요"></input>
      </div>
      </div>
    </section>
  );
}
export default Header;