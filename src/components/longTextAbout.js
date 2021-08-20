import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LongTextAbout = () => {
  const sectionRef = useRef(null);

  useEffect(() => {}, []);
  return (
    <section data-scroll-section className=" text-trigger">
      <div className="font-semibold mb-32  lg:py-12 text-black text-4xl leading-loose lg:text-5xl lg:leading-loose 2xl:text-7xl 2xl:leading-relaxed flex justify-center ">
        <h1 ref={sectionRef} className="hero-title hidden lg:block ">
          <div className="anim-hero-title overflow-hidden">
            <span className="anim-hero-title__content">I</span>
            <span className="anim-hero-title__content">'</span>
            <span className="anim-hero-title__content">m</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">v</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">l</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">p</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">r</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">h</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">b</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">n</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">s</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">c</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">n</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">s</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">g</span>
            <span className="anim-hero-title__content">n</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">g</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">h</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">r</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">s</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">h</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">t</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">v</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">r</span>
            <span className="anim-hero-title__content">y</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">p</span>
            <span className="anim-hero-title__content">r</span>
            <span className="anim-hero-title__content">o</span>
            <span className="anim-hero-title__content">j</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">c</span>
            <span className="anim-hero-title__content">t</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">n</span>
            <span className="anim-hero-title__content">d</span>
            <span className="anim-hero-title__content">s</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">u</span>
            <span className="anim-hero-title__content">p</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">m</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">&nbsp;</span>
            <span className="anim-hero-title__content">r</span>
            <span className="anim-hero-title__content">i</span>
            <span className="anim-hero-title__content">g</span>
            <span className="anim-hero-title__content">h</span>
            <span className="anim-hero-title__content">t</span>
          </div>
          <div className="anim-hero-title  overflow-hidden">
            <span className="anim-hero-title__content">p</span>
            <span className="anim-hero-title__content">l</span>
            <span className="anim-hero-title__content">a</span>
            <span className="anim-hero-title__content">c</span>
            <span className="anim-hero-title__content">e</span>
            <span className="anim-hero-title__content">.</span>
          </div>
        </h1>
        <h1 className="md:hidden leading-snug px-2 text-3xl">
          I'm developer/designer that binds design and code together so that
          every project ends up im a right place.
        </h1>
      </div>
    </section>
  );
};
export default LongTextAbout;
