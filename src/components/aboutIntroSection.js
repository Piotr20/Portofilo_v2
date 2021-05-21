import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query AboutImageQuery {
      allFile(filter: { name: { eq: "me-sitting" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
            name
          }
        }
      }
    }
  `);
  return (
    <section
      data-scroll-section
      className=" mb-32 pt-48 lg:pt-96 text-black flex "
    >
      <div className="flex flex-col md:flex-row  md:justify-between">
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold -mt-18 xl:-mt-24 lg:mb-40 xl:mb-1/2">
            About <br /> me
          </h1>
          <p className="px-2 mt-8 self-center lg:w-3/5 text-lg md:text-xl 2xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <p className="px-2 mb-12 self-center lg:w-3/5 lg:pt-8 text-lg md:text-xl 2xl:text-2xl">
            Varius consequat malesuada ullamcorper consequat pellentesque
            pharetra, urna, blandit. Nunc at cras diam urna. Tincidunt faucibus
            nibh at gravida eu sit. Donec justo, id scelerisque neque. Eget sit
            ullamcorper amet nec vulputate metus odio vulputate faucibus. Congue
            rutrum luctus proin ultrices tellus facilisi molestie.
          </p>
        </div>
        <div className="w-full md:w-2/5">
          <div className="w-full ">
            <Img
              style={{ height: "100%", width: "100%" }}
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutIntro;
