import React from "react";
import "../scss/Style.scss";
import { Link } from "react-router-dom";
import { Button, Drawer,Collapse, Input, Space, Card} from "antd";
import { HomeOutlined, UploadOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";


function BottomNav() {
  const { Search } = Input;
  const { Meta } = Card;
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('small');

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
  const text1 = `미개봉 상품 및 A급 물건`
  const text2 = `무료 나눔`
  const text3 = `물물교환`
  const text4 = `사용감있는 중고상품`

  return (
    <nav className="nav_bottom">
      <div id="container">
        <div className="inner">
          <div className="nav_btns">
            <div className="btn_nav">
              <Link to={`/`}>
                <Button>
                  <HomeOutlined />
                  <br />홈
                </Button>
              </Link>
            </div>
            <div className="btn_nav">
              <Link className="login-link" to={`/LoginPage`}>
                <Button>
                  <UserOutlined />
                  <br />
                  로그인
                </Button>
              </Link>
            </div>
            <div className="btn_nav">
              <Link className="upload-link" to={`/UploadImage`}>
                <Button>
                  <UploadOutlined />
                  <br />
                  내물건팔기
                </Button>
              </Link>
            </div>
            <div className="btn_nav">
              <Button onClick={showDrawer}>
                <MenuOutlined />
                <br />
                더보기
              </Button>
              <Drawer title="더보기" placement="bottom" onClose={onClose} open={open}>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                  <Panel header="상품카테고리" key="1" >
                    <Link to="/products">
                      <Button>A : 미개봉 상품 및 A급 물건</Button>
                    </Link>
                  <br/>
                  <br/>
                    <Link to="/products">
                      <Button>N : 무료 나눔</Button>
                    </Link>
                  <br/>
                  <br/>
                    <Link to="/products">
                      <Button>B : 물물교환</Button>
                    </Link>
                  <br/>
                  <br/>
                    <Link to="/products">
                      <Button>D : 사용감있는 중고상품</Button>
                    </Link>
                  <br/>
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                  <Panel header="소식" key="1" >
                    <Link to="/products">
                      <Button>제휴사 이벤트</Button>
                    </Link>
                  <br/>
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                  <Panel header="고객센터" key="2" >
                    <Button>고객센터 오픈채팅</Button>
                    <br/>
                  <br/>
                    <Button>자주 묻는 질문</Button>
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="최근 본 상품" key="2" >
                  <div className="search_recent">
                <Card hoverable style={{   width: 200, }} cover={<img alt="example" src="../../public/images/products/a/img_a11.jpg" />}>
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{   width: 200, }} cover={<img alt="example" src="../../public/images/products/a/img_a11.jpg" />}>
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
                <div className="search_recent">
                <Card hoverable style={{   width: 200, }} cover={<img alt="example" src="../../public/images/products/a/img_a11.jpg" />}>
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{   width: 200, }} cover={<img alt="example" src="../../public/images/products/a/img_a11.jpg" />}>
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
                </Panel>
                </Collapse>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
