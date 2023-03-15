import "./scss/Style.scss";
import { UploadOutlined} from "@ant-design/icons";
import { Button } from "antd";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Banner />
      <Banner2 />
      <Section />
      <Footer />
    </div>
  );
}
