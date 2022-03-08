import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../components/layout-elements/header";
import ContactInfo from "../components/contact-info";
import Container from "../components/layout-elements/container";
import "../styles/locomotiveScroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-link";
import SEO from "../components/Seo";

import LabsProjects from "../components/labsProjects";
gsap.registerPlugin(ScrollTrigger);

const LabsPage = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".scrollContainer", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("load", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <SEO
        title="Labs"
        description="page with all the casual projects gallery"
        keywords={["design", "quality", "development"]}
      />
      <main ref={scrollRef} className="scrollContainer">
        <Header />
        <Container>
          <section data-scroll-section className=" pt-32 lg:pt-44">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">
              Welcome to labs a dark place where you can see my passion projects. The stuff you can find here
              is too small to be called full blown projects, they are usually small demos of me playing with
              certain technology.
            </h3>
          </section>
          <LabsProjects />
          <section
            data-scroll-section
            className="container w-full px-6 xl:px-20 lg:max-w-3xl xl:max-w-5xl pb-6 md:pb-4 md:-mb-8"
          >
            <h3 className="font-semibold text-2xl 2xl:text-3xl text-center">
              If you want to see some full blown projects projects <br />
              <AniLink
                paintDrip
                hex="#3D59E9"
                className=" underline-custom-hover-blue transition-colors duration-300 hover:text-custo-blue"
                to="/work"
              >
                Go to work
              </AniLink>
            </h3>
          </section>
        </Container>
        <ContactInfo />
      </main>
    </>
  );
};
export default LabsPage;
