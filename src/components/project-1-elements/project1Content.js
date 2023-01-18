import React from "react";
import Container from "../layout-elements/container";
import Project1Image from "./project1Images";
import { graphql, useStaticQuery } from "gatsby";

const Project1Content = () => {
  const data = useStaticQuery(graphql`
    query ImpactConnectVideoQuery {
      allFile(
        filter: { relativeDirectory: { eq: "videos" }, base: { eq: "impact-connect-page-overview.mp4" } }
      ) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
            base
          }
        }
      }
    }
  `);

  return (
    <section data-scroll-section>
      <Container>
        <div className="w-full flex h-auto">
          <video
            className="w-full border-4 border-black lg:h-auto"
            autoPlay
            muted
            loop
            src={data.allFile.edges[0].node.publicURL}
          />
        </div>

        <div className="pt-6">
          <h3 className="font-semibold text-3xl 2xl:text-4xl">The problem:</h3>
          <p className="text-lg lg:text-xl 2xl:text-2xl pb-6">
            In recent years, IMPACT has experienced exponential growth, acquiring new assets and locations
            throughout Europe. This growth brought both opportunities and challenges, one of which was
            collaboration and the integration of new people into the organization. Only long-time employees
            knew who to reach out to for help, and we aimed to address this issue with our solution
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-4 md:pb-6">
          <div className="w-full md:w-1/2">
            <Project1Image type="architecture" />
          </div>
          <div className="py-6 md:w-1/3 flex flex-col items-start">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Architecture:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl md:pb-6 ">
              Our solution was designed to meet all clients' needs and allow for seamless integration. It
              encompasses all aspects of the product, from the backend and database to the frontend. We used
              Next.js with TypeScript for the frontend, Azure AD and Next Auth for the backend and security,
              MongoDB and Mongoose for data storage, and Zustand for state management and Styled Components
              for styling.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center md:py-6">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Our goal:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              At IMPACT, we set out to create a solution that would encourage employees to actively seek help
              from their colleagues within the organization, rather than facing problems alone. Our goal was
              to establish a behavior that enables employees to easily find the right person to assist them,
              thus avoiding the duplication of effort and the solving of already solved problems.
            </p>
          </div>
          <div className="w-full">
            <Project1Image type="home" />
          </div>
        </div>
        <div className="py-6 md:grid grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="">
            <Project1Image type="searchPage" />
          </div>
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Intuitive search:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              We aimed to improve the search experience by providing users with highly precise results. To
              achieve this, our search indexes not only include direct data such as names, but also indirect
              data such as skills and projects. This allows us to present multiple suggestions for each query,
              much like Google's search experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center py-6">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Projects & People:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              "Given the large number of projects and people in our database, it was essential to provide
              detailed information about each one. To make it user-friendly and easy to navigate, we decided
              to present the information in the form of a slider, which received positive feedback from our
              testers. This design choice not only made it feel like an app but also allowed for quick and
              easy access to the information for the user.
            </p>
          </div>
          <div className="w-full">
            <Project1Image type="project" />
          </div>
        </div>
        <div className="py-6">
          <Project1Image type="signUp" />
          <div className="pt-6">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Authentication and registration:</h3>
            <p className="text-lg lg:text-xl 2xl:text-2xl pb-6 ">
              Providing a personalized experience for each user while protecting their sensitive data from
              external threats is crucial. To achieve this, we used Azure AD B2C for authentication and
              security, which is managed by Microsoft and offers a high level of security. However, since we
              were unable to obtain all the necessary information through Azure, we also included our own
              sign-up process. This allows us to supplement the data obtained from Azure and ensures that all
              the information is safely stored in our database.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project1Content;
