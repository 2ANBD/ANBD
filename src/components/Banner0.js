import React from "react";
// import {Link} from "react-router-dom";
import "../scss/Style.scss";
import { RightOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Banner0 = () => {
    return (
        <>
            <section id="section1" className="product">
                <div id="container">
                    <div className="inner">
                        <div className="product_container">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={50}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="swiper_banner_slide_wrap"
                            >
                                <SwiperSlide id="product_card1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_1.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="product_card1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_2.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="product_card1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_3.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="product_card1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_4.png')"}}></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner0;