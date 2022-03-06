import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const HeroImage = ({ company }) => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      allFile(filter: { relativeDirectory: { eq: "work-hero-images" } }, sort: { fields: modifiedTime }) {
        nodes {
          childrenImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          name
        }
      }
    }
  `);
  const properImageData = data.allFile.nodes.find((image) => image.name === `${company}-hero-image`);

  return (
    <Img
      style={{ height: "100%", width: "100%" }}
      imgStyle={{ objectPosition: "right center" }}
      fluid={properImageData && properImageData.childrenImageSharp[0].fluid}
    />
  );
};
export default HeroImage;
