import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotiveScroll.css";
import React, { useEffect, useRef } from "react";
import SEO from "../components/Seo";
import Header from "../components/layout-elements/header";
import Project3Intro from "../components/project-3-elements/project3Intro";
import HeroImageM4M from "../components/project-3-elements/heroImageM4M";
import Project3Content from "../components/project-3-elements/project3Content";
import Project3Tools from "../components/project-3-elements/project3Tools";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project5 = () => {
  const project1Ref = useRef(null);
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: project1Ref.current,
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
    }); // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("load", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <SEO
        title="Project 3"
        description="Project number 3 page"
        keywords={["design", "quality", "development"]}
      />
      <main ref={project1Ref} className="scrollContainer">
        <Header />
        <HeroImageM4M />
        <Project3Intro />
        <Project3Content />
        <Project3Tools />
      </main>
    </>
  );
};

export default Project5;
