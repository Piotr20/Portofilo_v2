import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Cv = () => {
  const data = useStaticQuery(graphql`
    query CvQuery {
      allFile(filter: { relativeDirectory: { eq: "download" } }) {
        nodes {
          relativePath
          name
          absolutePath
          nlink
          publicURL
        }
      }
    }
  `);
  console.log(data);
  return (
    <section
      data-scroll-section
      className=" py-20 pb-24 flex flex-col items-center cv-container"
    >
      <h2 className="text-4xl cv-item 2xl:text-5xl  font-bold text-center">
        Want to see my CV?
      </h2>
      <p className="text-lg cv-item lg:text-2xl">
        You can download it in here:
      </p>
      <a
        className="px-8 md:px-12 cv-item md:py-2 mt-6  text-lg about-me-item md:text-xl 2xl:text-2xl rounded-2xl md:rounded-3xl border-black transition-colors duration-300 hover:bg-black hover:text-white border-2 md:border-3"
        href={data.allFile.nodes[0].publicURL}
        download
      >
        Download
      </a>
    </section>
  );
};
export default Cv;
