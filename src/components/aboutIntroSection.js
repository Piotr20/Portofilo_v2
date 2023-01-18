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
    <section data-scroll-section className=" mb-32 pt-48 lg:pt-96 text-black flex ">
      <div className="flex flex-col md:flex-row  md:justify-between">
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold -mt-18 xl:-mt-24 lg:mb-20 xl:mb-1/2">
            About <br /> me
          </h1>
          <p className="px-2 my-8 md:mt-0 self-center lg:w-3/5 text-lg md:text-xl 2xl:text-2xl">
            My name is Piotr Andrzej Pospiech and I come from Poland. I am frontend developer with a passion
            to design and animation. I moved to Denmark in 2019 and later finished my bachelor degree in Web
            Development in 2023.
            <br />
            <br />
            During my education and proffesional career I had an opprotunity to work in various companies from
            startups, design agencies to eCommerce consultancy agencies. Each of this opportunities gave me
            valuable experiences which now I am able to use in my daily work.
            <br />
            <br />I am a person with wide range of skills both proffesional and personal being as focused on
            the task as on the good atmosphere within a team sometimes filling the gaps in the collaboration
            when needed.
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
