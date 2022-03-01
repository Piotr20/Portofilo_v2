import React, { useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./hero-image";

const HorizontalShowcaseMobile = () => {
  useEffect(() => {}, []);
  return (
    <section data-scroll-section className="w-full h-screen-75 md:h-screen bg-black  md:hidden ">
      <h2 className="text-white text-4xl pt-8 pl-8">Work</h2>
      <div className="cursor-pointer w-full ">
        <CarouselProvider naturalSlideWidth={11} naturalSlideHeight={14} totalSlides={4} visibleSlides={1}>
          <Slider>
            <Slide innerClassName="flex justify-center pt-12 relative" index={0}>
              <div className=" bg-red-600 h-2/3 w-2/3   ">
                <AniLink paintDrip hex="#3D59E9" to="/project-1">
                  <div className=" bg-custo-blue">
                    <HeroImage company="siguna" />
                  </div>
                </AniLink>
                <h2 className="absolute bottom-0 text-white text-3xl w-2/3 text-center">Siguna</h2>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pt-12 relative" index={0}>
              <div className=" bg-red-600 h-2/3 w-2/3   ">
                <AniLink paintDrip hex="#3D59E9" to="/project-4">
                  <div className=" bg-custo-blue">
                    <HeroImage company="billig-animation" />
                  </div>
                </AniLink>
                <h2 className="absolute bottom-0 text-white text-3xl w-2/3 text-center">Billig animation</h2>
              </div>
            </Slide>

            <Slide innerClassName="flex justify-center pt-12 relative" index={0}>
              <div className=" bg-red-600 h-2/3 w-2/3   ">
                <AniLink paintDrip hex="#3D59E9" to="/project-2">
                  <div className=" bg-custo-blue">
                    <HeroImage company="smokepins" />
                  </div>
                </AniLink>
                <h2 className="absolute bottom-0 text-white text-3xl w-2/3 text-center">Smokepins</h2>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pt-12 relative" index={0}>
              <div className=" bg-red-600 h-2/3 w-2/3   ">
                <AniLink paintDrip hex="#3D59E9" to="/project-3">
                  <div className=" bg-custo-blue">
                    <HeroImage company="arla" />
                  </div>
                </AniLink>
                <h2 className="absolute bottom-0 text-white text-3xl w-2/3 text-center">Arla</h2>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
export default HorizontalShowcaseMobile;
