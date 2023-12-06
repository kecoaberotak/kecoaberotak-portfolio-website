// const About = () => {
//   return(
//     <div className="bg-salmon h-screen flex justify-center items-start flex-col p-10">
//       <section className="flex gap-1">
//         <h2 className="text-4xl font-bold mb-4 text-hitamDark">About Me</h2>
//         <div className=" w-8 h-8 bg-transparent border-b-2 border-hitamDark"></div>
//       </section>
//       <p className="text-lg mb-4 text-hitamLight">Studying Information Technology at 
//         <br /><span className="font-semibold">Atma Jaya Yogyakarta University</span>, with focus
//         <br />in Web Development.
//       </p>
//       <p className="text-lg mb-4 text-hitamLight">
//         I&#39;m into <span className="font-semibold">frontend development</span> and UI/UX design. 
//         <br />I like to create clean website design.
//       </p>
//       <p className="text-lg mb-8 text-hitamLight">
//         Here are some technology i have been 
//         <br />working with:
//       </p>
//       <section className="font-semibold flex gap-[30px]">
//         <ul className="list-disc pl-4">
//           <li>Javascript</li>
//           <li>React.js</li>
//           <li>Node.Js</li>
//         </ul>
//         <ul className="list-disc pl-4">
//           <li>Git</li>
//           <li>Figma</li>
//           <li>Express.Js</li>
//         </ul>
//         <ul className="list-disc pl-4">
//           <li>MongoDB</li>
//           <li>Firebase</li>
//           <li>Tailwind CSS</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

const About = () => {
  return(
    <div className="bg-biruDark h-screen flex justify-center items-start flex-col p-10">
      <section className="flex gap-1">
        <h2 className="text-4xl font-bold mb-4 text-putihDark">About Me</h2>
        <div className=" w-8 h-8 bg-transparent border-b-2 border-biruLight"></div>
      </section>
      <p className="text-lg mb-4 text-abuDark">Studying Information Technology at 
        <br /><span className="font-semibold">Atma Jaya Yogyakarta University</span>, with focus
        <br />in Web Development.
      </p>
      <p className="text-lg mb-4 text-abuDark">
        I&#39;m into <span className="font-semibold">frontend development</span> and UI/UX design. 
        <br />I like to create clean website design.
      </p>
      <p className="text-lg mb-8 text-abuDark">
        Here are some technology i have been 
        <br />working with:
      </p>
      <section className="font-semibold flex gap-[30px] text-abuDark">
        <ul className="list-disc pl-4 marker:text-biruLight">
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.Js</li>
        </ul>
        <ul className="list-disc pl-4 marker:text-biruLight">
          <li>Git</li>
          <li>Figma</li>
          <li>Express.Js</li>
        </ul>
        <ul className="list-disc pl-4 marker:text-biruLight">
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
};

export default About;