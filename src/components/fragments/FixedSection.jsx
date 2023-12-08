import Socmed from "../elements/Socmed";

const FixedSection = () => {
  return(
    <section className="relative md:fixed w-full md:w-7/12 min-h-screen inset-0 bg-biruDark flex justify-center flex-col p-10 md:p-[100px]">
      <h1 className=" text-5xl lg:text-6xl font-bold text-putihLight">Dennis <span className="text-biruLight">Fernandes</span></h1>
      <div className="lg:w-[500px] mt-10">
        <p className="text-lg sm:text-xl text-abuDark">Software engineer based in Bogor, Indonesia. <br className="block md:hidden lg:block" />I have interest in front-end development <br className="hidden sm:block md:hidden" />and UI/UX design.
        </p>
      </div>
      <Socmed />
    </section>
  );
};

export default FixedSection;