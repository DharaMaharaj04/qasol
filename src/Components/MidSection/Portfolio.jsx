import React, { useState } from "react";
import Image1 from "../../assets/images/pexels-1.jpg";
import Image2 from "../../assets/images/pexels-2.jpeg";
import Image4 from "../../assets/images/macbook-3.jpeg";
import { motion } from "framer-motion";


const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] sm:pb-[20px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              Our Portfolio
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <motion.ul className="flex flex-wrap justify-center mb-12 space-x-1"
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <li className="mb-1">
                <button
                  onClick={() => handleProject("all")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition  md:py-3 lg:px-8 ${
                    showCard === "all"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("Banking")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition mx-5 bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500 md:py-3 lg:px-8 ${
                    showCard === "Banking"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                Banking
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("Gaming")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold mx-5 bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500 transition md:py-3 lg:px-8 ${
                    showCard === "Gaming"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                Gaming
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("marketing")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold mx-5 bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500 transition md:py-3 lg:px-8 ${
                    showCard === "marketing"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  Marketing
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("E-Commerce")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold mx-5 bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500 transition md:py-3 lg:px-8 ${
                    showCard === "E-Commerce"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                E-Commerce
                </button>
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="relative md:grid flex flex-cols md:grid-row gap-2">
          <PortfolioCard
            ImageHref={Image1}
            title="Banking"
           // category="Banking"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref={Image2}
            // category="marketing"
            title="marketing"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref={Image4}
           // category="Gaming"
            title="Gaming"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <motion.div className="relative mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      >
        <div className="overflow-hidden rounded-[10px]">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-12 -mt-10 rounded-lg bg-white dark:bg-dark-2 py-[10px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <span className="text-primary mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
          <a
            href={buttonHref}
            className="text-body-color dark:text-dark-6 bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500 inline-block rounded-md py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            {button}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
