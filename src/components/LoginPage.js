import "../scss/Style.scss";

function LoginPage() {
  const REST_API_KEY = "dbdb989ca8e076423375424f2e440654";
  const REST_API_KET_1 = "Le9ywWBU613n5i0TBz2U";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=Le9ywWBU613n5i0TBz2U&redirect_uri=http://localhost:3000&response_type=code";

  return (
    <div id="container">
      <div className="inner">
        <div className="login_wrap">
          <div className="header"></div>
          <div className="logo_box">
            <span>모두를 위한 쇼핑몰 </span>
            <img src="/images/icons/img_login_logo.png" alt="" />
          </div>
          <ul className="login_btn">
            <li className="kakao_btn">
              <a href={KAKAO_AUTH_URL}>카카오 계정으로 로그인</a>
            </li>
            <li className="naver_btn">
              <a href={NAVER_AUTH_URL}>네이버 계정으로 로그인</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
