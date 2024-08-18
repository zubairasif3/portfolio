import Spline from "@splinetool/react-spline";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ImageContent from "./components/ImageContent";
import DigitalSpace from "./components/DigitalSpace";
import AnimatedCard from "./components/AnimatedCard";
import MultipleCards from "./components/MultipleCards";
import Content from "./components/Content";
import Animations2 from "./components/Animations2";

const App = () => {
  return (
    <main className="ubuntu-medium">
      <Hero/>
      <Hero2/>
      <DigitalSpace/>
      <Animations2/>
      <AnimatedCard/>
      <Cards/>
      <MultipleCards/>
      <Content/>
      <ImageContent/>
      <Footer/>
    </main>
  );
};

export default App;
