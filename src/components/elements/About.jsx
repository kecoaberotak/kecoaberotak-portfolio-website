const About = () => {
  return(
    <section id="about" className="bg-biruDark h-screen flex justify-center items-start flex-col p-10">
      <div className="w-full xl:w-[448px] p-3">
        <section className="flex gap-1">
          <h2 className="text-4xl font-bold mb-4 text-putihDark">About Me</h2>
          <div className=" w-8 h-8 bg-transparent border-b-2 border-biruLight animate-pulse"></div>
        </section>

        <p className="text-lg mb-4 text-abuDark">Studying Information Technology at <br className="hidden lg:block" /> <span className="font-semibold">Atma Jaya Yogyakarta University</span>, with focus in Web Development.
        </p>

        <p className="text-lg mb-4 text-abuDark">
          I&#39;m into <span className="font-semibold">front-end development</span> and UI/UX design.  I like to create clean website design.
        </p>

        <p className="text-lg mb-8 text-abuDark md:hidden lg:block">
          Here are some technology <br className="block sm:hidden" /> i have been working with:
        </p>

        <section className="font-semibold flex gap-[30px] text-abuDark flex-wrap md:hidden lg:flex">
          <ul className="list-disc pl-4 marker:text-biruLight">
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
          <ul className="list-disc pl-4 marker:text-biruLight">
            <li>Git</li>
            <li>Figma</li>
            <li>Express.js</li>
          </ul>
          <ul className="list-disc pl-4 marker:text-biruLight">
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;