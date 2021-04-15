import React, { useEffect, useRef } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HorizontalShowcaseMobile = () => {
  const sliderRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <section className="w-full md:h-screen bg-black flex md:hidden items-center">
      <div className="cursor-pointer flex items-center w-full h-108">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={200}
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
                  innerClassName="flex items-center  "
                  className={`  ${i % 2 === 1 ? "" : ""}`}
                  key={i}
                  index={i}
                >
                  <div className="bg-red-600 -mt-12 slider-container box">
                    TEXT
                  </div>
                </Slide>
              ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
export default HorizontalShowcaseMobile;
