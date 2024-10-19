import { bootcampBenefits } from "../../resources/resources";
import src from "../../images/icon/achievementimg.jpg"
import { Fade } from "react-reveal";

const AdvancedBenefit = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="py-16 mx-auto text-center relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          <Fade>
            <div className=" grid place-content-center py-10">
              <h2 className="py-5 text-2xl text-center sm:text-3xl font-bold tracking-tight leading-none md:text-4xl">
                Advanced Bootcamp benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                {bootcampBenefits.map((el, i) => (
                  <div className="flex items-center py-2">
                    <i class="ri-arrow-right-s-fill text-blue-500"></i>
                    <p className="text-left">{el}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg md:px-3">
              <img src={src} alt="" className="rounded-lg w-full h-full" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};
export default AdvancedBenefit;
