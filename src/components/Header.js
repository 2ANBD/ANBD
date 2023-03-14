import logo from './img/menu.png';
import React from "react";
import "../scss/Style.scss";

function Header() {
  return (
    <section className="header">
      <div className="header_gnb">
      <img calssName="header_gnb_menu" src={logo} alt=""></img>
      </div>
    </section>
  );
}
export default Header;
