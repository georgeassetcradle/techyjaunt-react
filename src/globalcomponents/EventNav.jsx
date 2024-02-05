
import LogoSrc from "../images/techy_jaunt_logo.svg";
import { useState } from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
const EventNav = ({ navclass, openModal }) => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });

  return (
    <div className={navclass}>
      <div className="w-full relative">
        <div className="flex mx-auto w-[90%] sm:w-[80%] justify-between items-center h-fit z-20">
          <a className="w-fit inline-block" href="/">
            <img className="w-28 h-28" src={LogoSrc} alt="" />
          </a>
          <nav
            className={`flex lg:w-[50%] flex-col lg:flex-row justify-evenly absolute right-0 z-10 lg:static top-24 bg-black lg:bg-transparent ${
              openNav ? "w-[70%] sm:w-[50%]" : "w-[0%]"
            } transition-all duration-300 ease-linear`}
          >
            <ul className="flex lg:w-[100%] flex-col lg:flex-row lg:justify-evenly h-screen lg:h-fit top-0 overflow-hidden">
              <li>
                <a
                  href="/"
                  className={`${
                    scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
                  } text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-105 transition-all duration-200 ease-in mt-16 lg:mt-0`}
                >
                  HOME
                </a>
              </li>
              <li className={`block`}>
                <Link
                  to={`about`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={` ${
                    scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
                  } text-center relative cursor-pointer text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-105 transition-all duration-200 ease-in mt-16 lg:mt-0`}
                >
                  ABOUT
                </Link>
              </li>
              <li className={`block`}>
                <Link
                  to={`speakers`}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={` ${
                    scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
                  } text-center relative cursor-pointer text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-105 transition-all duration-200 ease-in mt-16 lg:mt-0`}
                >
                  SPEAKERS
                </Link>
              </li>
              <li className={`block`}>
                <Link
                  to={`contact`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={` ${
                    scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
                  } text-center relative cursor-pointer text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-105 transition-all duration-200 ease-in mt-16 lg:mt-0`}
                >
                  CONTACT US
                </Link>
              </li>
              <li className="lg:hidden">
                <button
                  onClick={openModal}
                  className={`${
                    scrollNumber > 0 ? "text-white lg:text-black" : "text-white"
                  } text-center relative text-base lg:text-xl w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-105 transition-all duration-200 ease-in lg:hidden mt-16 lg:mt-0`}
                >
                  REGISTER
                </button>
              </li>
            </ul>
          </nav>
          <button
            onClick={openModal}
            className="bg-blue-500 p-2 hidden lg:inline-block shadow-md rounded-md text-white relative text-xl hover:scale-105 transition-all duration-200 ease-in "
          >
            REGISTER
          </button>
          <button
            onClick={() => {
              setOpenNav((prev) => {
                return !prev;
              });
            }}
          >
            <i className="ri-menu-line text-3xl lg:hidden"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventNav;
