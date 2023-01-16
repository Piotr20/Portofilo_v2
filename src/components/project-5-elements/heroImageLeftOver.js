import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const heroImageLeftOver = ({ company }) => {
  const data = useStaticQuery(graphql`
    query HeroImageLeftOverQuery {
      allFile(filter: { name: { eq: "leftover-hero-image-project" } }) {
        nodes {
          childrenImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          name
        }
      }
    }
  `);
  return (
    <section data-scroll-section className="w-full flex flex-col items-center">
      <div className=" w-full h-screen-75 lg:h-auto lg:w-10/12">
        <Img style={{ height: "100%" }} fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid} />
      </div>
      <div className="w-full lg:w-10/12">
        <h1 className="px-4 md:px-0 py-2 md:py-8 text-5xl lg:text-7xl xl:text-8xl font-bold">Left Over</h1>
      </div>
    </section>
  );
};
export default heroImageLeftOver;
