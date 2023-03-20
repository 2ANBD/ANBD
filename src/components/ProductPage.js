// import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
// import { Link, useParams, useNavigate  } from "react-router-dom";
// import axios from "axios";
import "../scss/Style.scss";
import { LeftOutlined, CloseCircleOutlined } from '@ant-design/icons';

const ProductPage = () => {
    const navigate = useNavigate();
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
    return(
        <div>
			<div id="products" className="products">
				<h2 className="ir_so">제품페이지</h2>
                <div id="container">
                    <div class="inner">                    
                        <header className="header">
                            <div className="header_top">
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
                                        <button className="delete_btn"><CloseCircleOutlined /></button>
                                    </div>
                                </form>
                            </div>
                            <nav className="nav">
                                
                            </nav>
                        </header>
                    </div>
                </div>
			</div>
		</div>
    )
}

export default ProductPage;

