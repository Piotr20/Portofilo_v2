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
          <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold -mt-18 xl:-mt-24 lg:mb-28 xl:mb-1/2">
            About <br /> me
          </h1>
          <p className="px-2 my-8 md:mt-0 self-center lg:w-3/5 text-lg md:text-xl 2xl:text-2xl">
            My name is Piotr Pospiech and I come from Poland. I am frontend
            developer with a passion to design and animation. I moved to Denmark
            in 2019 and started my education at Business Academy Aarhus.
            <br />
            <br /> During my educations I worked with different languages but
            the forntend is what makes me happy to code every day. What I enjoy
            much as well is design in all sorts of forms which can be seen in my
            approach to the projects either professional or private. <br />
            <br /> I find myself useful in all sorts of position but the one I
            like the most is working alongside designers and developers.
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
