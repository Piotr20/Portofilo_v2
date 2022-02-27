import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../components/layout-elements/header";
import ContactInfo from "../components/contact-info";
import Container from "../components/layout-elements/container";
import "../styles/locomotiveScroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkIntro from "../components/workIntro";
import SEO from "../components/Seo";
import WorkProjects from "../components/workProjects";
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
    gsap.from(".project-item-1", {
      scrollTrigger: {
        trigger: ".project-container-1",
        scroller: ".scrollContainer",
        start: "top 65%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".project-item-2", {
      scrollTrigger: {
        trigger: ".project-container-2",
        scroller: ".scrollContainer",
        start: "top 65%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".project-item-3", {
      scrollTrigger: {
        trigger: ".project-container-3",
        scroller: ".scrollContainer",
        start: "top 65%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2,
      ease: "power4.easeOut",
    });
    gsap.from(".project-item-4", {
      scrollTrigger: {
        trigger: ".project-container-4",
        scroller: ".scrollContainer",
        start: "top 65%",
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
  }, []);
  return (
    <>
      <SEO title="Labs" description="page with all the casual projects gallery" keywords={["design", "quality", "development"]} />
      <main ref={scrollRef} className="scrollContainer">
        <Header />
        <Container>
          <WorkIntro />
          <WorkProjects />
        </Container>
        <ContactInfo />
      </main>
    </>
  );
};
export default LabsPage;
