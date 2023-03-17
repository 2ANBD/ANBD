import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage.js";
import ProductPage from "./components/ProductPage.js";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";
import "./scss/Style.scss";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/products" element={<ProductPage />}></Route>
				<Route path="/" element={<MainPage />}></Route>
				{/* <Route path="/UploadPage" element={<UploadPage />}></Route> */}
			</Routes>
      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
