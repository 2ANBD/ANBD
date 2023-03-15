import React, { useState, useEffect } from "react";
import{Link} from 'react-router-dom'
import { Carousel } from 'antd';
import "../scss/Style.scss";
import axios from "axios";

const Banner22 = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let url = "https://03fb3b69-5394-4a73-9f6b-db74cf101370.mock.pstmn.io/Banner";
		axios
			.get(url)
			.then((result) => {
				const products = result.data.banners;
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

    {products.map((banner,idx) => {
	return (
    <div>
	<div id="banner_content">
    <div id="container">
    <div className="inner">
    <Carousel afterChange={onChange}>
      <div>
        <a href="">
          <h3 className="contentStyle5"> </h3>
        </a>
      </div>
      <a href="">
        <div>
          <h3 className="contentStyle6"> </h3>
        </div>
      </a>
      <a href="">
        <div>
          <h3 className="contentStyle7"> </h3>
        </div>
      </a>
      <a href="">
        <div>
        <h3 className="contentStyle8" src={banner.imageUrl} alt={banner.name} ></h3>
        </div>
    </a>
    </Carousel>
    </div>
    </div>
    </div>
    </div>
	);
})};
}
export default Banner22;