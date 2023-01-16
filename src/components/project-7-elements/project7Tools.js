import React from "react";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiAdobeillustrator } from "@react-icons/all-files/si/SiAdobeillustrator";
import { SiAdobephotoshop } from "@react-icons/all-files/si/SiAdobephotoshop";
import { SiAdobexd } from "@react-icons/all-files/si/SiAdobexd";
const Project7Tools = () => {
  return (
    <section
      data-scroll-section
      className="toolkit-section bg-gray-custom w-full 5 flex flex-col items-center mt-12"
    >
      <h2 className="text-6xl md:text-4xl xl:text-5xl font-bold text-center py-4 lg:py-8">Used tools:</h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-6 gap-6 justify-items-center md:flex md:flex-wrap md:justify-center  pb-12 md:pb-24">
        <div className="self-center">
          <SiJavascript className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiSass className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>

        <div className="self-center">
          <SiAdobeillustrator className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobephotoshop className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobexd className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default Project7Tools;
