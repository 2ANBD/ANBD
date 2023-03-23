import { Button, Space } from "antd";
import { motion } from "framer-motion";
import React from "react";
// import { Link } from "react-router-dom";
import "../scss/Style.scss";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";

function Header() {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header id="header">
      <div id="container">
        <div className="inner">
          <motion.div variants={list} initial="hidden" animate="visible" className="content_wrap">
            <motion.div variants={item}>
              <Button size="large">
                <BellOutlined />
              </Button>
            </motion.div>
            <motion.img variants={item} src="/images/icons/img_header_logo.png" alt="" className="logo" />
            <motion.div variants={item}>
              <Button size="large">
                <SearchOutlined />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
export default Header;
