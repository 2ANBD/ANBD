import React from "react";
// import {Link} from "react-router-dom";
import "../scss/Style.scss";
import { RightOutlined, HeartOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Section1 = () => {
    return (
        <>
            <section id="section1" className="product">
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <h2 className="title"><span>아</span>껴쓴 물건을 팔아보세요</h2>
                            <p className="product_link"><a href="/">전체보기<RightOutlined /></a></p>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_slide_wrap"
                            >
                                <SwiperSlide id="productCard1" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
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
                                <SwiperSlide id="productCard2" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a21.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a31.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a41.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a41.jpg')"}}>
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
            <section id="section2" className="product">
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <h2 className="title"><span>나</span>눔을 해보세요</h2>
                            <p className="product_link"><a href="/">전체보기<RightOutlined /></a></p>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_slide_wrap"
                            >
                                <SwiperSlide id="productCard1" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
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
                                <SwiperSlide id="productCard2" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n21.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n31.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n41.jpg')"}}>
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
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n51.jpg')"}}>
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
        </>
    );
}

export default Section1;