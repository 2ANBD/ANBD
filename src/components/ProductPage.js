import React from "react";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
import "../scss/Style.scss";
import { HeartOutlined, LeftOutlined, CloseCircleOutlined } from '@ant-design/icons';

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ProductPage = () => {
    // const { id } = useParams();
    // const [products, setProducts] = useState([]);
	// useEffect(() => {
	// 	let url = `${API_URL}/products`;
	// 	axios
	// 		.get(url)
	// 		.then((result) => {
	// 			const products = result.data.product;

	// 			setProducts(products);
    //             console.log(result);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
    const [activeIndex, setActiveIndex] = useState(0);
    const tabContArr = [
        {
            tabTitle: (
                <li className={activeIndex === 0 ? "active" : ""} onClick={()=>tabClickHandler(0)}>아낀물건</li>
            ),
            tabCont:(
                <div className="product_container">
                    <Swiper
                        slidesPerView={5}
                        // spaceBetween={20}
                        direction={"vertical"}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="swiper_slide_wrap"
                    >
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/a/img_a11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex === 1 ? "active" : ""} onClick={()=>tabClickHandler(1)}>나누기</li>
            ),
            tabCont:(
                <div className="product_container">
                    <Swiper
                        slidesPerView={5}
                        // spaceBetween={20}
                        direction={"vertical"}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="swiper_slide_wrap"
                    >
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/n/img_n11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex === 2 ? "active" : ""} onClick={()=>tabClickHandler(2)}>바꾸기</li>
            ),
            tabCont:(
                <div className="product_container">
                    <Swiper
                        slidesPerView={5}
                        // spaceBetween={20}
                        direction={"vertical"}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="swiper_slide_wrap"
                    >
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/b/img_b11.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex === 3 ? "active" : ""} onClick={()=>tabClickHandler(3)}>다시쓰기</li>
            ),
            tabCont:(
                <div className="product_container">
                    <Swiper
                        slidesPerView={5}
                        // spaceBetween={20}
                        direction={"vertical"}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="swiper_slide_wrap"
                    >
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="product_card swiper_slide">
                            <Link className="payment_link" to="/payment">
                                <div className="img_product" style={{backgroundImage: "url('../images/products/d/img_d1.jpg')"}}>
                                    <span className="heart"><HeartOutlined /></span>
                                </div>
                                <div className="product_text">
                                    <ul className="product_text_top">
                                        <li className="name">나이키 숏패딩</li>
                                        <li className="price">150,000원</li>
                                    </ul>
                                    <ul className="product_text_center">
                                        <li className="brand"><span>Nike</span></li>
                                        <li className="size"><span>XL</span></li>
                                    </ul>
                                    <div className="product_text_bottom">
                                        <p className="time">4시간 전</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        },
    ];
    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }
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
                                    <button className="delete_btn"><CloseCircleOutlined style={{fontSize: "16px"}}/></button>
                                </div>
                            </form>
                        </div>
                        <nav className="nav">
                            <ul className="product_category">
                                {tabContArr.map((li)=>{
                                    return li.tabTitle
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <section id="productItem">
                    <h2 className="ir_so">다시 사용해보세요</h2>
                    <div id="container">
                        <div className="inner">
                            { tabContArr[activeIndex].tabCont }
                        </div>
                    </div>
                </section>
            </main>
		</div>
    )
}

export default ProductPage;
