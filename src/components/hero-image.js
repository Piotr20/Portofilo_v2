import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const HeroImage = ({ company }) => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      allFile(filter: { relativeDirectory: { eq: "work-hero-images" } }) {
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

  switch (company) {
    default:
      return <img src="" alt="Ups.. something went wrong" />;

    case "arla":
      return (
        <Img
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectPosition: "95% top" }}
          fluid={data.allFile.nodes[1].childrenImageSharp[0].fluid}
        />
      );
    case "billig-animation":
      return (
        <Img
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectPosition: "95% top" }}
          fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
        />
      );
    case "siguna":
      return (
        <Img
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectPosition: "95% top" }}
          fluid={data.allFile.nodes[3].childrenImageSharp[0].fluid}
        />
      );
    case "smokepins":
      return (
        <Img
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectPosition: "right center" }}
          fluid={data.allFile.nodes[2].childrenImageSharp[0].fluid}
        />
      );
  }
};
export default HeroImage;
