import "./scss/Style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";
import MainPage from "./components/MainPage.js";
import UploadImage from "./components/UploadImage.js";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
				{/* <Route path="/" element={<MainPage />}></Route> */}
				<Route path="/" element={<UploadImage />}></Route>
				{/* <Route path="/ProductPage/:id" element={<ProductPage />}></Route> */}
			</Routes>
      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
