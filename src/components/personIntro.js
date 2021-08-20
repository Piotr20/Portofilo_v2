import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const PersonIntro = () => {
  const data = useStaticQuery(graphql`
    query IntroImageQuery {
      allFile(filter: { name: { eq: "me-standing" } }) {
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
      className="container me-intro-container w-full flex flex-col-reverse md:flex-row pt-12 md:py-36 lg:max-w-4xl xl:max-w-screen-xl 2xl:max-w-screen-2xl items-center justify-between"
    >
      <div className=" pt-12 md:pt-0 w-full md:w-1/2 ">
        <h2 className=" text-3xl me-intro-item md:text-4xl xl:text-5xl xl:leading-tight 2xl:text-6xl 2xl:leading-tight text-center md:text-left font-semibold  ">
          Hi I’m Piotr <br />
          Frontend <span className="text-white outlined-text">developer</span>,
          <br />
          that knows <br />a little about
          <br />
          <span className="text-white me-intro-item outlined-text">design</span>
        </h2>
      </div>

      <div className="w-full md:w-2/5 me-intro-item lg:w-2/5">
        <Img
          style={{ height: "100%", width: "100%" }}
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        />
      </div>
    </section>
  );
};
export default PersonIntro;
