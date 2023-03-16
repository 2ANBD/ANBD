import "./scss/Style.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Banner2 from "./components/Banner2";
import Section3 from "./components/Section3";
import Banner2 from "./components/Banner2";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatBtn";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Banner2 />
      <Section3 />
      <Section4 />
      <Footer />
      <FloatButton />
      <BottomNav />
    </div>
  );
}
