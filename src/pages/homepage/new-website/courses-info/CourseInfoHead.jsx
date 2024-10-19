import Avatars from "../../../../globalcomponents/Avatars";
import { Circle, FancyUnderline } from "../../../../resources/resources";
import src from "../../../../images/launchpad/launchpadimg.webp";
import { Link, NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
const CourseInfoHead = ({ data }) => {
  return (
    <section className="headerbg">
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-0 relative pt-5 w-[90%] ">
        <Circle
          color="#0075FD"
          className=" absolute hidden xl:block top-36 left-[50%]"
        />
        <div className="xl:py-20">
          <Fade bottom>
            <h1 className="text-left tracking-wide lg:leading-[60px] text-4xl lg:text-5xl tts font-semibold">
              <span className="relative inline-block text-tech-blue ">
                Welcome To Techyjaunt
                <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              </span>{" "}
              {data?.courseName} Course
            </h1>
          </Fade>
          <Fade bottom>
            <p className="text-base md:text-lg md:leading-8 my-10 leading-7 text-gray-700">
              {data?.writeUp}
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex justify-start">
              <NavLink
                to="/launchpad/register"
                className="tech-shadow inline-block text-xl bg-tech-blue py-3 px-4 rounded-lg text-white mb-10 hover:bg-gray-500 transition-all ease-linear duration-200"
              >
                Apply Now<i className="ri-arrow-right-line ml-2"></i>
              </NavLink>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex items-center flex-wrap">
              <Avatars />
              <p className="text-xs lg:text-sm font-light text-gray-700">
                Over 5K+ professionals trained.
              </p>
            </div>
          </Fade>
        </div>
        <div className="relative md:flex mx-auto xl:mx-0">
          <img
            src={src}
            loading="lazy"
            alt=""
            className="mx-auto md:mx-0 h-[40%] md:h-[70%] xl:h-[80%]"
          />
          <div className="mt-10 md:mt-0 md:h-[70%] xl:h-[80%] flex flex-col justify-center gap-8 md:gap-10 xl:absolute top-0 bg-black left-[55%] -right-[5%] px-8 py-10 sm:px-8 md:py-8 rounded-2xl md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl">
            <a
              href={data.url}
              download={data.pdf}
              target="_blank"
              className="text-center inline-block bg-[#FBAF1B] text-white hover:text-[#FBAF1B] hover:bg-white transition-all ease-linear duration-200 rounded-md py-3 font-medium text-lg sm:text-xl"
            >
              Download Brochure
            </a>
            <div>
              <p className="text-white sm:text-xl">
                Start your Tech journey TODAY!
              </p>
              <NavLink
                to="/launchpad/register"
                className="text-center inline-block bg-white text-black w-full rounded-md py-3 font-medium text-lg sm:text-2xl hover:text-white hover:bg-tech-blue transition-all ease-linear duration-200"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseInfoHead;
