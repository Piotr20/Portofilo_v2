import React from "react";
import Container from "../layout-elements/container";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
const Project3Intro = () => {
  return (
    <section data-scroll-section>
      <Container>
        <h2 className=" w-full pt-5  2xl:pt-12 text-3xl lg:text-5xl 2xl:text-5xl font-semibold">
          Made4Men is an Danish online shop present also in Norway and Sweden. Mainly they are selling
          products dedicated for men so beauty and grooming products and accessories.
        </h2>
        <p className=" pt-5 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
          As part of the e-commerce development team was to deliver brand new e-shop for our custommer Firtal.
          Made4Men shifted from using Magento to a new technology called Shopware and our task was to release
          new Made4Men shop made with Shopware 6.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/5 xl:w-1/5 py-2 lg:py-5">
            <h3 className="font-semibold text-3xl 2xl:text-5xl">Client:</h3>
            <ul className="pt-2 lg:pt-5">
              <li>
                <p className="text-lg md:text-2xl">Firtal A/S</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 xl:w-1/5 py-2 lg:py-5">
            <h3 className="font-semibold text-3xl 2xl:text-5xl">Services:</h3>
            <ul className="pt-2 lg:pt-5">
              <li>
                <p className="text-lg md:text-2xl">UX & UI design</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Design supervision</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Backend development</p>
              </li>
              <li>
                <p className="text-lg md:text-2xl">Frontend development</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 xl:w-1/5 py-2 lg:py-5">
            <h3 className="font-semibold text-3xl 2xl:text-5xl">Purpose:</h3>
            <ul className="pt-2 lg:pt-5">
              <li>
                <p className="text-lg md:text-2xl">
                  The purpose was to produce and deliver on time new redesigned Made4Men site from Magento to
                  Shopware 6 in colaboration with another external development team.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 lg:py-5 group w-max">
          <a
            className="inline-block group-hover:text-custo-blue transition-colors duration-300"
            href="https://www.made4men.dk/"
          >
            <h3 className="font-semibold text-3xl group-hover:text-custo-blue transition-colors duration-300  2xl:text-5xl">
              View site
            </h3>

            <p className="md:hidden pt-2 text-lg underline-custom">Click here</p>
            <BsArrowRight className="hidden md:block w-12 h-12 transform scale-x-150" />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Project3Intro;
