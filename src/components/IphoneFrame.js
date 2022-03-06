import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const IphoneFrame = ({ className }) => {
  const data = useStaticQuery(graphql`
    query IphoneFrameQuery {
      allFile(filter: { name: { eq: "iphone-frame" } }) {
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
    <div className={className}>
      <Img style={{ height: "100%", width: "100%" }} fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid} />
    </div>
  );
};
export default IphoneFrame;
