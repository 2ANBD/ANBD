import React from "react";
import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "../scss/Style.scss";
import { RightOutlined, HeartOutlined } from "@ant-design/icons";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Section2 = () => {
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
    <>
      <motion.section variants={list} initial="hidden" animate="visible" id="section3" className="product">
        <h2 className="ir_so">나눔을 해보세요</h2>
        <div id="container">
          <div className="inner">
            <div className="product_container">
              <motion.h2 variants={item} className="prooduct_title">
                <span>바</span>꿔서 사용해보세요
              </motion.h2>
              <p>
                <Link className="product_link" to="/products">
                  전체보기
                  <RightOutlined />
                </Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                <SwiperSlide id="productCard1" className="swiper_slide">
                  <Link to="/payment">
                    <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/b/img_b11.jpg')" }}>
                      <span className="heart">
                        <HeartOutlined />
                      </span>
                    </motion.div>
                    <div className="product_text">
                      <ul className="product_text_top">
                        <li className="brand">
                          <span>Nike</span>
                        </li>
                        <li className="name">나이키 숏패딩</li>
                        <li className="price">150,000원</li>
                      </ul>
                      <div className="product_text_bottom">
                        <p className="size">
                          <span>XL</span>
                        </p>
                        <p className="time">4시간 전</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide id="productCard2" className="swiper_slide">
                  <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/b/img_b21.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </motion.div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard3" className="swiper_slide">
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/b/img_b31.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard4" className="swiper_slide">
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/b/img_b41.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard5" className="swiper_slide">
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/b/img_b51.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section variants={list} initial="hidden" animate="visible" id="section4" className="product">
        <h2 className="ir_so">다시 사용해보세요</h2>
        <div id="container">
          <div className="inner">
            <div className="product_container">
              <motion.h2 variants={item} className="prooduct_title">
                <span>다</span>시 사용해보세요
              </motion.h2>
              <p>
                <Link className="product_link" to="/products">
                  전체보기
                  <RightOutlined />
                </Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                <SwiperSlide id="productCard1" className="swiper_slide">
                  <Link to="/payment">
                    <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/d/img_d1.jpg')" }}>
                      <span className="heart">
                        <HeartOutlined />
                      </span>
                    </motion.div>
                    <div className="product_text">
                      <ul className="product_text_top">
                        <li className="brand">
                          <span>Nike</span>
                        </li>
                        <li className="name">나이키 숏패딩</li>
                        <li className="price">150,000원</li>
                      </ul>
                      <div className="product_text_bottom">
                        <p className="size">
                          <span>XL</span>
                        </p>
                        <p className="time">4시간 전</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide id="productCard2" className="swiper_slide">
                  <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/d/img_d21.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </motion.div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard3" className="swiper_slide">
                  <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/d/img_d31.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </motion.div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard4" className="swiper_slide">
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/d/img_d41.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="productCard5" className="swiper_slide">
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/d/img_d51.jpg')" }}>
                    <span className="heart">
                      <HeartOutlined />
                    </span>
                  </div>
                  <div className="product_text">
                    <ul className="product_text_top">
                      <li className="brand">
                        <span>Nike</span>
                      </li>
                      <li className="name">나이키 숏패딩</li>
                      <li className="price">150,000원</li>
                    </ul>
                    <div className="product_text_bottom">
                      <p className="size">
                        <span>XL</span>
                      </p>
                      <p className="time">4시간 전</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Section2;
