
const Header = () => {
  return (
    <nav id="header" className="w-full max-w-full">
      <div className="w-full max-w-full p-2 md:p-4 flex items-center justify-center text-[#002f66] font-extrabold bg-black/15 backdrop-blur-md shadow-md fixed top-0 z-50">
        <div className="flex flex-row justify-between items-center w-full max-w-full md:w-4/5 lg:w-3/5">
          <div className="inline-flex gap-4 items-center">
            <img src="/static/images/CClogo.png" alt="logo" className="w-5 h-5 md:w-10 md:h-10 rounded-full ml-2 md:ml-10 " />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[--primary-color1]">HPBLuis</h1>
          </div>
          
          <div className="text-xl md:text-2xl lg:text-4xl text-yellow-400 flex flex-wrap">
            <a href="#memories" className="hover:underline mr-2 md:mr-4 [-webkit-text-stroke:0.5px_#47492e]">Memories</a>
            <a href="#game" className="hover:underline mr-2 md:mr-4 [-webkit-text-stroke:0.5px_#47492e]">Game</a>
            <a href="#messages" className="hover:underline mr-2 md:mr-4 [-webkit-text-stroke:0.5px_#47492e]">Messages</a>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Header;
