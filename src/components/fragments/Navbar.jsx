import { useState } from "react";

const Navbar = () => {
  const [navOption, setNavOption] = useState('navbar-normal')

  window.onscroll = function() {
    const main = document.querySelector('.main');
    const fixedPos = main.offsetTop;

    window.scrollY > fixedPos ? setNavOption('navbar-fixed') : setNavOption('navbar-normal');
    console.log(navOption);
  }

  return(
    <nav className={`${navOption}`}>
      <ul className="flex gap-6 md:mr-16 p-5 md:text-lg lg:text-xl font-bold">
        <li className="hover:text-biruLight duration-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-biruLight duration-500">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;