import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const Project2Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Smokepins is a small Danish start-up company funded by Ole Grawrok.
          The company focuses on quality, hand made products that come in handy
          for fisherman, food enthusiasts and all sorts of adventurers.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          Our job was to rebrand the company's identity as well as come up with
          efficient marketing strategy that would positivly ifluence company
          itself as well as it's customers. We achieved that by applying
          several. multimedia strategies and tools. The steps we took turned out
          to be a success bringing client more interest and customers.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Smokepins ApS</p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Services:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Development</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">UX & UI design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Marketing strategy</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Web animation</p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  To make sure that the identity of the company is properly
                  shown through they digital presence
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group ">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300 "
            href="https://smokepins.dk/"
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
export default Project2Intro;
