import Hero from "../elements/Hero";
import About from "../elements/About";

const ScrollSection = () => {
  return(
    <section className="w-full md:w-5/12 ml-auto">
      <Hero/>
      <About/>
      <div className="bg-biruDark h-screen flex justify-center items-center flex-col p-10">
        <h2 className="text-4xl mb-5">I love my humans</h2>
        <p className="mb-5">My humans are super special to me, and I love them</p>
      </div>
    </section>
  );
};

export default ScrollSection;