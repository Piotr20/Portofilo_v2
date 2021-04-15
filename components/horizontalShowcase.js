import React, { useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HorizontalShowcase = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    // let slides = document.querySelectorAll(".carousel__slide");
    // let activeTabs = [];
    // for (let i = 0; i < slides.length; i++) {
    //   if (slides[i].getAttribute("tabIndex") == 0) {
    //     activeTabs.push(slides[i]);
    //     console.log(activeTabs[0]);
    //   }
    // }
  }, []);
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-call
      id="js-target"
      className="w-full md:h-screen bg-black hidden md:flex items-center"
    >
      <div className="cursor-pointer flex items-center w-full h-108">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={5}
          visibleSlides={2}
        >
          <Slider style={{ paddingLeft: "0" }}>
            {Array(4)
              .fill("")
              .map((a, i) => (
                <Slide
                  ref={sliderRef}
                  style={{
                    width: "calc(50vw)",
                    // marginLeft: "calc(37.5vw - 7.2rem )",
                  }}
                  innerClassName="flex items-center "
                  className={`  ${i % 2 === 1 ? "" : ""}`}
                  classNameVisible="works"
                  classNameHidden="opake"
                  key={i}
                  index={i}
                >
                  <div
                    data-scroll
                    className="bg-red-600 grow-if-active slider-container box"
                  >
                    TEXT
                    <div className="h-32 w-32 bg-yellow-500 ml-20 mt-40 check">
                      <ButtonBack children="Back" />
                      <ButtonNext children="Next" />
                    </div>
                  </div>
                </Slide>
              ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
export default HorizontalShowcase;
