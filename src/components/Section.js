import React from "react";
import "../scss/Style.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Section = () => {
  return (
    <>
      <section id="section1">
        <div id="container">
          <div className="inner">
            <Swiper
              slidesPerView={2}
              spaceBetweengit={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper_slide">
                
              </SwiperSlide>
              <SwiperSlide className="swiper_slide">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="swiper_slide">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="swiper_slide">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="swiper_slide">
                Slide 5
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
