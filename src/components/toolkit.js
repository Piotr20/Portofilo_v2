import React from "react";
import {
  FaReact,
  FaVuejs,
  FaGulp,
  FaInvision,
  FaBootstrap,
} from "react-icons/fa";
import { GrGatsbyjs, GrWordpress } from "react-icons/gr";
import {
  SiTypescript,
  SiSass,
  SiWebgl,
  SiFirebase,
  SiTailwindcss,
  SiPostcss,
  SiAdobecreativecloud,
  SiGreensock,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const MyToolkit = () => {
  return (
    <section
      data-scroll-section
      className="toolkit-section bg-gray-custom w-full 5 flex flex-col items-center mt-12"
    >
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center py-4 lg:py-8">
        My toolkit
      </h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-3 justify-items-center md:flex md:flex-wrap md:justify-center  pb-12 md:pb-24">
        <div className="self-center">
          <FaReact className=" toolkit-item h-16 w-16 2xl:w-24 2xl:h-24" />
        </div>
        <div lassName=" self-center ">
          <FaVuejs className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName=" self-center">
          <GrGatsbyjs className=" toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiTypescript className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiSass className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName=" self-center">
          <SiTailwindcss className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiGreensock className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <GrWordpress className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiWebgl className="toolkit-item  w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName=" self-center">
          <SiFirebase className=" toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName=" self-center">
          <SiPostcss className=" toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName=" self-center">
          <FaGulp className=" toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <FaBootstrap className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <FaInvision className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiAdobecreativecloud className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <FiFigma className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default MyToolkit;
