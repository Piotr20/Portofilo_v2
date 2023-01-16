import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Project1Image = ({ type }) => {
  const data = useStaticQuery(graphql`
    query Project1ImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "impact-connect-project-images" } }) {
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
    <div>
      {data.allFile.nodes.map((image, i) => {
        return (
          <div key={i}>
            {image.name === `${type}` ? (
              <Img style={{ height: "100%", width: "100%" }} fluid={image.childrenImageSharp[0].fluid} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Project1Image;
