const Hero = () => {
  return(
    <div className="bg-biruDark h-screen justify-center items-center flex-col p-10 hidden sm:flex">
      <div className="w-[423px] h-[423px] rounded-full bg-transparent border-[5px] border-biruLight overflow-hidden">
        <img src="/dennis.png" alt="Dennis"/>
      </div>
    </div>
  );
}

export default Hero;