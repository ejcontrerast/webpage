import React from "react";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Memories from "./assets/components/Memories";
import MessageWall from "./assets/components/MessageWall";
import GameQuiz from "./assets/components/GameQuiz";

const App = () => {
  return (
    <>
      <div className="main m-0 h-screen font-[SayanSans] text-4xl [-webkit-text-stroke:0.5px_#47492e]">
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <Header />
        <Hero />
        <About />
        
        <GameQuiz />
        <MessageWall />
      </div>
    </>
  );
};

export default App;
