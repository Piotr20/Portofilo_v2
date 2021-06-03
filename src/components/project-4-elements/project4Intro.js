import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
const Project4Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Billig animation is a small company located in Aarhus, founded and
          managed by Daniel Jensen. Company makes animation movies for companies
          and partners of all sizes varying from TV2 to small handy man.
          companies. What makes them different is the fact that they combine
          quality with price as well as the fact that their all truly Danish
          company.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          When we started analysing the company and their digital presence, we
          did not have any doubts that the business model works. Although we
          also spotted things that do not work and can bring some serious
          benefits to the company and exactly on those aspects we are going to
          focus on this project.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Billig animation ApS</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Services:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">Rebranding</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Development</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">UX & UI design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Web animation</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  To find out what does not work in terms of digital presence of
                  the company and create webste that ranks as high as possible
                  in the SEO.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300"
            href="https://billig-animation.piotrpospiech.com/"
          >
            <h3 className="font-semibold text-3xl group-hover:text-custo-blue transition-colors duration-300  2xl:text-4xl">
              View site
            </h3>

            <p className="md:hidden pt-2 text-lg underline-custom">
              Click here
            </p>
            <BsArrowRight className="hidden md:block w-12 h-12 transform scale-x-150" />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Project4Intro;
