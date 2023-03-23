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

const Section1 = () => {
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
      <section id="section1" className="product">
        <h2 className="ir_so">아껴쓴 물건을 팔아보세요</h2>
        <div id="container">
          <div className="inner">
            <motion.div variants={list} initial="hidden" animate="visible" className="product_container">
              <motion.h2 variants={item} className="prooduct_title">
                <span>아</span>껴쓴 물건을 팔아보세요
              </motion.h2>
              <p>
                <motion.Link variants={item} className="product_link" to="/products">
                  전체보기
                  <RightOutlined />
                </motion.Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                <SwiperSlide id="productCard1" className="swiper_slide">
                  <Link to="/payment">
                    <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/a/img_a11.jpg')" }}>
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
                  <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/a/img_a21.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/a/img_a31.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/a/img_a41.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/a/img_a41.jpg')" }}>
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
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section variants={list} initial="hidden" animate="visible" id="section2" className="product">
        <h2 className="ir_so">나눔을 해보세요</h2>
        <div id="container">
          <div className="inner">
            <div className="product_container">
              <motion.h2 variants={item} className="prooduct_title">
                <span>나</span>눔을 해보세요
              </motion.h2>
              <p>
                <motion.Link className="product_link" to="/products">
                  전체보기
                  <RightOutlined />
                </motion.Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                <SwiperSlide id="productCard1" className="swiper_slide">
                  <Link to="/payment">
                    <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/n/img_n11.jpg')" }}>
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
                  <motion.div variants={item} className="img_product" style={{ backgroundImage: "url('../images/products/n/img_n21.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/n/img_n31.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/n/img_n41.jpg')" }}>
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
                  <div className="img_product" style={{ backgroundImage: "url('../images/products/n/img_n51.jpg')" }}>
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

export default Section1;
