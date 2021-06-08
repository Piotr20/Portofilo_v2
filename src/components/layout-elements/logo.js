import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: { name: { eq: "logo" } }) {
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
    <div className=" w-8 md:w-9 ">
      <Img
        style={{ width: "100%" }}
        fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
      />
    </div>
  );
};
export default Logo;
