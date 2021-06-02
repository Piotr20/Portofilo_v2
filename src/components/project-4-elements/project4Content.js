import React from "react";
import Container from "../layout-elements/container";
import Project4Image from "./project4Images";
import { graphql, useStaticQuery } from "gatsby";

const Project4Content = () => {
  const data = useStaticQuery(graphql`
    query BilligAnimationVideoQuery {
      allFile(filter: { relativeDirectory: { eq: "videos" } }) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <section data-scroll-section>
      <Container>
        <div className="w-full flex h-auto">
          <video
            className="w-full lg:h-screen-80"
            autoPlay
            muted
            loop
            src={data.allFile.edges[1].node.publicURL}
          />
        </div>
        <div className="py-6">
          <Project4Image type="styletile" />
        </div>
      </Container>
    </section>
  );
};
export default Project4Content;
