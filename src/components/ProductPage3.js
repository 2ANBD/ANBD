import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/constants";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import "../scss/Style.scss";
import { HeartOutlined, LeftOutlined, SearchOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ProductPage3 = () => {
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

    const navigate = useNavigate();
	
    return(
        <div>
            <header id="productSearch">
                <h2 className="ir_so">제품페이지</h2>
                <div id="container">
                    <div className="inner">                    
                        <div className="header">
                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className="back_btn"
                            >
                                <LeftOutlined className="left_arrow" style={{fontSize: "20px"}} />
                            </button>
                            <form className="search_form">
                                <div className="search_input">
                                    <label htmlFor="user_search" className="ir_so">품목 검색</label>
                                    <input id="user_search" name="user_search" className="search" placeholder="구매하고 싶은 상품을 검색하세요" />
                                    <button className="search_btn"><SearchOutlined style={{fontSize: "16px"}}/></button>
                                </div>
                            </form>
                        </div>
                        <nav className="nav">
                            <ul className="product_category">
                                <li className="categories"><Link to="/products1">아껴사용</Link></li>
                                <li className="categories"><Link to="/products2">무료나눔</Link></li>
                                <li className="categories active"><Link to="/products3">바꾸기</Link></li>
                                <li className="categories"><Link to="/products4">다시쓰기</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <section id="productItem">
                    <h2 className="ir_so">바꾸기</h2>
                    <div id="container">
                        <div className="inner">
                            <div className="product_container">
                                <Swiper
                                    slidesPerView={5}
                                    direction={"vertical"}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    className="swiper_slide_wrap"
                                >
                                    {products
                                        .filter((category) => category.category === "B")
                                        .map((product) => {
                                            return(
                                                <SwiperSlide className="product_card swiper_slide" key={product.id}>
                                                    <Link className="payment_link" to="/payment">
                                                        <div className="img_product">
                                                            {product.soldout === 1 ? <div className="sold_out"></div> : null }
                                                            <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                                                            <button className="heart_btn"><HeartOutlined className="heart"/></button>
                                                        </div>
                                                        <div className="product_text">
                                                            <ul className="product_text_top">
                                                                <li className="name">{product.name}</li>
                                                                {product.price === null ? null : <li className="price">{product.price}원</li>}
                                                            </ul>
                                                            <ul className="product_text_center">
                                                                <li className="brand"><span>{product.brand}</span></li>
                                                                {product.size === null ? null : <li className="size"><span>{product.size}</span></li>}
                                                            </ul>
                                                            <div className="product_text_bottom">
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
                </section>
            </main>
		</div>
    )
}

export default ProductPage3;