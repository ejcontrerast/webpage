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
      <div className="main m-0 h-screen font-[SayanSans]">
        <Header />
        <Hero />
        <About />
        <Memories />
        <MessageWall />
        <GameQuiz />
      </div>
    </>
  );
};

export default App;
