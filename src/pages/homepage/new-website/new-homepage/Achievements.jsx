import {
  achievementIcons,
  FancyUnderline,
  Star,
} from "../../../../resources/resources";
import icon1 from "../../../../images/icon/achievementimg.jpg";
import { Fade } from "react-reveal";
import CountUpTimer from "../../../../hooks/CountUpTimer";
const Achievements = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-20 xl:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col self-center">
          <div className="grid grid-cols-2 gap-y-5">
            <Fade bottom>
              <h2 className="w-fit col-span-2 mb-5 relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-start whitespace-nowrap tts">
                Our{" "}
                <span className="text-tech-blue tts">
                  <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2 scale-75" />{" "}
                  Achievements
                </span>
              </h2>
            </Fade>
            {achievementIcons.map((el) => {
              return (
                <div className="flex items-center">
                  <img
                    src={el.img}
                    alt=""
                    className="w-16 md:w-20 h-full p-3"
                  />
                  <div className="ml-1 md:ml-5">
                    <CountUpTimer
                      containerClass="flex flex-col"
                      numberClass="font-bold text-2xl md:text-2xl xl:text-4xl text-gray-900 "
                      titleClass="text-gray-700 text-xs md:text-base xl:text-2xl"
                      maxValue={el.num}
                      interval={el.num <= 10 ? el.num / 1 : el.num / 10}
                      title={el.value}
                      intervalNum={100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid justify-items-center relative">
          <Star className="absolute bottom-24 -left-3 scale-[1.5] md:scale-[2] -rotate-12" />
          <img
            src={icon1}
            alt=""
            loading="lazy"
            className="w-full xl:w-[95%] h-full xl:h-[95%] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Achievements;
