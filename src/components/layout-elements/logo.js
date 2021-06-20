import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: { relativeDirectory: { eq: "logos" } }) {
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
    <div className=" w-8 md:w-9 xl:w-10 relative ">
      <div className="absolute w-full logo-black top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Img
          style={{ width: "100%" }}
          fluid={data.allFile.nodes[1].childrenImageSharp[0].fluid}
        />
      </div>
      <div className="absolute w-full logo-color top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Img
          style={{ width: "100%" }}
          fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
        />
      </div>
    </div>
  );
};
export default Logo;
