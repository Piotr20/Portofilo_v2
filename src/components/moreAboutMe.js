import { Link } from "gatsby";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MoreInfo = () => {
  return (
    <section
      data-scroll-section
      className="container about-me-container flex flex-col items-center py-16"
    >
      <h2 className=" font-semibold text-3xl md:text-4xl about-me-item 2xl:text-6xl text-center ">
        Little more about me
      </h2>
      <p className="text-lg md:text-xl 2xl:text-2xl about-me-item text-center px-2 py-6 md:w-5/6 2xlw:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, est,
        laoreet nisl nulla pellentesque pretium interdum habitant. Mattis tempor
        felis eget ultricies. Nisi, purus id volutpat,
      </p>
      <Link
        className="px-8 md:px-18 md:py-2 md:mt-4 text-lg about-me-item md:text-xl 2xl:text-2xl rounded-2xl md:rounded-3xl border-black transition-colors duration-300 hover:bg-black hover:text-white border-2 md:border-3"
        to="/about"
      >
        More
      </Link>
    </section>
  );
};
export default MoreInfo;
