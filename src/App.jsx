import React from "react";
import { ReactDOM } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Block from "./Block/Block";
import Slider from "./Slider/Slider";
import Block1 from "./Block/Block1";
import { BrowserRouter } from "react-router-dom";
import Sudeep from "./Sudeep";
import ScrollTop from "./Component/ScrollTop";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollTop/>
        <Header />
        {/* <Sudeep/> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App