import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./hero-image";

const WorkProjects = () => {
  return (
    <section data-scroll-section className="pb-16">
      <div className=" w-full lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:gap-36 2xl:gap-64 lg:-mt-48">
        <div className="py-12 project-container-2 md:py-0 lg:row-start-2 lg:row-span-2">
          <AniLink paintDrip hex="#3D59E9" to="/project-2">
            <div className="project-item-2 work-image-container relative z-1 ">
              <HeroImage company="smokepins" />
            </div>
          </AniLink>
          <h3 className="text-4xl project-item-2 pt-4 md:pt-2 md:text-5xl xl:text-6xl xl:leading-snug font-bold">
            Smokepins
          </h3>
          <p className="text-lg lg:pr-6 project-item-2 lg:text-2xl pt-2 ">
            Development, UX & UI design, Marketing strategy, Web animations
          </p>
        </div>
        <div className="py-12 project-container-1 md:py-0 lg:row-start-4 lg:row-span-2">
          <AniLink paintDrip hex="#3D59E9" to="/project-1">
            <div className=" work-image-container project-item-1 relative z-1 ">
              <HeroImage company="siguna" />
            </div>
          </AniLink>
          <h3 className="text-4xl pt-4  md:pt-2 project-item-1 md:text-5xl xl:text-6xl xl:leading-snug font-bold">
            Siguna
          </h3>
          <p className="text-lg lg:pr-6 lg:text-2xl project-item-1 pt-2 ">
            CMS, UX design, Development, Animation
          </p>
        </div>
        <div className="py-12 project-container-3 md:py-0 lg:row-start-3 lg:row-span-2">
          <AniLink paintDrip hex="#3D59E9" to="/project-3">
            <div className="project-item-3 work-image-container relative z-1 ">
              <HeroImage company="arla" />
            </div>
          </AniLink>
          <h3 className="text-4xl project-item-2 pt-4 md:pt-3 md:text-5xl xl:text-6xl xl:leading-snug font-bold">
            Arla
          </h3>
          <p className="text-lg lg:pr-6 lg:text-2xl project-item-3 pt-2 ">
            Development, Web animations, Marketing strategy, UX & UI design
          </p>
        </div>
        <div className="py-12 project-container-4 md:py-0 lg:row-start-1 lg:row-span-2">
          <AniLink paintDrip hex="#3D59E9" to="/project-4">
            <div className="work-image-container project-item-4 relative z-1 ">
              <HeroImage company="billig-animation" />
            </div>
          </AniLink>
          <h3 className="text-4xl project-item-4 pt-4 md:pt-2 md:text-5xl xl:text-6xl xl:leading-snug font-bold">
            Billig animation
          </h3>
          <p className="text-lg lg:pr-6 project-item-4 lg:text-2xl pt-2 ">
            Rebranding, Development , UX & UI design, Web animations
          </p>
        </div>
      </div>
    </section>
  );
};
export default WorkProjects;
