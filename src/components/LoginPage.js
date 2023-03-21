import "../scss/Style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";

function LoginPage() {
  const REST_API_KEY = "dbdb989ca8e076423375424f2e440654";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>
              <a href={KAKAO_AUTH_URL}>
                <img src="./images/Loginbtn/kakao.png" />
              </a>
            </h1>
          </Route>
          <Route path="/oauth/kakao/callback">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default LoginPage;
