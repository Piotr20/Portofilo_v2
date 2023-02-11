import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
gsap.registerPlugin(ScrollTrigger);

const Recomendations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {}, []);
  return (
    <section data-scroll-section className="text-trigger">
      <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={9} totalSlides={2} visibleSlides={1}>
        <Slider>
          <Slide
            index={0}
            classNameVisible=""
            innerClassName="flex items-center justify-center"
            className={``}
          >
            <div className="h-full w-full relative ">Hello</div>
          </Slide>
          <Slide
            index={1}
            classNameVisible=""
            innerClassName="flex items-center justify-center"
            className={``}
          >
            <div className="h-full w-full relative bg-yellow-500">Hello</div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </section>
  );
};
export default Recomendations;
