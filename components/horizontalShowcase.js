import React, { useEffect, useRef } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HorizontalShowcase = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const Slides = document.querySelectorAll(".carousel__slide ");
    console.log(Slides);
    Slides[0].style.marginLeft = "37.5vw";
  }, []);
  return (
    <section className="w-full h-screen bg-black flex">
      <div className="cursor-pointer block w-full h-108">
        <CarouselProvider
          naturalSlideWidth={160}
          naturalSlideHeight={102}
          totalSlides={4}
          visibleSlides={1.25}
        >
          <Slider style={{ paddingLeft: "0" }}>
            {Array(4)
              .fill("")
              .map((a, i) => (
                <Slide
                  ref={sliderRef}
                  style={{
                    width: "25vw",
                    marginLeft: "calc(37.5vw - 7.2rem )",
                  }}
                  innerClassName="flex items-center justify-center "
                  className={` re ${
                    i % 2 === 1 ? "bg-yellow-300" : "bg-green-300"
                  }`}
                  key={i}
                  index={i}
                >
                  <div className="bg-red-600 box h-2/3 ">TEXT</div>
                </Slide>
              ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
export default HorizontalShowcase;
