import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Project4Image = ({ type }) => {
  const data = useStaticQuery(graphql`
    query Project4ImagesQuery {
      allFile(
        filter: { relativeDirectory: { eq: "billig-animation-project-images" } }
      ) {
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
            {image.name === `billig-animation-${type}` ? (
              <Img
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectPosition: "95% top" }}
                fluid={image.childrenImageSharp[0].fluid}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Project4Image;
