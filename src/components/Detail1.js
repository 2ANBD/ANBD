import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../scss/Style.scss";
// import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
import { Button, message } from "antd";
const Detail1 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        console.log(result);
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }
  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then((result) => {
        message.info("결재가 완료 되었습니다.");
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="container">
        <div className="inner">
      <div className="image_box">
        <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
      </div>

      <div id="profile_box">
        <span className="product-seller">{product.seller}</span>
      </div>
      <div className="content_box">
        <div className="product_brnad">{product.brand}</div>
        <div className="product_name">{product.name}</div>
        <div className="product_price">{product.price}</div>
        <div className="product_size">{product.size}</div>
        <div className="product_createAt">{product.createAt}</div>
        <pre id="product_description">{product.description}</pre>
        
        <Button siz="large" type="primary" danger={true} className="product_payment" onClick={onClickPurchase} disabled={product.soldout === 1}>
          즉시결재하기
        </Button>
        {/* pre태그 미리 정의된 형식(preformatted)의 텍스트를 정의할 때 사용 */}
      </div>
      </div>
      </div>
    </div>
  );
};
export default Detail1;
