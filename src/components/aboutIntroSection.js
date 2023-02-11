import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query AboutImageQuery {
      allFile(filter: { name: { eq: "me-sitting" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
            name
          }
        }
      }
    }
  `);
  return (
    <section data-scroll-section className="mb-20 pt-48 lg:pt-72 text-black flex ">
      <div className="flex flex-col md:flex-row  md:justify-between">
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold -mt-18 xl:-mt-24 lg:mb-12">
            About <br /> me
          </h1>
          <p className="pr-2 lg:pr-12 my-8 md:mt-0 self-center lg:w-full text-lg md:text-xl 2xl:text-2xl">
            My name is Piotr Pospiech, a frontend developer from Poland based in Aarhus, Denmark. I recently
            completed my Web Developer Bachelor's degree in January 2023, after finishing my Multimedia Design
            AP in 2021. With almost 2 years of industry experience, I have worked with a diverse range of
            companies, including startups, digital design agencies, and big eCommerce consultancies.
            <br />
            <br />
            My primary expertise lies in frontend development and I have a strong foundation in technologies
            such as Next.js, Remix.js, React.js, Vue.js, and TypeScript. I am also proficient in Symfony and
            Ionic, as well as various CSS frameworks such as Styled Components or TailwindCSS. While my focus
            is on frontend development, I have a solid understanding of backend development and design
            principles, allowing me to bring a well-rounded approach to my projects.
            <br />
            <br />
            I am a curious, driven, and passionate individual who is always eager to learn and grow. I have
            excellent communication skills and can easily adjust to different team dynamics and communication
            styles. I am also a supportive team player and can take initiative when necessary.
            <br />
            <br />
            Overall, I am dedicated to my work and strive to deliver high-quality results for my clients and
            employers.
          </p>
        </div>
        <div className="w-full md:w-2/5 self-center">
          <div className="w-full ">
            <Img
              style={{ height: "100%", width: "100%" }}
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutIntro;
