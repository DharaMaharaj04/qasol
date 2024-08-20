import React, { useContext } from "react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
    <section className=" sm:w-full mx-auto w-3/5 pt-72 sm:pb-10 pb-56 ">
    <div className="">
      <motion.h1
        className="sm:text-3xl sm:w-full text-6xl text-blue-600 font-bold sm:pb-10 pb-20 font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -80 },
          }}
      >
        About US
      </motion.h1>
      <motion.p
        className="animate-fadeIn delay-1s pb-10"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
      >
        At QA Vision, we’re more than just a software testing company; we’re
        your dedicated partner in pushing the limits of software quality. Our
        dynamic team, boasting over 30 years of combined experience, goes that
        extra mile to ensure your software not only meets but exceeds industry
        standards. We pride our pool of software testing experts who helped us
        establish ourselves as a leading software and application testing
        company in India.
      </motion.p>
      <motion.p
        className="animate-fadeIn delay-2s"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        As the best software and web app testing service provider in India, we
        thrive on innovation and are committed to delivering results that truly
        stand out. With a passion for excellence, our extensive portfolio speaks
        volumes about our capability. When you choose QA Vision, you're choosing
        a partner that’s dedicated to enhancing your software's performance and
        setting new benchmarks for success.
      </motion.p>
    </div>
      </section>
    </div>
  );
};

export default AboutUs;
  