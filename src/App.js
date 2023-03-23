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

export default function App() {
  return (
    <div className="wrap">
      <AnimatePresence>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/UploadImage" element={<UploadImage />}></Route>
      </Routes>
      <Footer />
      <FloatButton />
      <BottomNav />
      </AnimatePresence>
    </div>
  );
}
