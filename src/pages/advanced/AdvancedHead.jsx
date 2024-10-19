import { Fade } from "react-reveal";
import { ApplyBtn } from "./AdvancedApply";

const AdvancedHead = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat blue-bg bg-cover bg-gray-700 bg-blend-multiply mb-10">
        <div className="xl:px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
          <Fade bottom>
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome To Techyjaunt Advanced BootCamp
            </h1>
          </Fade>
          <Fade bottom>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Upskill your tech career, gain accountability partners, and
              receive mentorship from top industry experts worldwide.
            </p>
          </Fade>
          <Fade bottom>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Start your lifelong tech journey with TechyJaunt.
            </p>
          </Fade>
          <div className=" mt-5"> 
          <ApplyBtn/>
          </div>
          
        </div>
      </section>
    </>
  );
};
export default AdvancedHead;
