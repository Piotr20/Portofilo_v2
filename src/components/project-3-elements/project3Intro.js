import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const Project3Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Over 1/3 of all the food we are buying ends up as waste. That fact is a literal waste of human effort and money, but there is many ways to
          deak wutg ut both traditional and digital and Left Over app focuses on the second one.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          Left over was a semseter project that was a full stack soluton to help preventing or at least limiting food waste. We combined our design,
          backend and frontend knowledge into one usable SPA web app.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Left Over</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Services:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">UX & UI design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Research</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Frontend development</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Backend development</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  The purpose was to combine our knowledge about backend, frontend and design and create a digital solution that can be actually
                  usable.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group">
          <a className="inline-block group-hover:text-custo-blue transition-colors duration-300" href="http://left-over.piotrpospiech.com/#/login">
            <h3 className="font-semibold text-3xl 2xl:text-4xl group-hover:text-custo-blue transition-colors duration-300">View site</h3>

            <p className="md:hidden pt-2 text-lg underline-custom">Click here</p>
            <BsArrowRight className="hidden md:block w-12 h-12 transform scale-x-150" />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Project3Intro;
