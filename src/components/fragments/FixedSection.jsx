import Socmed from "../elements/Socmed";

const FixedSection = () => {
  return(
    <section className="relative md:fixed w-full md:w-7/12 min-h-screen inset-0 bg-biruDark flex justify-center flex-col p-[100px]">
      <h1 className="md:text-6xl font-bold text-putihLight">Dennis <span className="text-hitamDark sm:text-salmon md:text-green-400 lg:text-biruLight">Fernandes</span></h1>
      <p className="md:text-[22px] text-abuDark mt-10">Software engineer based in Bogor, Indonesia. 
        <br />I have interest in front-end development
        <br />and UI/UX design.
      </p>
      <Socmed />
    </section>
  );
};

export default FixedSection;