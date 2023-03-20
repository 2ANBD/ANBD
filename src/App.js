import "./scss/Style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";
import PaymentPage from "./components/PaymentPage";


export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/products" element={<ProductPage />}></Route>
				<Route path="/payment" element={<PaymentPage />}></Route>
				{/* <Route path="/upload" element={<UploadPage />}></Route> */}
			</Routes>
      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
