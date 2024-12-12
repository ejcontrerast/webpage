import HoverImage from "./HoverImage";

const Footer = () => {


  return (
    <footer className="bg-[#1d1d1d] text-white text-center p-8 w-full z-10">
      <div className='flex flex-row justify-center items-center text-xl md:text-3xl '>
        <div>
          <p >Made with ❤️</p> 
          <p > by Karen and Ernesto for</p>
          <p className="font-[HappyMonkey] text-sm"> (Click on Luis 🥳)</p>
        </div>
        <HoverImage src="static/memories/sticker.png" alt="Luis upsidedown" soundSrc="static/sounds/raqueltrap.mp3"/>
      </div>
    </footer>
  );
};

export default Footer;