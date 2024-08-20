import React from 'react';
import Single from '../../assets/images/single.png'
import Double from '../../assets/images/double.png'
import Triple from '../../assets/images/triple.png'
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className=''>
    <motion.div className="mx-auto mb-[60px] max-w-[510px] text-center"
    initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
    >
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              Our Philosophy
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
              At QA Vision, we believe in a no-compromise approach to quality. Here’s how we do it:
              </p>
        </motion.div>
      <motion.div className='relative md:grid flex flex-cols-1 md:grid-row gap-6 gap-8'
      initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 2.4 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50},
              }}
      >
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Detail-Oriented Testing:</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Every bug, every glitch – we spot them all. Our meticulous process ensures your software is flawless.
                  </p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Real-World Scenarios:</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We test under real-world conditions to ensure your users have a top-notch experience, no matter what device they use.
                  </p>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Proactive Communication:</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We keep you in the loop with regular updates and clear reports, so you’re never in the dark.</p>
              </div>
          </div>
      </motion.div>
    </div>
  );
};

export default Philosophy;