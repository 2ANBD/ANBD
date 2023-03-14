import "./scss/Style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="Primary">
      <Header />
      <Banner />
      <Section />
      <Footer />
    </div>
  );
}
