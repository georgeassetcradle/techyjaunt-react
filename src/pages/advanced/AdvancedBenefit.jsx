import { bootcampBenefits, FancyUnderline } from "../../resources/resources";
import src from "../../images/icon/achievementimg.jpg";
import { Fade } from "react-reveal";

const AdvancedBenefit = () => {
  return (
    <section className="w-[90%] mx-auto my-16 md:my-20">
      <div className="mx-auto text-center relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          <Fade>
            <div className="rounded-lg md:px-3 order-2 md:order-1">
              <img src={src} alt="" className="rounded-lg w-full h-full" />
            </div>
          </Fade>
          <Fade>
            <div className="order-1 md:order-2 grid place-content-center">
              <h2 className="text-tech-blue relative py-5 text-2xl text-center sm:text-3xl font-bold tracking-tight leading-none md:text-4xl">
                What we offer you!
                <FancyUnderline className="absolute -bottom-0 left-1/2 -translate-x-1/2" />{" "}
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
          </Fade>
        </div>
      </div>
    </section>
  );
};
export default AdvancedBenefit;
