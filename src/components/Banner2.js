import React from "react";
// import {Link} from "react-router-dom";
import "../scss/Style.scss";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation } from "swiper";
import "swiper/css";

const Banner2 = () => {
  
  return (
    <section id="banner2" className="banner2">
                <div id="container">
                    <div className="inner">
                        <div className="banner_container">
                            <Swiper
                            centeredSlides={true}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            navigation={true}
                                slidesPerView={1}
                                spaceBetween={25}
                                modules={[Autoplay, Navigation]}
                                className="swiper_banner_slide_wrap"
                            >
                                <SwiperSlide id="bannerCard1" className="swiper_banner2_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_5.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="bannerCard1" className="swiper_banner2_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_6.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="bannerCard1" className="swiper_banner2_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_7.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="bannerCard1" className="swiper_banner2_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_8.png')"}}></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
  );
};
export default Banner2;
