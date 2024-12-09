import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 m-auto text-yellow-300 font-normal">
     <div>
      <motion.h1
        className="text-9xl font-extrabold flex items-center justify-center [-webkit-text-stroke:0.5px_#002f66]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Happy
        <img 
          src="static/images/Ball.png" 
          alt="DragonBall ball"
          className="w-16 h-16 -ml-10 mt-5" 
        />
        <span className="text-red-500 text-[SayanSansRight] [-webkit-text-stroke:0.5px_#002f66] -ml-5">birthdaY</span>
      </motion.h1>
      </div>
      <p className="text-4xl font-extrabold text-[#002f66] -mt-2"
        >Luis
        </p>
      <motion.img
        src="/path/to/vegeta-bulma.png"
        alt="Vegeta and Bulma"
        className="w-80 mt-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Hero;