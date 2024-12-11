import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-5/6 flex flex-col items-center text-center select-none py-20 m-auto outline-none tracking-tightest text-yellow-300 font-normal">
     <div className="background-hero w-[600px] ">
     <div className="" >
      <motion.h1
        className="text-9xl font-extrabold flex items-center justify-center [-webkit-text-stroke:2px_#002f66]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="relative z-50 tracking-tighter">H</span>
        <span className="relative z-40 tracking-tighter -ml-2">a</span>
        <span className="relative z-30 tracking-tighter -ml-2">p</span>
        <span className="relative z-20 tracking-tighter -ml-2">p</span>
        <span className="relative z-10 tracking-tighter -ml-2">y</span>
        <img 
          src="static/images/Ball.png" 
          alt="DragonBall ball"
          className="w-16 h-16 -ml-10 mt-5 relative z-50" 
        />
        <span className="text-red-500 text-[SayanSansRight] [-webkit-text-stroke:2px_#002f66] -ml-5 -mt-3">
          <span className="relative z-[8] tracking-tighter text-[128px]">b</span>
          <span className="relative z-[7] tracking-tighter -ml-2 text-[120px]">i</span>
          <span className="relative z-[6] tracking-tighter -ml-2 text-[128px]">r</span>
          <span className="relative z-[5] tracking-tighter -ml-2 text-[130px]">t</span>
          <span className="relative z-[4] tracking-tighter -ml-2 text-[135px]">h</span>
          <span className="relative z-[3] tracking-tighter -ml-1 text-[135px]">d</span>
          <span className="relative z-[2] tracking-tighter -ml-2 text-[135px]">a</span>
          <span className="relative z-[1] tracking-tighter -ml-3 text-[140px]">y</span>
        </span>
      </motion.h1>
      </div>
      <p className="text-6xl custome-stroke tracking-regular -mt-6"
      >LUIS
      </p>
      </div>
    </div>

  );
};

export default Hero;