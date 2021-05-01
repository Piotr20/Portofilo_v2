import React, { useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);
const HorizontalShowcase = () => {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".carousel__slide");
    const slideTray = document.querySelector(
      ".carousel__slider-tray--horizontal"
    );

    slideTray.addEventListener("mouseup", () => {
      setTimeout(() => {
        for (let slide of slides) {
          let slideActive = slide.getAttribute("tabindex");
          if (slideActive === "0") {
            if (slide.classList.contains("hey1")) {
              gsap.to(".work-heading-3", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-1", {
                stagger: 0.07,
                yPercent: -100,
                rotation: 0,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                y: 15,
                opacity: 0,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                y: 15,
                opacity: 0,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                y: 15,
                opacity: 0,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: 0.07,
                y: -15,
                opacity: 100,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("hey2")) {
              gsap.to(".work-heading-1", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.07,
                yPercent: -100,
                rotation: 0,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: 0.07,
                y: -15,
                opacity: 100,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("hey3")) {
              gsap.to(".work-heading-1", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.07,
                yPercent: -100,
                rotation: 0,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: 0.07,
                y: -15,
                opacity: 100,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("hey4")) {
              gsap.to(".work-heading-1", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.05,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.07,
                yPercent: -100,
                rotation: 0,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.07,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: 0.07,
                y: -15,
                opacity: 100,
                duration: 0.2,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
          } else {
            slide.style.backgroundColor = "transparent";
          }
        }
      }, 400);
    });
    const workImages = document.querySelectorAll(".work-image-container");
    for (let image of workImages) {
      image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.25)";
      });
      image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
      });
    }
  }, []);
  return (
    <section className="w-full showcase-container h-screen bg-black flex-col justify-center">
      <h2
        ref={showcaseRef}
        className=" text-4xl xl:text-6xl font-semibold pl-32 py-12 text-white"
      >
        My work
      </h2>
      <div className="cursor-pointer font-semibold block w-full relative text-9xl ">
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-1">S</span>
            <span className="work-heading-1">i</span>
            <span className="work-heading-1">g</span>
            <span className="work-heading-1">u</span>
            <span className="work-heading-1">n</span>
            <span className="work-heading-1">a</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-2">S</span>
            <span className="work-heading-2">m</span>
            <span className="work-heading-2">o</span>
            <span className="work-heading-2">k</span>
            <span className="work-heading-2">e</span>
            <span className="work-heading-2">p</span>
            <span className="work-heading-2">i</span>
            <span className="work-heading-2">n</span>
            <span className="work-heading-2">s</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-3">A</span>
            <span className="work-heading-3">r</span>
            <span className="work-heading-3">l</span>
            <span className="work-heading-3">a</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-4">B</span>
            <span className="work-heading-4">i</span>
            <span className="work-heading-4">l</span>
            <span className="work-heading-4">l</span>
            <span className="work-heading-4">i</span>
            <span className="work-heading-4">g</span>
            <span className="work-heading-4">&nbsp;a</span>
            <span className="work-heading-4">n</span>
            <span className="work-heading-4">i</span>
            <span className="work-heading-4">m</span>
            <span className="work-heading-4">a</span>
            <span className="work-heading-4">t</span>
            <span className="work-heading-4">i</span>
            <span className="work-heading-4">o</span>
            <span className="work-heading-4">n</span>
          </div>
        </h2>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={70}
          totalSlides={4}
          visibleSlides={1}
        >
          <Slider style={{ paddingRight: "22.5%", paddingLeft: "22.5%" }}>
            <Slide
              index={0}
              classNameVisible="hey1"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="  h-2/3 w-1/3 relative  ">
                <div className=" bg-blue-700 work-image-container  h-full relative z-1 image-reveal">
                  <img
                    src="https://github.com/Piotr20/Portofilo_v2/blob/main/src/images/siguna-logo.jpg"
                    alt="I dont work"
                  />
                </div>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-2xl xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-1">CMS</li>
                    <li className="py-1 work-project-info-1">UX design</li>
                    <li className="py-1 work-project-info-1">Development</li>
                    <li className="py-1 work-project-info-1">Animations</li>
                  </ul>
                  <div className="pl-12 flex pt-8 text-white text-3xl xl:text-4xl work-project-info-1">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide
              classNameVisible="hey2"
              index={1}
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3 w-1/3 relative  ">
                <div className=" bg-blue-700 work-image-container w-full h-full image-reveal"></div>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-2xl xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-2">Development</li>
                    <li className="py-1 work-project-info-2">UX & UI design</li>
                    <li className="py-1 work-project-info-2">
                      Marketing strategy
                    </li>{" "}
                    <li className="py-1 work-project-info-2">Web animation</li>
                  </ul>
                  <div className="pl-12 flex pt-8 text-white text-3xl xl:text-4xl work-project-info-2">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide
              index={2}
              classNameVisible="hey3"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3 w-1/3 relative  ">
                <div className=" bg-blue-700 work-image-container w-full h-full image-reveal"></div>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-2xl xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-3">Development</li>{" "}
                    <li className="py-1 work-project-info-3">Web animation</li>
                    <li className="py-1 work-project-info-3">
                      Marketing strategy
                    </li>
                    <li className="py-1 work-project-info-3">UX & UI design</li>
                  </ul>
                  <div className="pl-12 flex pt-8 text-white text-3xl xl:text-4xl work-project-info-3">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide
              index={3}
              classNameVisible="hey4"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3 w-1/3 relative  ">
                <div className=" bg-blue-700 work-image-container w-full h-full image-reveal"></div>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-2xl xl:text-3xl font-normal">
                    {" "}
                    <li className="py-1 work-project-info-4">Rebranding</li>
                    <li className="py-1 work-project-info-4">Development</li>
                    <li className="py-1 work-project-info-4">UX & UI design</li>
                    <li className="py-1 work-project-info-4">Web animation</li>
                  </ul>
                  <div className="pl-12 flex pt-8 text-white text-3xl xl:text-4xl work-project-info-4">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};
export default HorizontalShowcase;