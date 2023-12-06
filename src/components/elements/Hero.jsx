const Hero = () => {
  return(
    <div className="bg-biruDark h-screen flex justify-center items-center flex-col p-10">
      <div className="w-[423px] h-[423px] rounded-full bg-transparent border-[5px] border-biruLight">
        <img src="/dennis.png" alt="Dennis" className="object-contain"/>
      </div>
    </div>
  );
}

export default Hero;