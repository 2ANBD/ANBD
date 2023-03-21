import React from "react";
// import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
import "../scss/Style.scss";
import { RightOutlined, HeartOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Section2 = () => {
    return (
        <>
            <section id="section3" className="product">
                <h2 className="ir_so">나눔을 해보세요</h2>
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <h2 className="prooduct_title"><span>바</span>꿔서 사용해보세요</h2>
                            <Link className="product_link" to="/products">
                                <p>전체보기<RightOutlined /></p>
                            </Link>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_slide_wrap"
                            >
                                <SwiperSlide id="productCard1" className="swiper_slide">
                                    <Link to="/payment">
                                        <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                            <span className="heart"><HeartOutlined /></span>
                                        </div>
                                        <div className="product_text">
                                            <ul className="product_text_top">
                                                <li className="brand"><span>Nike</span></li>
                                                <li className="name">나이키 숏패딩</li>
                                                <li className="price">150,000원</li>
                                            </ul>
                                            <div className="product_text_bottom">
                                                <p className="size"><span>XL</span></p>
                                                <p className="time">4시간 전</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide id="productCard2" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b21.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard3" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b31.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard4" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b41.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard5" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b51.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section4" className="product">
                <h2 className="ir_so">다시 사용해보세요</h2>
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <h2 className="prooduct_title"><span>다</span>시 사용해보세요</h2>
                            <Link className="product_link" to="/products">
                                <p>전체보기<RightOutlined /></p>
                            </Link>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_slide_wrap"
                            >
                                <SwiperSlide id="productCard1" className="swiper_slide">
                                    <Link to="/payment">
                                        <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                            <span className="heart"><HeartOutlined /></span>
                                        </div>
                                        <div className="product_text">
                                            <ul className="product_text_top">
                                                <li className="brand"><span>Nike</span></li>
                                                <li className="name">나이키 숏패딩</li>
                                                <li className="price">150,000원</li>
                                            </ul>
                                            <div className="product_text_bottom">
                                                <p className="size"><span>XL</span></p>
                                                <p className="time">4시간 전</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide id="productCard2" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d21.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard3" className="swiper_slide">                             
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d31.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard4" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d41.jpg')"}}>
                                        <span className="heart"><HeartOutlined /></span>
                                    </div>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide id="productCard5" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d51.jpg')"}}></div>
                                        <span className="heart"><HeartOutlined /></span>
                                    <div className="product_text">
                                        <ul className="product_text_top">
                                            <li className="brand"><span>Nike</span></li>
                                            <li className="name">나이키 숏패딩</li>
                                            <li className="price">150,000원</li>
                                        </ul>
                                        <div className="product_text_bottom">
                                            <p className="size"><span>XL</span></p>
                                            <p className="time">4시간 전</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;