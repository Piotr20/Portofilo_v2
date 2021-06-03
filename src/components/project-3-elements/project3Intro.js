import React from "react";
import Container from "../layout-elements/container";

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const Project3Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-4  2xl:pt-12 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Arla is a Danish multinational cooperative based in Viby, Denmark, and
          the largest producer of dairy products in Scandinavia. They strong
          focus goes towards making farming sustainable, they plan to achieve 0
          carbon emission by 2050.
        </h2>
        <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          When we took over the taks our goal was to come up with a solution
          that will encourage farmers to join Arla in their goal of reducing
          carbon emission. The most emphasis was put on making the solution as
          user friendly as it is possible.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Client:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  Arla Farmers / <br /> Arla Garden +
                </p>
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
                <p className="text-lg md:text-2xl">Marketing strategy</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Web animation</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Development</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 xl:w-1/5 py-2 lg:py-4">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-4">
              <li>
                <p className="text-lg md:text-2xl">
                  Come up with a solution that can fill all the needs of Danish
                  farmers and make taking care of our planet as pleasant
                  expierience as possible.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-4 group">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300"
            href="https://xd.adobe.com/view/864f31be-5aba-4872-99cb-14c97e09827a-d31c/"
          >
            <h3 className="font-semibold text-3xl 2xl:text-4xl group-hover:text-custo-blue transition-colors duration-300">
              View prototype
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
export default Project3Intro;
