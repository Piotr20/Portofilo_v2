import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const Project1Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          IMPACT is a digital consultancy that aims to improve eCommerce and transform brands through building
          long-lasting relationships, rather than just transactions.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          This project was a part of our Bachelor project. Our focus was to analyze and create a solution that
          could improve internal communication between employees at IMPACT. With our solution we reduced the
          time vaste by 95% which transpiles to a substancial savings from the financial side as well.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">IMPACT A/S</p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Services:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Frontend</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Backend</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">UX & UI design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Analytical research</p>
              </li>
            </ul>
          </div>
          <div className=" lg:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  Our aim was to identify any obstacles and develop the solution to resolve them.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group w-max">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300 "
            href="https://bachelor-project-tau.vercel.app/"
          >
            <h3 className="font-semibold group-hover:text-custo-blue transition-colors duration-300  text-3xl 2xl:text-4xl">
              View site
            </h3>

            <p className="md:hidden  pt-2 text-lg underline-custom">Click here</p>
            <BsArrowRight className="hidden md:block w-12 h-12 transform scale-x-150 " />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Project1Intro;
