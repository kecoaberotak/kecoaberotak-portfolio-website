import Hero from "../elements/Hero";
import About from "../elements/About";
import Projects from "../elements/Projects";

const ScrollSection = () => {
  return(
    <section className="w-full md:w-5/12 ml-auto">
      <Hero/>
      <About/>
      <Projects/>
    </section>
  );
};

export default ScrollSection;