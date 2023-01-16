import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotiveScroll.css";
import React, { useEffect, useRef } from "react";
import SEO from "../components/Seo";
import Header from "../components/layout-elements/header";
import Project7Intro from "../components/project-7-elements/project7Intro";
import HeroImageArla from "../components/project-7-elements/heroImageArla";
import Project7Content from "../components/project-7-elements/project7Content";
import Project7Tools from "../components/project-7-elements/project7Tools";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project7 = () => {
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
        title="Project 7"
        description="Project number 7 page"
        keywords={["design", "quality", "development"]}
      />
      <main ref={project1Ref} className="scrollContainer">
        <Header />
        <HeroImageArla />
        <Project7Intro />
        <Project7Content />
        <Project7Tools />
      </main>
    </>
  );
};

export default Project7;
