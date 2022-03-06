import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Project3Image = ({ type, className }) => {
  const data = useStaticQuery(graphql`
    query Project5ImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "made4men-project-images" } }) {
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

  const properImageData = data.allFile.nodes.find((image) => image.name === `made4men-${type}`);

  return <Img style={{ height: "100%", width: "100%" }} fluid={properImageData && properImageData.childrenImageSharp[0].fluid} />;
};
export default Project3Image;
