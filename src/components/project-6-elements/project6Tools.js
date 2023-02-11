import React from "react";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiAdobeillustrator } from "@react-icons/all-files/si/SiAdobeillustrator";
import { SiAdobephotoshop } from "@react-icons/all-files/si/SiAdobephotoshop";
import { SiAdobexd } from "@react-icons/all-files/si/SiAdobexd";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiGreensock } from "@react-icons/all-files/si/SiGreensock";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs";
import { GrWordpress } from "@react-icons/all-files/gr/GrWordpress";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { SiAdobeaftereffects } from "@react-icons/all-files/si/SiAdobeaftereffects";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { SiNpm } from "@react-icons/all-files/si/SiNpm";

const Project6Tools = () => {
  return (
    <section
      data-scroll-section
      className="toolkit-section bg-black w-full 5 flex flex-col items-center mt-12"
    >
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center py-4 lg:py-8 text-white">
        Used tools:
      </h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-3 justify-items-center md:flex md:flex-wrap md:justify-center  pb-12 md:pb-24">
        <div className="self-center">
          <FaReact className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <GrGatsbyjs className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <GrWordpress className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiGreensock className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiTailwindcss className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiSass className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiWebpack className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiNpm className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <FiFigma className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobeillustrator className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobephotoshop className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobeaftereffects className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobexd className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default Project6Tools;
