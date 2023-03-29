import React from "react";
import { motion } from "framer-motion";
import "../scss/Style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const Banner0 = () => {
    const list = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
          },
        },
      };
      const item = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

    return (
        <>
            <section id="banner1" className="banner1">
                <div id="container">
                    <div className="inner">
                        <motion.div variants={list} initial="hidden" animate="visible"  className="banner_container">
                            <Swiper
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            navigation={true}
                                slidesPerView={1}
                                spaceBetween={20}
                                modules={[Autoplay, Navigation]}
                                className="swiper_banner_slide_wrap"
                            >    
                                <SwiperSlide id="bannerCard1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_2.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="bannerCard1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_3.png')"}}></div>
                                </SwiperSlide>
                                <SwiperSlide id="bannerCard1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_4.png')"}}></div>
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner0;
