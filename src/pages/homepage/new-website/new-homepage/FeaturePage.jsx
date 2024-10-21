import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FancyUnderline, platforms } from "../../../../resources/resources";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";

export const FeatureSlide = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 3000, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {platforms.map((platform, index) => (
          <div className="p-4 focus:outline-none focus:border-none">
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-tech-blue flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-32 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-700">
                {platform.name}
                <a
                  href={platform.link}
                  target="_blank"
                  className="flex text-tech-blue"
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </span>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const FeaturePage = () => {
  return (
    <section className="">
      <div className="w-[90%] mx-auto">
        <Fade bottom>
          <h2 className="mx-auto relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl tts">
            News
            <span className="text-tech-blue relative tts">
              <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              Feature
            </span>
          </h2>
        </Fade>
        <p className="pb-3 font-semibold text-base md:text-2xl md:leading-8 mt-10 leading-7 text-gray-700 text-center">
          We are featured on a couple of prominent tech platforms
        </p>
        <Element name="feature">
          <FeatureSlide />
        </Element>
      </div>
    </section>
  );
};
export default FeaturePage;
