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
        message.info("결재오류.");
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

    <div id="content_box_detail">
      <div className="product_name">{product.name}</div>

      <div className="product_seller"><span>판매자 &nbsp;&nbsp;</span> <span>{product.seller}</span></div>

      <hr/>

      <div className="product_brand">{product.brand}</div>

      <span className="product_size">{product.size}</span>
      <p className="product_createAt"><span>등록일&nbsp;&nbsp;</span>{product.createAt}</p>
      <div className="product_price"><span>판매가 &nbsp;&nbsp;</span>{product.price}</div>
      <hr/>
      <div className="product_description_box">
      <p>상세설명</p>
      <br/>
      <p id="product_description">{product.description}</p>
      </div>
      <hr/>
      <Button siz="large" type="primary" danger={true} className="product_payment" onClick={onClickPurchase} disabled={product.soldout === 1}>
        즉시결제하기
      </Button>
      {/* pre태그 미리 정의된 형식(preformatted)의 텍스트를 정의할 때 사용 */}
    </div>
    </div>
    </div>
  </div>
  );
};
export default Detail1;
