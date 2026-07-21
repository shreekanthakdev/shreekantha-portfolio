import Hero from "./Hero";
import About from "./About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "./Contact";
import Journey from "./Journey";
import StatsSection from "./StatsSection";

const HomePage = () => {
  return (
    <div className="space-y-6 md:space-y-10">
      <Hero />
      <About />
      <StatsSection />
      <Technologies />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
