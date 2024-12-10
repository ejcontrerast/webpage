import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="p-4 flex items-center justify-center text-[#002f66] font-extrabold bg-black/15 backdrop-blur-md shadow-md w-full fixed top-0 z-50">
      
        <div className="flex justify-between items-center w-screen lg:w-4/5">
          <div className="inline-flex gap-4">
            <img src='/static/images/CClogo.png' alt="logo" className="w-10 h-10 rounded-full ml-10" />
            <h1 className="text-4xl font-bold text-[--primary-color1]">HPBLuis</h1>
          </div>
          
          <nav className="gap-4 text-4xl text-yellow-400">
            <a href="#memories" className="hover:underline mx-4 [-webkit-text-stroke:0.5px_#47492e]">Memories</a>
            <a href="#messages" className="hover:underline mx-4 [-webkit-text-stroke:0.5px_#47492e]">Messages</a>
            <a href="#game" className="hover:underline ml-4 mr-10 [-webkit-text-stroke:0.5px_#47492e]">Game</a>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
