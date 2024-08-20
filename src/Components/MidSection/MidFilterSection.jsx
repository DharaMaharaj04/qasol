import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidFilterSection = () => {
  const { theme } = useContext(ThemeBgContext);
  const [data, setData] = useState([]);

  // Variants for right-side divs to slide up on scroll
  const divVariants = {
    hidden: { opacity: 0, x: -50, scale: 0 }, // Initially hidden and positioned lower
    visible: { opacity: 1, x: 0, scale: 1 }, // Fades in and slides up
    transition: { duration: 4.5 },
  };

  useEffect(() => {
    // Set initial data (if needed)
    setData([
      {
        id: 1,
        title: "Manual & Automation Testing",
        content:
          "We offer both manual and automated testing to cover every base. From functional to performance testing, our experts ensure your software performs at its best.",
      },
      {
        id: 2,
        title: "Cutting-Edge Technologies",
        content:
          "We don’t just keep up; we lead. With expertise in Selenium, JMeter, Appium, and the latest tools, our testing services are as advanced as your needs.",
      },
      {
        id: 3,
        title: "Bespoke Solutions",
        content:
          "No two projects are alike. We tailor our approach to fit your unique requirements, making sure nothing is overlooked.",
      },
    ]);
  }, []);

  return (
    <div className="mx-auto pt-10 pb-20" id="news">
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center drop-shadow-2xl">
        {/* Left Side: Static h2 and p */}
        <motion.div
          className="sm:pt-0 sm:w-full sm:pl-4 w-4/5 mx-auto pl-24"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
        >
          <h2
            className={
              theme === "light"
                ? "sm:text-3xl sm:w-full text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-3xl sm:w-full text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Experience the QA Vision Difference
          </h2>
          <motion.p
            className="animate-fadeIn delay-1s pt-10 sm:pb-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
          >
            Ever wondered how seamless software can make or break user experience? And we get it. Our job is to catch every little hiccup before it reaches your users. Here’s what makes us stand out:
          </motion.p>
        </motion.div>

        {/* Right Side: 3 divs slide up one by one */}
        <div className="ml-20 pb-4 pt-10 relative mx-auto w-8/12 rounded-xl">
          <motion.div
            className="sm:w-full w-96 space-y-4 " // Add spacing between child elements
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3, duration: 2.5 }} // Stagger animation for children
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} // Animation for parent
          >
            {data.map((item) => (
              <motion.div
                key={item.id}
                className="p-4 bg-blue-400 rounded-md drop-shadow-2xl"
                variants={divVariants}
              >
                <h2 className="font-bold pb-5 font-inter text-center text-white">{item.title}</h2>
                <p className="text-white">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MidFilterSection;
