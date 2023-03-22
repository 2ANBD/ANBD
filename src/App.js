import "./scss/Style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";
import PaymentPage from "./components/PaymentPage";
import LoginPage from "./components/LoginPage";
import UploadImage from "./components/UploadImage";
import UploadPage from "./components/UploadPage";


export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/UploadImage" element={<UploadImage />}></Route>
        <Route path="/UploadPage" element={<UploadPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        

      </Routes>
      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
