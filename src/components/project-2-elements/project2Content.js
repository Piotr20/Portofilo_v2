import React from "react";
import Container from "../layout-elements/container";
import Project2Image from "./project2Images";

const Project2Content = () => {
  return (
    <section data-scroll-section>
      <Container>
        <div className="py-6 ">
          <Project2Image type="styletile" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" w-full md:w-1/2 py-6 ">
            <Project2Image type="box" />
          </div>
          <div className=" w-full md:w-1/2 py-6 ">
            <Project2Image type="infographic-1" />
          </div>
        </div>
        <div className="w-full md:flex items-end justify-between">
          <div className=" md:w-1/2 py-6 ">
            <Project2Image type="frontpage" />
          </div>
          <div className=" md:w-1/2 py-6 md:flex md:justify-center">
            <div className=" md:w-7/12 md:mb-16">
              <h3 className="font-semibold text-3xl 2xl:text-4xl">
                Code & design:
              </h3>
              <p className=" pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                We created a unique visual identity that carried through all.
                aspects of the business distingushes Smokepins ApS from other
                competitiors making their brand memorable. This project was not.
                as much for a coding as it was rather for design and marketing.
                Even though it was not very code-wise project we included.
                several immersive effects like e. g. lines drawing on scroll.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project2Content;
