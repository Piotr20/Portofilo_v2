import React from "react";
import {
  SiSass,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

const Project4Tools = () => {
  return (
    <section
      data-scroll-section
      className="toolkit-section bg-gray-custom w-full 5 flex flex-col items-center mt-12"
    >
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center py-4 lg:py-8">
        Used tools:
      </h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-3 justify-items-center md:flex md:flex-wrap md:justify-center  pb-12 md:pb-24">
        <div lassName="self-center">
          <SiJavascript className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiSass className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>

        <div lassName="self-center">
          <SiAdobeillustrator className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiAdobephotoshop className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div lassName="self-center">
          <SiAdobexd className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default Project4Tools;
