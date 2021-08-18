import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const Project1Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Siguna is a Danish international company specialised in selling oil
          filters to fregates and big transportation ships all over the Europe
          and Asia.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          Our main focus in this project went into performance and looks of the
          website. The objective was to make the website performant enough so it
          is possible to use it in the middle of the sea.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  Siguna Industry & Marine ApS
                </p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Services:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">CMS</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">UX design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Development</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Animations</p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  The purpose was to create a website that looks good and is
                  exceptionaly performant.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group ">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300 "
            href="https://sigunafilters.com/"
          >
            <h3 className="font-semibold group-hover:text-custo-blue transition-colors duration-300  text-3xl 2xl:text-4xl">
              View site
            </h3>

            <p className="md:hidden  pt-2 text-lg underline-custom">
              Click here
            </p>
            <BsArrowRight className="hidden md:block w-12 h-12 transform scale-x-150 " />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Project1Intro;
