import React, { useEffect, useRef } from "react";
import LongTextBlock from "../components/longText";
import "../styles/styles.scss";
import Header from "../components/layout-elements/header";
import Container from "../components/layout-elements/container";
import HorizontalShowcase from "../components/horizontalShowcase";
import HorizontalShowcaseMobile from "../components/horizontalShowcaseMobile";
import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotiveScroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PersonIntro from "../components/personIntro";
import MoreInfo from "../components/moreAboutMe";
import ContactInfo from "../components/contact-info";
gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
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
    gsap.to(".work-heading-1", {
      scrollTrigger: {
        trigger: ".showcase-container",
        scroller: ".scrollContainer",

        start: "40% center",
      },
      stagger: 0.07,
      yPercent: -100,
      rotation: 0,
      opacity: 100,
      duration: 0.4,
      delay: 0.5,
      ease: "power4.easeOut",
    });
    gsap.to(".work-project-info-1", {
      scrollTrigger: {
        trigger: ".showcase-container",
        scroller: ".scrollContainer",

        start: "40% center",
      },
      stagger: 0.07,
      y: -15,
      opacity: 100,
      duration: 0.2,
      delay: 0.5,
      ease: "power4.easeOut",
    });
    gsap.from(".image-reveal", {
      scrollTrigger: {
        trigger: ".showcase-container",
        scroller: ".scrollContainer",
        start: "40% center",
      },
      stagger: 0.05,
      yPercent: 100,
      rotation: 15,
      opacity: 0,
      duration: 0.2,
      ease: "power4.easeOut",
    });

    gsap.to(".nav-link", {
      scrollTrigger: {
        trigger: ".showcase-container",
        scroller: ".scrollContainer",
        start: "40% center",
        end: "90% top",
        toggleActions: "play reverse play reverse",
      },
      color: "white",
      duration: 0.2,
      ease: "power4.easeOut",
    });

    gsap.from(".about-me-item", {
      scrollTrigger: {
        trigger: ".about-me-container",
        scroller: ".scrollContainer",
        start: "top center",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".contact-item-1", {
      scrollTrigger: {
        trigger: ".contact-container-1",
        scroller: ".scrollContainer",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".contact-item-2", {
      scrollTrigger: {
        trigger: ".contact-container-2",
        scroller: ".scrollContainer",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("load", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    const scrollContainer = document.querySelector(".scrollContainer");
    scrollContainer.addEventListener("mousemove", () => {
      console.log(scrollContainer.getBoundingClientRect());
    });
  }, []);
  return (
    <main ref={scrollRef} className="scrollContainer">
      <Header />
      <Container>
        <LongTextBlock />
      </Container>
      <HorizontalShowcase />
      <HorizontalShowcaseMobile />
      <PersonIntro />
      <MoreInfo />
      <ContactInfo />
    </main>
  );
};

export default IndexPage;
