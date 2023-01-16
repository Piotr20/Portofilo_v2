import React from "react";
import Container from "../layout-elements/container";
import Project1Image from "./project1Images";
import { graphql, useStaticQuery } from "gatsby";

const Project1Content = () => {
  const data = useStaticQuery(graphql`
    query ImpactConnectVideoQuery {
      allFile(
        filter: { relativeDirectory: { eq: "videos" }, base: { eq: "impact-connect-page-overview.mp4" } }
      ) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
            base
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
            src={data.allFile.edges[0].node.publicURL}
          />
        </div>

        <div className="pt-6">
          <h3 className="font-semibold text-3xl 2xl:text-4xl">Visual identity:</h3>
          <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-6">
            Besides website that is performant we wanted to create a website that represents the company's
            identity. The design we decided to go with in my opinion works perfectly bringing the attention
            rather then confusing customers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-4 pb-6">
          <div className="w-1/2">
            <Project1Image type="home" />
          </div>
          <div className="py-6 md:w-1/3 flex flex-col items-start">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">RWD is the key:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              We made sure that the coded solution is working perfectly for all users does not matter if you
              use desktop or mobile you can be comfortable with using the solution.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Gatsby & performance:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              Whole website is built using gatsby which is React based REST API. Thanks to that we made sure
              that the website is as performant as it was possible scoring 96 in Lighthouse
            </p>
          </div>
          <div className="w-full pb-6">
            <Project1Image type="project" />
          </div>
        </div>
        <div className="py-6 md:grid grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Sanity CMS:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              For CMS we decided to ho with Sanity since it was a clients choice and in general is a good CMS.
              We combimed it with Netlify for fast deployment builds.
            </p>
          </div>
          <div className="">
            <Project1Image type="searchPage" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project1Content;
