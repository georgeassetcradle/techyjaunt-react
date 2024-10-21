import { NavLink } from "react-router-dom";
import logoSrc from "../images/techy_jaunt_logo.svg";
import {
  CourseSection,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
  WhatsappIcon,
} from "../resources/resources";
import GlobalText from "./GlobalText";
import { useState } from "react";
import NewsLetter from "./Newsletter";
import { Link } from "react-scroll";
const FooterSection = () => {
  return (
    <footer class="bg-gray-50">
      <div className="w-[90%] pt-20 pb-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <NavLink className="font-semibold text-tech-blue text-4xl md:text-5xl">
              Techyjaunt
            </NavLink>

            <p className="text-[#6D737A] text-base my-5">
              We are a community that educates and trains tech enthusiasts in
              emerging technologies, guiding Africans into tech and creating
              products to improve the world.
            </p>
            <p className="text-[#6D737A]">
              Email:{" "}
              <a href="mailto:Support@techyjaunt.com" className="hover:text-tech-blue duration-200 ease-linear transition-all">support@techyjaunt.com</a>
            </p>
            <div className="flex gap-5 mt-5">
              {/* twitter */}
              <TwitterIcon />
              {/* linkedin */}
              <LinkedinIcon />
              {/* Telegram */}
              <TelegramIcon />
              {/* instagram */}
              <InstagramIcon />
              {/* whatsapp */}
              <WhatsappIcon />
            </div>
          </div>
          <div className="lg:justify-self-center">
            <h4 className="font-semibold text-xl">Explore</h4>
            <ul className="text-[#6D737A] flex flex-col gap-5 mt-5">
              <li>
                <NavLink to="/" className="cursor-pointer hover:text-tech-blue transition-all ease-linear duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/launchpad"
                  className="cursor-pointer hover:text-tech-blue transition-all ease-linear duration-300"
                >
                  Launchpad
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://medium.com/@techyJaunt/"
                  target="_blank"
                  className="cursor-pointer hover:text-tech-blue transition-all ease-linear duration-300"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:justify-self-center">
            <h4 className="font-semibold text-xl">Courses</h4>
            <ul className="text-[#6D737A] flex flex-col gap-5 mt-5">
              {CourseSection.map((el) => {
                return (
                  <li>
                    <NavLink
                      to={`/course/${el.linkName}`}
                      className="inline-block hover:text-tech-blue transition-all ease-linear duration-300"
                    >
                      {el.fullName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Subscribe</h4>
            <p className="text-[#6D737A]">
              Stay informed about happenings in the African tech space
            </p>
            <NewsLetter />
          </div>
        </div>
        <p className="text-[#6D737A] text-center mt-20 text-base md:text-lg">
          {" "}
          <span className="text-tech-blue">&copy;</span> Techyjaunt 2024. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
