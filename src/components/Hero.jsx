import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <div className="relative min-h-[100vh]">
      <div className="absolute inset-0 w-full text-white z-20">
        <Navbar />
      </div>
      <Spline
        className="absolute"
        scene="https://prod.spline.design/ljWezOI1shN8h3DQ/scene.splinecode"
      ></Spline>
      <div className="w-full px-4 top-[10%] sm:top-[20%] flex-col justify-center items-center text-center absolute z-10">
        <motion.div
          className="text-[42px] Robotic text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Web Development for outstanding
        </motion.div>
        <motion.div
          className="brands-gradient text-[42px] Robotic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Personal brands
        </motion.div>
        <motion.p
          className="mt-0 ubuntu-medium text-[13px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Embrace Individuality! Define how the internet sees you with a <br />
          website made by experts
        </motion.p>
        <motion.div
          className="relative flex gap-3 items-center w-full mt-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="transparent-blur-button text-sm shadow-custom">
            BOOK A CALL
          </button>
          <button className="transparent-blur-button2 text-sm shadow-custom flex items-center gap-1">
            Find the website for me <GoArrowUpRight />
          </button>
          <div
            className="shadow-custom p-3 rounded-[10px] border border-white max-[639px]:left-50% sm:left-7 top-[120%] flex-row sm:flex-col justify-center items-center flex gap-[1rem] text-center absolute z-10"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <a href="#">
              <img src="linkedin1.png" alt="" width={17} />
            </a>
            <a href="#">
              <img src="instagram1.png" alt="" width={17} />
            </a>
            <a href="#">
              <img src="facebook1.png" alt="" width={17} />
            </a>
            <a href="#">
              <img src="whatsapp1.png" alt="" width={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
