/* eslint-disable */
import "./scss/Style.scss";
import { AnimatePresence } from "framer-motion";
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
/* test */
import UploadPage from "./components/UploadPage";
import UploadPage2 from "./components/UploadPage2";
import UploadPage3 from "./components/UploadPage3";
import UploadPage4 from "./components/UploadPage4";
import Category from "./components/Category";

export default function App() {
  return (
    <div className="wrap">
      <AnimatePresence>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/UploadImage" element={<UploadImage />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
          {/* test */}
          <Route path="/UploadPage" element={<UploadPage />}></Route>
          <Route path="/UploadPage2" element={<UploadPage2 />}></Route>
          <Route path="/UploadPage3" element={<UploadPage3 />}></Route>
          <Route path="/UploadPage4" element={<UploadPage4 />}></Route>
          <Route path="/Category" element={<Category />}></Route>
        </Routes>

        <Footer />
        <FloatButton />
        <BottomNav />
      </AnimatePresence>
    </div>
  );
}
