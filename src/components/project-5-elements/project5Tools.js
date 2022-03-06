import React from "react";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { SiNpm } from "@react-icons/all-files/si/SiNpm";
import { SiSymfony } from "@react-icons/all-files/si/SiSymfony";
import { SiComposer } from "@react-icons/all-files/si/SiComposer";
import { SiDocker } from "@react-icons/all-files/si/SiDocker";
import { SiRedis } from "@react-icons/all-files/si/SiRedis";
import { SiAlgolia } from "@react-icons/all-files/si/SiAlgolia";
import { RiGitlabFill } from "@react-icons/all-files/ri/RiGitlabFill";

import { FaVuejs } from "@react-icons/all-files/fa/FaVuejs";

const Project5Tools = () => {
  return (
    <section data-scroll-section className="toolkit-section bg-gray-custom w-full 5 flex flex-col items-center mt-12">
      <h2 className="text-3xl md:text-5xl xl:text-5xl font-bold text-center py-5 lg:py-8">Used tools:</h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-3 justify-items-center md:flex md:flex-wrap md:justify-center  pb-12 md:pb-25">
        <div className="self-center">
          <SiPhp className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiSymfony className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiMysql className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiRedis className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiDocker className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiComposer className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAlgolia className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiWebpack className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiNpm className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiJavascript className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <FaVuejs className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiSass className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <FiFigma className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <RiGitlabFill className="toolkit-item w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default Project5Tools;
