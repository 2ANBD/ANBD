import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../scss/Style.scss";
import { RightOutlined, HeartOutlined } from "@ant-design/icons";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Section1 = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
		axios
			.get(`${API_URL}/products`)
			.then((result) => {
				const products = result.data.product;
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
                <Link className="product_link" to={"/products1"}>
                  전체보기
                  <RightOutlined />
                </Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                {products.length < 2 ? <p className="not_have">등록된 상품이 없습니다.</p> :products
                  .filter((category) => category.category === "A")
                  .map((product) => {
                    return(
                      <SwiperSlide className="product_card swiper_slide" key={product.id}>
                          <Link className="detail_link" to={`/Detail1/${product.id}`}>
                            <div className="img_product">
                              {product.soldout === 1 ? <div className="sold_out"></div> : null }
                              <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                              <span className="heart"><HeartOutlined /></span>
                            </div>
                            <div className="product_text">
                              <ul className="product_text_top">
                                <li className="brand"><span>{product.brand}</span></li>
                                <li className="name">{product.name}</li>
                                {product.price === null ? null : <li className="price">{product.price}원</li>}
                              </ul>
                              <div className="product_text_bottom">
                                {product.size === null ? null : <li className="size"><span>{product.size}</span></li>}
                                <p className="time">4시간 전</p>
                              </div>
                            </div>
                          </Link>
                      </SwiperSlide>
                    );
                  })
                }
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
                <Link className="product_link" to={"/products2"}>
                  전체보기
                  <RightOutlined />
                </Link>
              </p>
              <Swiper slidesPerView={2} spaceBetween={20} freeMode={true} modules={[FreeMode]} className="swiper_slide_wrap">
                {products.length < 2 ? <p className="not_have">등록된 상품이 없습니다.</p> : 
                  products.filter((category) => category.category === "N")
                  .map((product) => {
                    return(
                      <SwiperSlide className="product_card swiper_slide" key={product.id}>
                          {product.soldout === 1 ? <div className="sold_out"></div> : null }
                          <Link className="detail_link" to={`/Detail1/${product.id}`}>
                            <div className="img_product">
                              <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                              <span className="heart"><HeartOutlined /></span>
                            </div>
                            <div className="product_text">
                              <ul className="product_text_top">
                                <li className="brand"><span>{product.brand}</span></li>
                                <li className="name">{product.name}</li>
                                {product.price === null ? null : <li className="price">{product.price}원</li>}
                              </ul>
                              <div className="product_text_bottom">
                                {product.size === null ? null : <li className="size"><span>{product.size}</span></li>}
                                <p className="time">4시간 전</p>
                              </div>
                            </div>
                          </Link>
                      </SwiperSlide>
                    );
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Section1;
