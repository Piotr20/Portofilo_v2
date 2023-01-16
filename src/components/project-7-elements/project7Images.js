import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Project7Image = ({ type, className }) => {
  const data = useStaticQuery(graphql`
    query Project7ImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "arla-project-images" } }) {
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

  const properImageData = data.allFile.nodes.find((image) => image.name === `arla-${type}`);

  return (
    <Img
      style={{ height: "100%", width: "100%" }}
      fluid={properImageData && properImageData.childrenImageSharp[0].fluid}
    />
  );
};
export default Project7Image;
