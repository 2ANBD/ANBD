import React from "react";

import { motion } from "framer-motion";
import "../scss/Style.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined, UploadOutlined, CompassOutlined, LoginOutlined } from "@ant-design/icons";

import "swiper/css";
import "swiper/css/free-mode";

function BottomNav() {
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
    <nav className="nav_bottom">
      <div id="container">
        <motion.div variants={list} initial="hidden" animate="visible" className="inner">
          <motion.div variants={item} className="nav_btns">
            <div className="btn_nav">
              <Link to={`/`}>
                <Button>
                  <HomeOutlined />
                  <br />홈
                </Button>
              </Link>
            </div>
            <div className="btn_nav">
              <Link className="map-link" to={`/MapPage`}>
                <Button>
                  <CompassOutlined />
                  <br />
                  장소찾기
                </Button>
              </Link>
            </div>
            <div className="btn_nav">
              <Link className="upload-link" to={`/Category`}>
                <Button>
                  <UploadOutlined />
                  <br />
                  내물건팔기
                </Button>
              </Link>
            </div>

            <div className="btn_nav">
              <Link className="login-link" to={`/LoginPage`}>
                <Button>
                  <LoginOutlined />
                  <br />
                  로그인
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}

export default BottomNav;
