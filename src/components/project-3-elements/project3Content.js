import React from "react";
import Container from "../layout-elements/container";
import Project3Image from "./project3Images";
import { graphql, useStaticQuery } from "gatsby";

const Project3Content = () => {
  const data = useStaticQuery(graphql`
    query Made4MenVideoQuery {
      allFile(filter: { relativeDirectory: { eq: "videos" } }) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
          }
        }
      }
    }
  `);

  return (
    <section data-scroll-section>
      <Container>
        <div className="w-full flex h-auto">
          <video
            className="w-full border-4 border-black lg:h-auto"
            autoPlay
            muted
            loop
            src={data.allFile.edges[4].node.publicURL}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 ">
          <div className="w-full md:w-1/2">
            <Project3Image type="team-role" />
          </div>
          <div className="py-6 flex flex-col items-center md:w-1/2">
            <div className="">
              <h3 className="font-semibold text-3xl 2xl:text-5xl">Team role</h3>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16 md:w-4/5">
                Being part of a such big and complex project might be really confusing somethimes but with a
                good menagament it's very nice experience.
                <br />
                <br />
                My role during the whole process was quite wide. I was developer and a designer.
                <br /> <br /> My responsabilities were to ensure the design is being understood and exqcuted
                corectly and tweaked/adjusted when needed. <br /> <br /> As a developer I worked on many
                software integrations build parts of the shop, developed plugins and most of all colaborated
                with other developers on the team.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-16 ">
          <div className="w-full md:w-1/2">
            <Project3Image type="shopware" />
          </div>
          <div className="py-6 flex flex-col items-center md:w-1/2">
            <div className="">
              <h3 className="font-semibold text-3xl 2xl:text-5xl">Shopware 6</h3>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16 md:w-4/5">
                Shopware is quite new and hot technology to build e-commerce sites, being marketed as new
                Magento it definetly has a potential to be one.
                <br /> <br />
                Above all it is open source and plans to stay this way and a lot of companies are migrating to
                Shopware.
                <br />
                Shopware makes use of technologies such as: Docker, MGMX, mySQL, Vue.js, vanila JS, Symfony
                and it's Twig templating engine and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project3Content;
