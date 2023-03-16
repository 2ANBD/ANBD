import React from "react";
// import {Link} from "react-router-dom";
import "../scss/Style.scss";
import { RightOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Section3 = () => {
    return (
        <>
            <section id="section3" className="product">
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <h2 className="title"><span>바</span>꿔서 사용해보세요</h2>
                            <p className="product_link"><a href="/">전체보기<RightOutlined /></a></p>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_slide_wrap"
                            >
                                <SwiperSlide id="product_card1" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}></div>
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
                                <SwiperSlide id="product_card2" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b21.jpg')"}}></div>
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
                                <SwiperSlide id="product_card3" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b31.jpg')"}}></div>
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
                                <SwiperSlide id="product_card4" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b41.jpg')"}}></div>
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
                                <SwiperSlide id="product_card5" className="swiper_slide">
                                    <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b51.jpg')"}}></div>
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

export default Section3;
