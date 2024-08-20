import React, { useContext, useRef } from "react";
import Header from "../Header/Header";
import Navbar  from "../Navbar/Navbar";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import AboutUs from "../MidSection/AboutUs";
import MidFilterSection from "../MidSection/MidFilterSection";
import MidComponentParent from "../MidSection/MidComponentParent";
import TabsComponent from "../MidSection/TabsComponent";
import FurnitureFlow from "../MidSection/FurnitureFlow";
import NewsLetter from "../MidSection/NewsLetter";
import Cards from "../MidSection/Cards";
import Footer from "../Footer/Footer";
import PopUpButton from "../PopUpButton/PopUpButton";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import MobileNav from "../Navbar/MobileNav";
import Portfolio from "../MidSection/Portfolio";
import HowWeDoIt from "../MidSection/HowWeDoIt";
import Philosophy from "../MidSection/Philosophy";

const Home = () => {
  const sectionTop = useRef();
  const { theme } = useContext(ThemeBgContext);
  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative">
      <MobileNav></MobileNav>
      <div>
        <PopUpButton handleScroll={handleScroll}></PopUpButton>
      </div>
      <div className={theme === "light" ? "bg-white" : "bg-dark"}>
        <WrapperContainer navHead>
        <Navbar></Navbar>
          <Header topRef={sectionTop}></Header>
        </WrapperContainer>
      </div>
      <div className="bg-white-100 w-full">
        <WrapperContainer>
        
          <AboutUs></AboutUs>
          <Portfolio></Portfolio>
          <MidFilterSection></MidFilterSection>
          <Philosophy></Philosophy>
          <HowWeDoIt></HowWeDoIt>
          <Cards></Cards>
          <NewsLetter></NewsLetter>
        </WrapperContainer>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default Home;
