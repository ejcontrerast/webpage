import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import MessageWall from "./assets/components/MessageWall";
import GameQuiz from "./assets/components/GameQuiz";
import MasonryGrid from "./assets/components/MasonryGrid";
import Footer from "./assets/components/Footer";
import { PageTop } from "./assets/components/PageTop";

const App = () => {
  return (
    <>
      <div className="main m-0 h-screen w-full font-[SayanSans] text-4xl [-webkit-text-stroke:0.5px_#47492e]">
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <Header />
        <PageTop />
        <Hero />
        <About />
        <MasonryGrid />
        <GameQuiz />
        <MessageWall />
        <Footer />
      </div>
    </>
  );
};

export default App;
