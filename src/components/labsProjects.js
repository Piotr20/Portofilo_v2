import React from "react";
import LabsImage from "./labsImage";
import { FaVuejs } from "@react-icons/all-files/fa/FaVuejs";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { IoLogoSass } from "@react-icons/all-files/io/IoLogoSass";
import { BsFillBootstrapFill } from "@react-icons/all-files/bs/BsFillBootstrapFill";

const LabsProjects = ({ className }) => {
  return (
    <section data-scroll-section className=" w-full pt-16 pb-6 md:pt-32 md:pb-12">
      <div className="flex flex-col md:grid grid-cols-4 grid-rows-3 gap-6 md:gap-8">
        <div className="w-full h-ful col-start-1 row-span-2 ">
          <a href="https://vue-firebase-music-app.vercel.app/#/">
            <div className="labs-image-container">
              <LabsImage type="vue-firebase-music-app" />
            </div>
          </a>
          <div>
            <h3 className="text-2xl font-semibold lg:text-3xl pt-2 ">Music app</h3>
            <div className="flex items-center pb-2">
              <SiFirebase className=" w-16 h-16" />
              <FaVuejs className=" w-16 h-16" />
              <IoLogoSass className=" w-16 h-16" />
            </div>
            <a
              className="text-xl underline-custom-hover-blue transition-colors duration-300 hover:text-custo-blue"
              href="https://github.com/Piotr20/Vue-Firebase"
            >
              Code
            </a>
          </div>
        </div>
        <div className="w-full h-ful col-start-2 row-start-2 row-span-2 ">
          <a href="https://vue-js-mobile-app.vercel.app/">
            <div className="labs-image-container">
              <LabsImage type="todo-vue-app" />
            </div>
          </a>
          <div>
            <h3 className="text-2xl font-semibold lg:text-3xl pt-2 ">To do list</h3>
            <div className="flex items-center pb-2">
              <BsFillBootstrapFill className=" w-16 h-16" />
              <FaVuejs className=" w-16 h-16" />
            </div>
            <a
              className="text-xl underline-custom-hover-blue transition-colors duration-300 hover:text-custo-blue"
              href="https://github.com/Piotr20/Vue.js-mobile-app"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LabsProjects;
