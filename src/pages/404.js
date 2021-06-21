import React from "react";
import Header from "../components/layout-elements/header";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allFile(filter: { name: { eq: "404" } }) {
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
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full mx-auto md:w-2/5 xl:w-1/3 pt-40 md:pt-20 xl:pt-24">
        <Img
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectPosition: "95% top" }}
          fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
        />
      </div>
      <Link
        className="text-3xl underline-custom-hover transition-colors duration-300 hover:text-custo-blue md:text-4xl xl:text-5xl  font-bold"
        to="/"
      >
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
