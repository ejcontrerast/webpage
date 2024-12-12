import { motion } from "framer-motion";
import HoverImage from './HoverImage';

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center text-center select-none py-10 m-auto outline-none tracking-tight text-yellow-300 font-normal">
      <div className="background-hero w-full max-w-[700px]">
        <div>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold flex items-center justify-center [-webkit-text-stroke:1px_#002f66] md:[-webkit-text-stroke:2px_#002f66]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="relative z-50 tracking-tighter">H</span>
            <span className="relative z-40 tracking-tighter -ml-1 md:-ml-2">a</span>
            <span className="relative z-30 tracking-tighter -ml-1 md:-ml-2">p</span>
            <span className="relative z-20 tracking-tighter -ml-1 md:-ml-2">p</span>
            <span className="relative z-10 tracking-tighter -ml-1 md:-ml-2">y</span>
            <HoverImage src="static/images/Ball.png" alt="DragonBall ball 4 stars" soundSrc="static/sounds/cumpleanios.mp3" className='cursor-pointer hover:opacity-80 transition-opacity duration-200 w-5 h-5 md:w-16 md:h-16 -ml-3 md:-ml-10 mt-3 md:mt-5 relative z-50'/>
            <span className="text-red-500 font-[SayanSansRight] [-webkit-text-stroke:1px_#002f66] md:[-webkit-text-stroke:2px_#002f66] -ml-1 md:-ml-5 -mt-2 md:-mt-3">
              <span className="relative z-[8] tracking-tighter text-5xl md:text-[128px]">b</span>
              <span className="relative z-[7] tracking-tighter -ml-1 md:-ml-2 text-5xl md:text-[120px]">i</span>
              <span className="relative z-[6] tracking-tighter -ml-1 md:-ml-2 text-5xl md:text-[128px]">r</span>
              <span className="relative z-[5] tracking-tighter -ml-1 md:-ml-2 text-5xl md:text-[130px]">t</span>
              <span className="relative z-[4] tracking-tighter -ml-1 md:-ml-2 text-5xl md:text-[135px]">h</span>
              <span className="relative z-[3] tracking-tighter -ml-1 md:-ml-1 text-5xl md:text-[135px]">d</span>
              <span className="relative z-[2] tracking-tighter -ml-1 md:-ml-2 text-5xl md:text-[135px]">a</span>
              <span className="relative z-[1] tracking-tighter -ml-1 md:-ml-3 text-5xl md:text-[140px]">y</span>
            </span>
          </motion.h1>
        </div>
        <p className="text-3xl md:text-5xl lg:text-6xl custome-stroke tracking-regular -mt-4 md:-mt-6">
          LUIS
        </p>
      </div>
    </div>

  );
};

export default Hero;