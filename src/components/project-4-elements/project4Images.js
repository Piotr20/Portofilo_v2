import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Project4Image = ({ type }) => {
  const data = useStaticQuery(graphql`
    query Project4ImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "smokepins-project-images" } }) {
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
  console.log(data);

  return (
    <div>
      {data.allFile.nodes.map((image, i) => {
        return (
          <div key={i}>
            {image.name === `smokepins-${type}` ? (
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

  //   switch (company) {
  //     default:
  //       return <img src="" alt="Ups.. something went wrong" />;
  //     case "billig-animation":
  //       return (
  //         <Img
  //           style={{ height: "100%", width: "100%" }}
  //           imgStyle={{ objectPosition: "95% top" }}
  //           fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
  //         />
  //       );
  //     case "arla":
  //       return (
  //         <Img
  //           style={{ height: "100%", width: "100%" }}
  //           imgStyle={{ objectPosition: "95% top" }}
  //           fluid={data.allFile.nodes[1].childrenImageSharp[0].fluid}
  //         />
  //       );
  //     case "siguna":
  //       return (
  //         <Img
  //           style={{ height: "100%", width: "100%" }}
  //           imgStyle={{ objectPosition: "right center" }}
  //           fluid={data.allFile.nodes[2].childrenImageSharp[0].fluid}
  //         />
  //       );
  //     case "smokepins":
  //       return (
  //         <Img
  //           style={{ height: "100%", width: "100%" }}
  //           imgStyle={{ objectPosition: "95% top" }}
  //           fluid={data.allFile.nodes[3].childrenImageSharp[0].fluid}
  //         />
  //       );
  //   }
};
export default Project4Image;
