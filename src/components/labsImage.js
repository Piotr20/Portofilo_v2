import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const LabsImage = ({ type, className }) => {
  const data = useStaticQuery(graphql`
    query LabsImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "labs-images" } }) {
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

  const properImageData = data.allFile.nodes.find((image) => image.name === type);

  return (
    <Img
      style={{ height: "100%", width: "100%" }}
      fluid={properImageData && properImageData.childrenImageSharp[0].fluid}
    />
  );
};
export default LabsImage;
