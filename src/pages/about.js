import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../components/layout-elements/header";
import Container from "../components/layout-elements/container";
import MyToolkit from "../components/toolkit";
import "../styles/locomotiveScroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutIntro from "../components/aboutIntroSection";
import LongTextAbout from "../components/longTextAbout";
import SkillsShowreel from "../components/skillShowreel";
import Cv from "../components/cv";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".scrollContainer", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
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
      pinType: document.querySelector(".scrollContainer").style.transform
        ? "transform"
        : "fixed",
    });
    let heroTextAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-trigger",
        markers: false,
        scroller: ".scrollContainer",
      },
    });
    heroTextAnim.from(".anim-hero-title__content", {
      stagger: 0.03,
      yPercent: 100,
      rotation: 15,
      opacity: 30,
      duration: 0.3,
      ease: "power4.easeOut",
    });
    gsap.from(".skills-item-1", {
      scrollTrigger: {
        trigger: ".skills-container-1",
        scroller: ".scrollContainer",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".skills-item-2", {
      scrollTrigger: {
        trigger: ".skills-container-2",
        scroller: ".scrollContainer",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".toolkit-item", {
      scrollTrigger: {
        trigger: ".toolkit-section",
        scroller: ".scrollContainer",
        start: "top 60%",
        markers: false,
      },
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".cv-item", {
      scrollTrigger: {
        trigger: ".cv-container",
        scroller: ".scrollContainer",
        start: "top 70%",
        markers: false,
      },
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("load", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }, []);
  return (
    <main ref={scrollRef} className="scrollContainer">
      <Header />
      <Container>
        <AboutIntro />
        <LongTextAbout />
        <SkillsShowreel />{" "}
      </Container>
      <MyToolkit />
      <Container>
        <Cv />
      </Container>
    </main>
  );
};
export default AboutPage;
