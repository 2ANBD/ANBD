import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../scss/Style.scss";

// import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
import { Button, message } from "antd";
const PaymentPageTest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios
    .get(`${API_URL}/products`)
      .then((result) => {
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
      .get(`${API_URL}/products/${id}`)
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
      <button
        onClick={() => {
          navigate(-1);
        }}
        id="back-btn"
      >
        뒤로
      </button>
      <div id="image-box">imageUrl
        <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <span className="product-seller">{product.seller}seller</span>
      </div>
      <div className="content-box" >
        <div id="name">{product.name}name</div>
        <div id="brand">{product.brand}brand</div>
        <div id="kind">{product.kind}kind</div>
        <div id="price">{product.price}price</div>
        <div id="createAt">{product.createAt}createAt</div>
        <Button siz="large" type="primary" danger={true} className="payment" onClick={onClickPurchase}>
          즉시결재하기
        </Button>
        {/* pre태그 미리 정의된 형식(preformatted)의 텍스트를 정의할 때 사용 */}
        <pre id="description">{product.description}description</pre>
      </div>
    </div>
  );
};
export default PaymentPageTest;
