import "./scss/Style.scss";
import { Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";
import MainPage from "./components/MainPage.js";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
				<Route path="/" element={<MainPage />}></Route>
				{/* <Route path="/ProductPage/:id" element={<ProductPage />}></Route> */}
				{/* <Route path="/UploadPage" element={<UploadPage />}></Route> */}
			</Routes>
      <MainPage />

      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
