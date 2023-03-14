import menu from './img/menu.png';
import logo from './img/main-logo.png';
import React from "react";
import "../scss/Style.scss";

function Header() {
  return (
    <section className="header">
      <div className="header_gnb">
      <img className="header_gnb_menu" src={menu} alt=""></img>
      <img className="header_gnb_logo" src={logo} alt=""></img>
      </div>
    </section>
  );
}
export default Header;
