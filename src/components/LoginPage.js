import "../scss/Style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";

function LoginPage() {
  const REST_API_KEY = "dbdb989ca8e076423375424f2e440654";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return ( 
    <div id="container">
     <div className="inner">
      <div className="login_wrap">
      <div className="header">
        <span>모두를 위한 쇼핑몰 </span>
      </div>
      <div className="logo_box">
      <img src="/images/icons/img_main.png" alt="" />
      </div>
        <ul className="login_btn">
          <li className="kakao_btn" ><a href={KAKAO_AUTH_URL}>카카오 계정으로 로그인</a></li>
          <li className="naver_btn"><a href={KAKAO_AUTH_URL}>네이버 계정으로 로그인</a></li>
         </ul>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
