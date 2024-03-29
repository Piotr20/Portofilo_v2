import React, { useEffect, useRef } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./hero-image";
gsap.registerPlugin(ScrollTrigger);

const HorizontalShowcase = () => {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".carousel__slide");
    const slideTray = document.querySelector(".carousel__slider-tray--horizontal");

    slideTray.addEventListener("mouseup", () => {
      setTimeout(() => {
        for (let slide of slides) {
          let slideActive = slide.getAttribute("tabindex");
          if (slideActive === "0") {
            if (slide.classList.contains("slide-1")) {
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: -100,
                rotation: 0,
                opacity: 30,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-2")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.35,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-3")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-3", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-4")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-5")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-6")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-7", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-7", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
                delay: 0.4,
                ease: "power4.easeOut",
              });
            }
            if (slide.classList.contains("slide-7")) {
              gsap.to(".work-heading-1", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-2", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-3", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-4", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-5", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-6", {
                stagger: 0.03,
                yPercent: 100,
                rotation: 15,
                opacity: 30,
                duration: 0.4,
                ease: "power4.easeOut",
              });
              gsap.to(".work-heading-7", {
                stagger: 0.03,
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
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-2", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-1", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-4", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-5", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-6", {
                stagger: {
                  from: "end",
                  amount: 0.03,
                },
                opacity: 0,
                y: 15,
                duration: 0.1,
                ease: "power4.easeOut",
              });
              gsap.to(".work-project-info-7", {
                stagger: 0.03,
                y: -15,
                opacity: 100,
                duration: 0.4,
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
        image.style.transform = "scale(1.15)";
      });
      image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
      });
    }
  }, []);
  return (
    <section
      data-scroll-section
      data-scroll-sticky
      data-scroll-target
      className="w-full showcase-container bg-black flex-col hidden md:flex"
    >
      <h2
        ref={showcaseRef}
        data-scroll
        data-scroll-call
        className="text-4xl xl:text-6xl font-semibold pl-36 lg:py-12 lg:pb-0 xl:pb-12 text-white"
      >
        My work
      </h2>
      <div className="cursor-pointer font-semibold block w-full relative text-5xl xl:text-7xl 2xl:text-8.5xl 2xl:leading-tight lg:mt-12 xl:mt-0 ">
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-1">I</span>
            <span className="work-heading-1">M</span>
            <span className="work-heading-1">P</span>
            <span className="work-heading-1">A</span>
            <span className="work-heading-1">C</span>
            <span className="work-heading-1">T</span>
            <span className="work-heading-1"> - </span>
            <span className="work-heading-1">C</span>
            <span className="work-heading-1">o</span>
            <span className="work-heading-1">n</span>
            <span className="work-heading-1">n</span>
            <span className="work-heading-1">e</span>
            <span className="work-heading-1">c</span>
            <span className="work-heading-1">t</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-2">S</span>
            <span className="work-heading-2">i</span>
            <span className="work-heading-2">g</span>
            <span className="work-heading-2">u</span>
            <span className="work-heading-2">n</span>
            <span className="work-heading-2">a</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-3">M</span>
            <span className="work-heading-3">a</span>
            <span className="work-heading-3">d</span>
            <span className="work-heading-3">e</span>
            <span className="work-heading-3">4</span>
            <span className="work-heading-3">M</span>
            <span className="work-heading-3">e</span>
            <span className="work-heading-3">n</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-4">S</span>
            <span className="work-heading-4">m</span>
            <span className="work-heading-4">o</span>
            <span className="work-heading-4">k</span>
            <span className="work-heading-4">e</span>
            <span className="work-heading-4">p</span>
            <span className="work-heading-4">i</span>
            <span className="work-heading-4">n</span>
            <span className="work-heading-4">s</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-5">L</span>
            <span className="work-heading-5">e</span>
            <span className="work-heading-5">f</span>
            <span className="work-heading-5">t</span>
            <span className="work-heading-5">&nbsp;O</span>
            <span className="work-heading-5">v</span>
            <span className="work-heading-5">e</span>
            <span className="work-heading-5">r</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-6">B</span>
            <span className="work-heading-6">i</span>
            <span className="work-heading-6">l</span>
            <span className="work-heading-6">l</span>
            <span className="work-heading-6">i</span>
            <span className="work-heading-6">g</span>
            <span className="work-heading-6">&nbsp;a</span>
            <span className="work-heading-6">n</span>
            <span className="work-heading-6">i</span>
            <span className="work-heading-6">m</span>
            <span className="work-heading-6">a</span>
            <span className="work-heading-6">t</span>
            <span className="work-heading-6">i</span>
            <span className="work-heading-6">o</span>
            <span className="work-heading-6">n</span>
          </div>
        </h2>
        <h2 className="work-title pointer-events-none z-10 text-white absolute bottom-1/5 left-1/5 transform -translate-x-1/4">
          <div className="anim-work-title overflow-hidden">
            <span className="work-heading-7">A</span>
            <span className="work-heading-7">r</span>
            <span className="work-heading-7">l</span>
            <span className="work-heading-7">a</span>
          </div>
        </h2>
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={70} totalSlides={7} visibleSlides={1}>
          <Slider style={{ paddingRight: "22.5%", paddingLeft: "22.5%" }}>
            <Slide
              index={0}
              classNameVisible="slide-1"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="h-2/3 w-1/3 relative">
                <AniLink paintDrip hex="#3D59E9" to="/project-1">
                  <div className="  work-image-container w-full h-full image-reveal">
                    <HeroImage company="impact-connect" />
                  </div>
                </AniLink>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-1">Frontend</li>
                    <li className="py-1 work-project-info-1">Backend</li>
                    <li className="py-1 work-project-info-1">UX & UI design</li>
                    <li className="py-1 work-project-info-1">Analytical research</li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-1">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide
              index={1}
              classNameVisible="slide-2"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3 w-1/3 relative  ">
                <AniLink paintDrip hex="#3D59E9" to="/project-2">
                  <div className="  work-image-container w-full h-full image-reveal">
                    <HeroImage company="siguna" />
                  </div>
                </AniLink>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-2">CMS</li>
                    <li className="py-1 work-project-info-2">UX design</li>
                    <li className="py-1 work-project-info-2">Development</li>
                    <li className="py-1 work-project-info-2">Animations</li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-2">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide
              index={2}
              classNameVisible="slide-3"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="h-2/3 w-1/3 relative">
                <AniLink paintDrip hex="#3D59E9" to="/project-3">
                  <div className=" work-image-container  h-full relative z-1 image-reveal">
                    <HeroImage company="made4men" />
                  </div>
                </AniLink>

                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-3">UX & UI design</li>
                    <li className="py-1 work-project-info-3"> Design supervision</li>
                    <li className="py-1 work-project-info-3">Backend </li>
                    <li className="py-1 work-project-info-3">Frontend </li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-3">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide
              classNameVisible="slide-4"
              index={3}
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3  w-1/3 relative  ">
                <AniLink paintDrip hex="#3D59E9" to="/project-4">
                  <div className=" work-image-container w-full h-full image-reveal">
                    <HeroImage company="smokepins" />
                  </div>
                </AniLink>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-4">Development</li>
                    <li className="py-1 work-project-info-4">UX & UI design</li>
                    <li className="py-1 work-project-info-4">Marketing strategy</li>
                    <li className="py-1 work-project-info-4">Web animation</li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-4">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide
              index={4}
              classNameVisible="slide-5"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className=" h-2/3  w-1/3 relative  ">
                <AniLink paintDrip hex="#3D59E9" to="/project-5">
                  <div className=" work-image-container w-full h-full image-reveal">
                    <HeroImage company="leftover" />
                  </div>
                </AniLink>
                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-5">UX & UI design</li>
                    <li className="py-1 work-project-info-5">Research</li>
                    <li className="py-1 work-project-info-5">Frontend </li>
                    <li className="py-1 work-project-info-5">Backend </li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-5">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide
              index={5}
              classNameVisible="slide-6"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="  h-2/3 w-1/3 relative  ">
                <AniLink paintDrip hex="#3D59E9" to="/project-6">
                  <div className=" work-image-container  h-full relative z-1 image-reveal">
                    <HeroImage company="billig-animation" />
                  </div>
                </AniLink>

                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-6">Rebranding</li>
                    <li className="py-1 work-project-info-6"> Development</li>
                    <li className="py-1 work-project-info-6">UX & UI design</li>
                    <li className="py-1 work-project-info-6">Web animation</li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-6">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide
              index={6}
              classNameVisible="slide-7"
              innerClassName="flex items-center justify-center"
              className={``}
            >
              <div className="  h-2/3 w-1/3 relative  ">
                <AniLink paintDrip hex="#3D59E9" to="/project-7">
                  <div className=" work-image-container  h-full relative z-1 image-reveal">
                    <HeroImage company="arla" />
                  </div>
                </AniLink>

                <div className=" w-full h-1/2 absolute quoter-over-left top-1/2 transform -translate-y-1/2">
                  <ul className=" pl-12 text-white md:text-lg xl:text-2xl 2xl:text-3xl font-normal">
                    <li className="py-1 work-project-info-7">UX & UI design</li>
                    <li className="py-1 work-project-info-7">Marketing strategy</li>
                    <li className="py-1 work-project-info-7">Web animation</li>
                    <li className="py-1 work-project-info-7">Development</li>
                  </ul>
                  <div className="pl-12 flex pt-2 xl:pt-8 text-white text-3xl xl:text-4xl work-project-info-7">
                    <ButtonBack className="pr-4 xl:pr-6">
                      <BsArrowLeft className="hover:text-custo-blue transition-colors duration-300" />
                    </ButtonBack>
                    <ButtonNext>
                      <BsArrowRight className="hover:text-custo-blue transition-colors duration-300" />
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
