import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.8,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-48 text-gray-800 py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-blue-500 text-center mb-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      Methodology @ QA Vision 
      </motion.h2>
      <motion.p
        className="text-2xl text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      Here’s a glimpse of how things roll out at QA Vision - 
      </motion.p>

      <motion.ul
        className="relative md:grid flex flex-cols-1 py-16 px-6 md:grid-row gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Step 1 */}
        <motion.li
          className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
          variants={stepVariants}
        >
          <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-blue-100 font-medium text-gray-800 rounded-full">
              1
            </span>
            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className="grow md:grow-0 md:mt-3 pb-5">
            <span className="block font-bold text-sm text-gray-800">
            Define Requirements:
            </span>
            <p className="text-sm text-gray-500">
            Understanding your needs is step one. We ensure we’re on the same page before diving into testing.
            </p>
          </div>
        </motion.li>

        {/* Step 2 */}
        <motion.li
          className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block sm:py-1 md:py-10 sm:px-6 px-4"
          variants={stepVariants}
        >
          <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-blue-200 font-medium text-gray-800 rounded-full">
              2
            </span>
            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className="grow md:grow-0 md:mt-3 pb-5">
            <span className="block text-sm font-bold text-gray-800">
            Design & Execute Tests:
            </span>
            <p className="text-sm text-gray-500">
            Our team crafts detailed test plans and executes them with precision.
            </p>
          </div>
        </motion.li>

        {/* Step 3 */}
        <motion.li
          className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block sm:py-0 md:py-15  px-8"
          variants={stepVariants}
        >
          <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-blue-400 font-medium text-white-800 rounded-full">
              3
            </span>
            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200"></div>
          </div>
          <div className="grow md:grow-0 md:mt-3 pb-5">
            <span className="block text-sm font-bold text-gray-800">
            Deliver Insights:
            </span>
            <p className="text-sm text-gray-500">
            We provide actionable insights, not just reports. Our goal is to help you improve, not just find faults.
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HowItWorks;
