import React from "react";
import "../scss/Style.scss";
import { Button, Drawer } from "antd";
import { HomeOutlined, UploadOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from 'react';

function BottomNav() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="nav_bottom">
      <div id="container">
        <div className="inner">
          <div className="nav_btns">
            <div className="btn_nav">
              <Button>
                <HomeOutlined />
                <br />홈
              </Button>
            </div>

            <div className="btn_nav">
              <Button>
                <UserOutlined /><br />로그인
              </Button>
            </div>
            <div className="btn_nav">
              <Button>
                <UploadOutlined />
                <br />내물건팔기
              </Button>
            </div>

            <div className="btn_nav">
              <Button onClick={showDrawer}>
                <MenuOutlined />
                <br />더보기
              </Button>
              <Drawer title="더보기" placement="bottom" onClose={onClose} open={open}>
                <p>로그인 하러가기</p>
                <p>소식</p>
                <p>고객센터</p>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
