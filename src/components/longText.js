import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LongTextBlock = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let heroTextAnim = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        markers: false,
        start: "-100%",
        end: "-30%",
      },
    });
    heroTextAnim.from(".anim-hero-title__content", {
      stagger: 0.03,
      yPercent: 100,
      rotation: 15,
      opacity: 30,
      duration: 0.4,
      delay: 0.5,
      ease: "power4.easeOut",
    });
  }, []);
  return (
    <section data-scroll-section className="container">
      <div className="font-semibold mb-32 pt-32 ml-20 lg:pt-72 text-black text-6xl md:text-7xl lg:text-9xl 2xl:text-11xl ">
        <h1 ref={sectionRef} className="hero-title">
          <div className="anim-hero-title overflow-hidden">
            <span className="anim-hero-title__content">I</span>
            <span className="anim-hero-title__content">'</span>
            <span className="anim-hero-title__content">m&nbsp;</span>
            <span className="anim-hero-title__content">j</span>
            <span className="anim-hero-title__content">u</span>
            <span className="anim-hero-title__content">s</span>
            <span className="anim-hero-title__content">t</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">n</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">h</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">r</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">v</span>
            <span className="anim-hero-title__content">e</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">-l</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">p</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">r</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">w</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">h</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">n&nbsp;</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">y</span>
            <span className="anim-hero-title__content">e</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">f</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">r</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">g</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">l</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">s</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">g</span>
            <span className="anim-hero-title__content">n</span>
          </div>
        </h1>
      </div>
    </section>
  );
};
export default LongTextBlock;
