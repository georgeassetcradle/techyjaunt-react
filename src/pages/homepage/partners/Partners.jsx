import { Fade, Zoom } from "react-reveal";
import {
  FancyUnderline,
  PartnerImg,
  PartnerImg1,
  PartnerImg2,
} from "../../../resources/resources";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = ({ isEvent, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % testimonialInfo.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // const options = {
  //   loop: true,
  //   margin: 10,
  //   // nav: true,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: false,
  //   items: width < 350 ? 3 : width < 430 ? 4 : 7, // Number of items you want to show at a time
  //   // navText: [`<p className="text-2xl">preev</p>`,`<p className="text-2xl"  >nextii</p>`],
  // };
  return (
    <>
      {/* <div className="carousel-container h-full w-[90%] mx-auto">
        <div
          className="carousel-slides h-full grid grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {PartnerImg1.map((el, index) => (
            <img src={el.src} className="w"/>
          ))}
        </div>
      </div> */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {PartnerImg.map((el) => {
          return (
            <>
              <WithStyles
                description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
                headline="w3js.com - web front-end studio"
                image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              />

              <img key={el.id} src={el.src} alt="" />
            </>
          );
        })}

        {/* <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 1"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  /> */}
      </Carousel>
    </>
  );
};
export default Partners;
