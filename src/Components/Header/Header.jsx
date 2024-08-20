import React, { useContext ,useEffect } from "react";
import header1 from "../../assets/images/headerImage.png";
import { Switch } from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { ReactComponent as Twitterx } from "../../assets/images/twitter-x.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import Mobtest from "../../assets/images/mobtest1.png";
import CursorFollower  from "../../assets/CursorFollower";
import { motion } from "framer-motion";

const Header = ({ topRef }) => {
  const { theme, handleTheme } = useContext(ThemeBgContext);


  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1, y: 1 ,
      transition: {
        duration: 2.5
      },
    },
  };



  return (
    <div ref={topRef} className="mx-auto pt-16">
    <CursorFollower />
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
        <div className="sm:hidden">
          <Switch
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          />
          </div>
          <div className="absolute inset-0 hidden md:block" id="wrapper-canvas">
          </div>
            <div className="">
              <div className="w-full px-4 max-w-screen-xl mx-auto"></div>
              <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute sm:right-4  right-8 sm:pt-24">
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <
                      Linkedin fill="${color}"
                      className="w-7 hover:text-color"
                      />

                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <
                      Twitterx fill="${currentcolor}"
                      className="w-7 hover:text-color"
                      />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <
                      Instagram fill="${currentcolor}"
                      className="w-7 hover:text-color"
                      />
                  </a>
                </li>
                <li>
                  <a href="mailto:dhara@gmail.com" target="_blank">
                    <
                      Email fill="${currentcolor}" 
                      className="w-7"
                      />
                  </a>
                </li>
                <li>
                  <a href="tel:9898667897">
                    <
                      Phone fill="${currentcolor}"
                      className="w-7 hover:text-invert"
                    />
                  </a>
                </li>
              </ul>
            </div>  
          
            <motion.h3
            className={
              theme === "light"
                ? "sm:text-xl text-2xl   no-underline align-middle tracking-wide normal-case leading-normal text-blue-500"
                : "sm:text-xl text-2xl   no-underline align-middle tracking-wide normal-case leading-normal text-white"
            }
            initial="hidden"
        animate="visible"
        variants={containerVariants}
          >
          Welcome to QA Vision{" "} 
          </motion.h3>
          
          <motion.h1
         
              className={
                theme === "light"
                  ? "sm:text-3xl py-5 text-dark text-5xl font-russonOne font-medium font-bold no-underline align-middle tracking-wide normal-case leading-tight"
                  : "sm:text-3xl py-5 text-white text-5xl font-russonOne font-medium font-bold no-underline align-middle tracking-wide normal-case leading-tight"
              }
              initial="hidden"
        animate="visible"
        variants={containerVariants}
            >
            Your Partner in Top-Notch Software Testing
            
            </motion.h1>  
          
          <div className="mt-4">
            <motion.p
              className={
                theme === "light"
                  ? "sm:text-lg w-5/5 sm:pr-8 py-2 font-inter font-small no-underline align-middle tracking-wide normal-case text-dark text-xl "
                  : "sm:text-lg w-5/5 sm:pr-8 py-2 font-inter font-small no-underline align-middle tracking-wide normal-case text-white text-xl"
              }
              initial="hidden"
        animate="visible"
        variants={containerVariants}
            >
            Explore QA Vision's best software & application testing services in India. 
            We offer software & web app testing, automation testing, 
            game testing & VR/AR testing. 
            </motion.p>
          </div>
          <div className="pb-10 pt-5 ring-blue-500">
  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 hover:text-white rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500">
    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0 transition-all ease-in duration-75">
    Let's work together
    </span>
  </button>
</div>
        </div>
        <div className="sm:pl-4 mt-4">
          <div>
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={Mobtest}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
