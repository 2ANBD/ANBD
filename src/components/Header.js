import { Button, Collapse, Drawer } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/Style.scss";
import { BellOutlined, MenuOutlined, LikeOutlined, SmileOutlined, SyncOutlined, SkinOutlined } from "@ant-design/icons";

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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (key) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  return (
    <header id="header">
      <div id="container">
        <div className="inner">
          <motion.div variants={list} initial="hidden" animate="visible" className="content_wrap">
            <motion.div variants={item}>
              <Button size="large" href="https://pf.kakao.com/_tdIxcxj/99360875">
                <BellOutlined />
              </Button>
            </motion.div>

            <Link to="/">
              <motion.img variants={item} src="/images/icons/img_header_logo.png" alt="" className="logo" />
            </Link>

            <motion.div variants={item}>
              {/* 햄버거메뉴 */}
              <div className="btn_nav">
                <Button size="large" onClick={showDrawer}>
                  <MenuOutlined />
                  <br />
                </Button>
                <Drawer title="더보기" placement="right" onClose={onClose} open={open}>
                  <img variants={item} src="/images/icons/img_header_logo.png" alt="" className="logo" style={{ width: "90px", marginBottom: "20px" }} />
                  <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                    <Panel header="로그인" key="1">
                      <Link to="/LoginPage">
                        <Button>로그인 하러가기</Button>
                      </Link>
                    </Panel>
                  </Collapse>
                  <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                    <Panel header="카테고리" key="1">
                      <Link to="/products1">
                        <Button>
                          <LikeOutlined />A : 미개봉 상품 및 A급 물건
                        </Button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/products2">
                        <Button>
                          <SmileOutlined />N : 무료 나눔
                        </Button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/products3">
                        <Button>
                          <SyncOutlined />B : 물물교환
                        </Button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/products4">
                        <Button>
                          <SkinOutlined />D : 사용감있는 중고상품
                        </Button>
                      </Link>
                      <br />
                    </Panel>
                  </Collapse>
                  <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                    <Panel header="소식" key="1">
                      <Button href="https://pf.kakao.com/_tdIxcxj">공지소식</Button>
                      <br />
                    </Panel>
                  </Collapse>
                  <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                    <Panel header="고객센터" key="1">
                      <Button href="https://pf.kakao.com/_tdIxcxj/chat">고객센터 1:1 오픈채팅</Button>
                    </Panel>
                  </Collapse>
                </Drawer>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
export default Header;
