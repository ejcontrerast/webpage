import React from "react";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center text-[#002f66] font-extrabold bg-white/30 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className=" inline-flex gap-4 ">
        <img src='/static/images/logo_CapsuleCorp.png' alt="logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold">HPB</h1>
      </div>
      
      <nav className="space-x-5 text-xl mb-2">
        <a href="#memories" className="hover:underline">Memories</a>
        <a href="#messages" className="hover:underline">Messages</a>
        <a href="#game" className="hover:underline">Game</a>
      </nav>
    </header>
  );
};
export default Header;
