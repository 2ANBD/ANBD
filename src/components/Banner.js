import React from "react";
// import {Link} from "react-router-dom";
import "../scss/Style.scss";
/* import axios from "axios"; */

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation } from "swiper";
import "swiper/css";


const Banner0 = () => {
    /* const [banners, setBanners] = useState([]);
    useEffect(() => {
        axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
        console.log("data:", banners);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []); */
    return (
        <>
            <section id="banner1" className="banner1">
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
                                spaceBetween={20}
                                modules={[Autoplay, Navigation]}
                                className="swiper_banner_slide_wrap"
                            >
                                <SwiperSlide id="bannerCard1" className="swiper_banner_slide">
                                    <div className="img_banner" style={{backgroundImage: "url('../images/banner/Banner_img_1.png')"}}></div>
                                </SwiperSlide>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner0;