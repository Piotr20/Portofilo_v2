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
      <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold mb-4">
        My references
      </h1>
      <div className="lg:hidden">
        <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={26} totalSlides={2} visibleSlides={1}>
          <Slider>
            <Slide
              index={0}
              classNameVisible=""
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="h-full w-full relative ">
                <h3 className="text-lg lg:text-2xl italic">
                  <span className="">"</span>
                  Piotr has worked as an intern for 10 weeks at Impact, continuing to work on his bachelor
                  thesis with us as partners afterwards. Piotr has shown great commitment and interest
                  throughout, acting in a professional and ambitious manner. Working on internal projects, he
                  has demonstrated good understanding of technologies like React, Next.js, TypeScript while
                  here, and added to this knowledge by being eager to learn and ask questions. In addition,
                  Piotr was helpful to our other interns, ready to assist if needed. Overall, we were very
                  pleased with having Piotr with us and are happy to recommend him, both as a developer and as
                  a colleague, since he is just a very nice guy.
                  <span>"</span>
                </h3>
                <h4 className="text-lg lg:text-2xl mt-4 lg:mt-6 font-bold">
                  Rasmus Hjorth
                  <br /> Lead Frontend Engineer, IMPACT A/S
                </h4>
              </div>
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
      </div>
      <div className="hidden lg:block">
        <CarouselProvider naturalSlideWidth={16} naturalSlideHeight={4.5} totalSlides={2} visibleSlides={1}>
          <Slider>
            <Slide
              index={0}
              classNameVisible=""
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="h-full w-full relative">
                <h3 className="text-lg lg:text-2xl italic">
                  <span className="">"</span>
                  Piotr has worked as an intern for 10 weeks at Impact, continuing to work on his bachelor
                  thesis with us as partners afterwards. Piotr has shown great commitment and interest
                  throughout, acting in a professional and ambitious manner. Working on internal projects, he
                  has demonstrated good understanding of technologies like React, Next.js, TypeScript while
                  here, and added to this knowledge by being eager to learn and ask questions. In addition,
                  Piotr was helpful to our other interns, ready to assist if needed. Overall, we were very
                  pleased with having Piotr with us and are happy to recommend him, both as a developer and as
                  a colleague, since he is just a very nice guy.
                  <span>"</span>
                </h3>
                <h4 className="text-lg lg:text-2xl mt-4 lg:mt-6 font-bold">
                  Rasmus Hjorth
                  <br /> Lead Frontend Engineer, IMPACT A/S
                </h4>
              </div>
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
      </div>
    </section>
  );
};
export default Recomendations;
